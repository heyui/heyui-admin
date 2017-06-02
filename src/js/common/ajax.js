let ajax = {
  PREFIX: "/api",
  HEADER: "heyui",
  requestingApi: new Set(),
  changeHeader(header) {
    this.HEADER = header;
  },
  extractUrl: function(url) {
    return url ? url.split("?")[0] : "";
  },
  isRequesting: function(url) {
    let api = this.extractUrl(url);
    return this.requestingApi.has(api);
  },
  addRequest: function(url) {
    let api = this.extractUrl(url);
    this.requestingApi.add(api);
  },
  deleteRequest: function(url) {
    let api = this.extractUrl(url);
    this.requestingApi.delete(api);
  },
  getJson: function(url, paramJson, extendParam) {
    return this.ajax({
      url: url,
      type: "GET",
      cache: false,
      dataType: "json",
      data: paramJson
    }, extendParam);
  },
  get: function(url, param, extendParam) {
    let params = {
      url,
      type: 'GET',
      dataType: "json",
    };
    if (!$.isEmptyObject(param)) {
      params.data = param;
    }
    return this.ajax(params, extendParam);
  },
  post: function(url, param, extendParam) {
    var params = {
      url,
      type: 'POST'
    };
    if (!$.isEmptyObject(param)) {
      params.data = param;
    }
    return this.ajax(params, extendParam);
  },
  postJson: function(url, paramJson, extendParam) {
    return this.ajax({
      url,
      type: "POST",
      data: JSON.stringify(paramJson),
      contentType: "application/json;charset=UTF-8",
      processData: false,
      dataType: "json"
    }, extendParam);
  },
  patchJson: function(url, paramJson, dataType, extendParam) {
    return this.ajax({
      url,
      type: "PATCH",
      data: JSON.stringify(paramJson),
      contentType: "application/json;charset=UTF-8",
      processData: false,
      dataType: dataType || "json"
    }, extendParam);
  },
  delete: function(url, extendParam) {
    return this.ajax({
      url: url,
      type: "DELETE",
      dataType: "json"
    }, extendParam);
  },
  ajax: function(param, extendParam) {
    let params = Utils.extend({ isRepeat: false, tipSelf: false, tipMsg: true}, param, extendParam||{});
    params.crossDomain = params.url.indexOf("http") === 0;
    let url = params.url;
    if (!params.crossDomain) {
      url = params.url = this.PREFIX + params.url;
    }
    if (params.type != "GET") {
      if (this.isRequesting(url)) {
        return $.Deferred();
      }
      if (params.isRepeat === false) {
        this.addRequest(url);
      }
    }

    let that = this;
    let defaultParam = {
      headers: { "author": that.HEADER },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        let errorMsg = {
          _status: -1,
          _msg: "通讯异常"
        };
        if (textStatus == 'timeout') {
          errorMsg._msg = '请求超时';
        }
        log(this);
        that.deleteRequest(this.url);
        if (this.then) {
          this.then(errorMsg);
        } else if (this.success) {
          this.success(errorMsg);
        } else if (this.done) {
          this.done(errorMsg);
        } else if (textStatus != 'abort') {
          HeyUI.$Message.error(errorMsg._msg);
        }
      },
      complete: function(XMLHttpRequest, textStatus) {
        that.deleteRequest(this.url);
        try {
          var result = $.parseJSON(XMLHttpRequest.responseText);
          if (result && result._status == 401) {
            window.top.location = "/login.html";
          }
          
          if (result && result._status != 200 && !this.tipSelf) {
            let errorMsg = this.type == "POST" ? "提交失败" : "获取失败";
            HeyUI.$Message.error(this.tipMsg === true ? result._msg : errorMsg);
          }
        } catch (e) {}
      }
    };

    if (params.crossDomain) {
      defaultParam.headers = {};
    }

    params = $.extend({}, defaultParam, params);
    return $.ajax(params);
  },
  getContextPath: function() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0, index + 1);
    return result;
  }
};

module.exports = ajax;
