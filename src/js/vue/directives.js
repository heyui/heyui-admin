
const uriReg = /^((http[s]{0,1}|ftp):\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
const isUrl = function (value) {
  return (value && value.trim() && uriReg.test(value.trim()));
};

export default (app) => {
  app.directive('url', {
    bind() {
      if (arguments[1] && arguments[1].value) {
        let el = arguments[0];
        let text = arguments[1].value;
        let protocol;
        let pre = '';
        let aft = '';
        if (isUrl(text)) {
          protocol = (text.indexOf('http') != -1 ? '' : 'http://');
          pre = `<a href="${protocol}${text.trim()}" target="_blank">`;
          aft = `</a>`;
        }
        el.innerHTML = pre + text + aft;
      }
    }
  });
}