import Vue from 'vue';
import manba from 'manba';

Vue.filter('format', (value, format) => {
  if (value) {
    return Manba(value).format(format || 'l');
  }
  return '';
});

Vue.filter('distance', (date) => {
  const hours = manba().distance(date, manba.HOUR);
  if (hours == 0) {
    const mins = manba().distance(date, manba.MINUTE);
    return `${mins}分钟`;
  } else if (hours < 24) {
    return `${hours}小时`;
  } else {
    const days = manba().distance(date, manba.DAY);
    return `${days}天`;
  }
});
