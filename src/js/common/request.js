import Ajax from './ajax';

const Request = {
  User: {
    info(){
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    get(){
      return Ajax.get(`/dict`);
    },
  },
  Home: {
  },
  Login: {
    login(param){
      return Ajax.postJson("/login", param);
    },
    logout(param){
      return Ajax.post("/logout", param);
    }
  }
};

module.exports = Request;
