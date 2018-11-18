const html = '<div>Directory<ul><li>Apple</li><li>Orange</li></ul>Directory</div>';
const REG = new RegExp(/([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g);

function parse(html) {
  let stacks = [];
  while (matchArr = REG.exec(html)) {
    stacks.push({
      textBefore: matchArr[1],
      elem: matchArr[2],
      elemName: matchArr[3],
      textAfter: matchArr[5],
    });
  }
  let edom = [];
  let doms = [];
  let s = null;
  let index = 0;
  let domsresult = null;
  let domparent = null;
  while(stacks.length>0){
    s = stacks.shift();
    let e = edom.length && edom[edom.length-1];
    if (e && s.elemName == '/' + e.elemName) {
      let dom = {tag: e.elemName, children: []};
      if (e.tag.textAfter) {
        dom.children.push(e.tag.textAfter);
      }
      if(domsresult&&domsresult.children) {
        dom.children.push(domsresult);
      }
      // if (s.textAfter) {
      //   domparent.children.push(s.textAfter);
      // }
      domparent = domsresult;
      domsresult = dom;
      // doms.push({type: 'tag', tag: e.elemName, index: e.index});
      index--;
      edom.pop();
    } else{
      edom.push({tag: s, index: index, elemName: s.elemName});
      index++;
    }
  }

  console.log(domsresult);
}

parse(html)