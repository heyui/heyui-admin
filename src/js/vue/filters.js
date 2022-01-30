import manba from 'manba';

export default (app) => {
  app.config.globalProperties.format = (value, format) => {
    if (value) {
      return manba(value).format(format || 'l');
    }
    return '';
  };
  
  app.config.globalProperties.distance = (date) => {
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
  };
}

