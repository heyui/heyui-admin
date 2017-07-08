import Ajax from './ajax';

const Request = {
  User: {
    info(){
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    get(){
      return Ajax.get(`/dicts`);
    },
  },
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
  Demo: {
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
  },
  Management: {
    listTeamWithAccount(id) {
      return Ajax.postJson(`/account/team/listTeamWithAccount`, {leaderId: id})
    },
    saveRoleConfig(param) {
      return Ajax.postJson(`/account/roleconfig`, param, {
        loading: true,
        tipMpsg: true
      })
    },
    queryRoleConfig(roleId) {
      return Ajax.get(`/account/roleconfig/${roleId}`, null, {
        loading: true,
        tipMpsg: true
      })
    },
    querySettingRoles() {
      return Ajax.get('/account/role/constraint', null, {
        loading: true,
        tipMpsg: true
      })
    },
    queryRoles(params) {
      return Ajax.postJson('/account/role/query', params, {
        loading: true,
        tipMsg: true
      });
    },
    getAccountList(param) {
      return Ajax.postJson('/account/query', param, {
        loading: true,
        tipMsg: true
      });
    },
    getAccount(id) {
      return Ajax.get(`/account/get?id=${id}`, null, {
        loading: true,
        tipMsg: true
      });
    },
    getStaffRoleList() {
      return Ajax.get('/account/role/list');
    },
    getTeamList(teamId) {
      const param = { parentId: teamId };
      return Ajax.postJson('/account/team/list', param);
    },
    staffTransfer(staffs, targetTeamId) {
      const param = { staffs, targetTeamId };
      return Ajax.postJson('/account/teamaccount', param);
    },
    saveTeam(team) {
      return Ajax.postJson('/account/team', team);
    },
    searchTeams(param) {
      return Ajax.postJson('/account/team/query', param)
    },
    deleteTeam(param) {
      return Ajax.postJson('/account/team/delete', param)
    }
  }
};

module.exports = Request;
