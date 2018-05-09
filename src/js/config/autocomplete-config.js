import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
  .then(response => response.json())
  .then((d) => {
    const result = d.result;
    const data = [];
    result.forEach((r) => {
      data.push({
        name: r[0],
        id: r[1],
      });
    });
    callback(data);
  });
}

const baiduLoadData = function (filter, callback) {
  jsonp(`http://suggestion.baidu.com/su?wd=${filter}&p=3&cb=callback`,{
    jsonpCallbackFunction: 'callback',
  })
  .then(response => response.json())
  .then((d) => {
    callback(d.s);
  });
}

export default function(){
  return {
    simple: {
      loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    },
    baidu: {
      loadData: baiduLoadData,
      // (keyword, callback) {
      //   let list = [];
      //   for(let i=0; i< 8; i++) {
      //     list.push(`${keyword}${i+1}`);
      //   }
      //   return callback(list);
      // },
      minWord: 0
    }
  }
};
