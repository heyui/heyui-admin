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

export default function(){
  return {
    simple: {
      loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    }
  }
};
