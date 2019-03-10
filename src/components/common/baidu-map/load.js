export default function() {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/getscript?v=2.0&ak=20qOZbvLhZnFinXiG1NfGPLC&t=${new Date().getTime()}`;
    script.onerror = reject;
    document.head.appendChild(script);
    script.onload = () => {
      resolve();
    }
  })
}