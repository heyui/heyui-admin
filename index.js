//评测题目: // Sample data.
const html = '<div>Directory<ul><li>Apple</li><li>Orange</li></ul></div>';
const obj = {
    "tag": "div",
    "children": [
        "Directory",
        {
            "tag": "ul",
            "children": [
                {
                    "tag": "li",
                    "children": [
                        "Apple"
                    ]
                },
                {
                    "tag": "li",
                    "children": [
                        "Orange"
                    ]
                }
            ]
        }
    ]
};


// Convert object to html.
function stringify(obj) {
  let html = "";
  if(Object.prototype.toString.call(obj) === '[object Object]') {
    html = `<${obj.tag}>`
    if (obj.children) {
      for (const child of obj.children) {
        html += stringify(child);
      }
    }
    html += `</${obj.tag}>`
  } else if (typeof obj == 'string') {
    html = obj;
  }
  return html;
}


const REG = new RegExp(/([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g);

// Convert html to object.
function parse(html) {
  let tags = [];
  let m = REG.exec(html);
  while( m != null) {
    tags.push({tag: m[0], index: m.index});
    m = REG.exec(html)
  }
  var stack = []; 
  let htmlbak = html;
  while(tags.length >= 2) {
    let mtag = tags[0].tag;
    let tag = mtag.substr(1,mtag.length-2);
    let etag = tags[tags.length-1];
    let htmlIndexOf = htmlbak.indexOf("<");
    if (htmlIndexOf != 0) {
      stack.push({
        tag: htmlbak.substr(0, htmlIndexOf), type: 'string'
      })
      htmlbak = htmlbak.substr(htmlIndexOf);
    }
    start = mtag.index, end = etag.index;
    if(etag.tag == `</${tag}>`) {
      stack.push({
        tag: tag, start: mtag.index, end: etag.index, type: 'tag'
      })
      htmlbak = htmlbak.substr(mtag.index, etag.index);
      tags.pop();
      tags.unshift();
    }
  }
  console.log(tags);
  return parseHtml(tags, html, 0, 1);
}


function parseHtml(tags, html, index, startIndex) {
  let htmlObj = {};
  let mtag = tags[index].tag;
  console.log('start', mtag);
  let etag = tags[tags.length-index-1];
  console.log('end', etag)
  let tag = mtag.substr(1,mtag.length-2);
  if(etag.tag == `</${tag}>`) {
    htmlObj.tag = tag;
    htmlObj.children = [];
  }
  if (tags.length>index*2+2) {
    while() {
      htmlObj.children.push(parseHtml(tags, html, index + 1, mtag.index, etag.index));
    }
  }
  return htmlObj;
}




console.log(parse('<div>Directory<ul><li>Apple</li><li>Orange</li></ul></div>'))



























