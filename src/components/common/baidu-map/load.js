export default function () {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//api.map.baidu.com/api?v=2.0&ak=20qOZbvLhZnFinXiG1NfGPLC&s=1&callback=baiduMapInitialize`;
    script.onerror = reject;
    window.baiduMapInitialize = function () {
      resolve();
    };
    document.head.appendChild(script);
  });
}
