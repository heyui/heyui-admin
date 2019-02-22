import axios from 'axios';
import qs from 'qs';
import Utils from './utils'

let ajax = {
  PREFIX: "/api",
  HEADER: Utils.getAuthor() || "heyui",
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
    if (param) {;
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
    let params = Utils.extend({ repeatable: false }, param, extendParam||{});
    params.crossDomain = params.url.indexOf("http") === 0;
    let url = params.url;
    if (!params.crossDomain) {
      url = params.url = this.PREFIX + params.url;
    }
    if (params.method != "GET") {
      if (this.isRequesting(url)) {
        return new Promise((resolve, reject)=>{reject()});
      }
      if (params.repeatable === false) {
        this.addRequest(url);
      }
    }
    let header = {
      "author": this.HEADER,
      Authorization: Utils.getLocal("token"),
    };
    let defaultParam = {
      headers: header,
      responseType: 'json',
      validateStatus: function (status) {
        return true;
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { allowDots: true })
      }
    };
    if (params.crossDomain) {
      defaultParam.headers = {};
    }
    let that = this;
    params = Utils.extend({}, defaultParam, params);
    return new Promise((resolve) => {
      return axios.request(params).then((response) => {
        that.deleteRequest(params.url);
        let data = response.data;
        let status = response.status;
        if( status == 200){
          status = data.status;
        }
        if(status != 200){
          if (status == 401) {
            window.top.location = "/login";
            return;
          }
          if (status == 500) {
            HeyUI.$Message.error('后台异常');
          } else if (status == 404) {
            HeyUI.$Message.error('请求不存在');
          } else if (status != 200) {
            HeyUI.$Message.error(data._msg || '请求异常');
          }
        }
        data.ok = data.status == 200;
        resolve(data);
      }).catch((err) => {
        that.deleteRequest(params.url);
        resolve({
          ok: false
        });
      })
    });
  }
};
export default ajax;
