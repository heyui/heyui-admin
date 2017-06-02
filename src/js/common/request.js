import Ajax from './ajax';

const Request = {
  Home: {
  },
  Login: {
    login(param){
      return Ajax.post("/login", param);
    },
    logout(param){
      return Ajax.post("/logout", param);
    }
  }
};

module.exports = Request;
