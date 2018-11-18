const html = '<div>Directory<ul><li>Apple</li><li>Orange</li></ul>Directory</div>';

function parse(html){
  let code = 'return ['
    + html.replace(/>([^<]+?)</g, '>"$1",<')
    .replace(/<(\w+)>/g, '{tag: "$1", children:[')
  .replace(/<\/\w+>/g, ']},')
  + ']'
  return (new Function(code))().pop();
}

parse(html);