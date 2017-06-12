import Ajax from './ajax';

const Request = {
  Home: {
  },
  Login: {
    login(param){
      return Ajax.postJson("/agent/login", param);
    },
    logout(param){
      return Ajax.post("/logout", param);
    }
  },
  List: {
    agentList(){
      return Ajax.get('/agent/list');
    },
    extensionList(){
      return Ajax.get('/extension/list');
    },
    recordList(param){
      return Ajax.postJson('/call/record', param);
    },
    reportList(param){
      return Ajax.get('/call/reportQuery', param);
    },
    config(param){
      return Ajax.get('/cti/config', param);
    }
  }
};

module.exports = Request;
