const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) return false;
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true;
  else return !keysArr1.some(key => obj1[key] != obj2[key]);
};

export const isExsit = (obj, list) => {
  for (let route of list) {
    if (routeEqual(route, obj)) {
      return true;
    }
  }
  return false;
};

export const showTitle = (item, vm) => {
  let { title } = item.meta;
  if (!title) return;
  return title;
};

export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {};
  const params2 = route2.params || {};
  const query1 = route1.query || {};
  const query2 = route2.query || {};
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2);
};
