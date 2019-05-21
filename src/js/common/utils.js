import utils from 'hey-utils';

const rclass = /[\t\r\n\f]/g;

export default utils.extend({}, utils, {
  getClass(elem) {
    return (elem.getAttribute && elem.getAttribute('class')) || '';
  },
  hasClass(elem, selector) {
    let className;
    className = ` ${selector} `;
    if (elem.nodeType === 1 && (` ${this.getClass(elem)} `)
      .replace(rclass, ' ')
      .indexOf(className) > -1) {
      return true;
    }

    return false;
  }
});
