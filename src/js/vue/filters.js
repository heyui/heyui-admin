Vue.filter('format', (value, format) => {
  if (value) {
    return Manba(value).format(format || 'l');
  }
  return '';
});
