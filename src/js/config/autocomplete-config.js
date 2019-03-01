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
          id: r[1]
        });
      });
      callback(data);
    });
};

const baiduLoadData = function (filter, callback) {
  jsonp(`http://suggestion.baidu.com/su?wd=${filter}&p=3&cb=callback`, {
    jsonpCallbackFunction: 'callback'
  })
    .then(response => response.json())
    .then((d) => {
      callback(d.s);
    });
};

export default function () {
  return {
    globalSearch: {
      loadData: baiduLoadData,
      minWord: 0
    },
    simple: {
      loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    },
    baidu: {
      loadData: baiduLoadData,
      minWord: 0
    },
    company: {
      loadData(filter, next) {
        let list = [];
        for (let i = 0; i < 10; i++) {
          list.push({
            id: `${i}`,
            name: `${filter}${i}`
          });
        }
        next(list);
      },
      keyName: 'id',
      titleName: 'name'
    },
    account: {
      loadData(filter, next) {
        let list = [];
        let companyId = this.companyId;
        let companyName = this.companyName;
        for (let i = 0; i < 10; i++) {
          list.push({
            id: `${companyId}-account${i}`,
            name: `${companyName}-account${filter}${i}`
          });
        }
        next(list);
      },
      keyName: 'id',
      titleName: 'name'
    }
  };
};
