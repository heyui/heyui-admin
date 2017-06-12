import qs from 'qs';
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
      method: "GET",
      cache: false,
      params: paramJson
    }, extendParam);
  },
  get: function(url, param, extendParam) {
    let params = {
      url,
      method: 'GET',
    };
    if (param) {
      params.params = param;
    }
    return this.ajax(params, extendParam);
  },
  post: function(url, param, extendParam) {
    var params = {
      url,
      method: 'POST'
    };
    if(param) params.data = qs.stringify(param);
    return this.ajax(params, extendParam);
  },
  postJson: function(url, paramJson, extendParam) {
    return this.ajax({
      url,
      method: "POST",
      data: paramJson
    }, extendParam);
  },
  patchJson: function(url, paramJson, dataType, extendParam) {
    return this.ajax({
      url,
      method: "PATCH",
      data: paramJson,
    }, extendParam);
  },
  delete: function(url, extendParam) {
    return this.ajax({
      url: url,
      method: "DELETE"
    }, extendParam);
  },
  ajax: function(param, extendParam) {
    let params = Utils.extend({ isRepeat: false }, param, extendParam||{});
    params.crossDomain = params.url.indexOf("http") === 0;
    let url = params.url;
    if (!params.crossDomain) {
      url = params.url = this.PREFIX + params.url;
    }
    if (params.method != "GET") {
      if (this.isRequesting(url)) {
        return new Promise((resolve, reject)=>{reject()});
      }
      if (params.isRepeat === false) {
        this.addRequest(url);
      }
    }
    let header = { "author": this.HEADER};
    let defaultParam = {
      headers: header
    };
    if (params.crossDomain) {
      defaultParam.headers = {};
    }
    let that = this;
    params = Utils.extend({}, defaultParam, params);
    return new Promise((resolve) => {
      return axios.request(params).then((response) => {
        that.deleteRequest(params.url);
        if(response.status != 200){
          HeyUI.$Message.error('通讯异常')
        }
        let data = response.data;
        if (data._status == 401) {
          window.top.location = "/login.html";
          return;
        }
        if (data._status == 500) {
          HeyUI.$Message.error('后台异常');
        } else if (data._status == 404) {
          HeyUI.$Message.error('请求不存在');
        } else if (data._status != 200) {
          HeyUI.$Message.error(data._msg);
        }
        resolve(data);
      }).catch((err) => {
        that.deleteRequest(params.url);
        HeyUI.$Message.error('通讯异常');
        resolve({
          _status: -1,
          _body: {}
        });
      });
    });
  },
  getContextPath: function() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0, index + 1);
    return result;
  }
};

axios.options({
  responseType: 'json'
});

module.exports = ajax;
