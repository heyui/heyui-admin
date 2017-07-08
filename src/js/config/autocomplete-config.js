export default function(){
  return {
    staff: {
      loadData(filter, callback){
        let searchParam = {};
        //页面可以通过:option="{roleCode:1, orgId: 1}"传递参数
        if (this.roleCode)  searchParam.roleCode = this.roleCode;
        if (this.orgId)  searchParam.companyId = this.orgId;
        R.Management.getAccountList(Utils.extend({keywords: filter, page: 1, size: 10}, searchParam))
        .then(resp=>{
          if(resp.status == 200){
            callback(resp.body);
          }
        });
      },
      keyName: 'id',
      titleName: 'displayName',
      minWord: 0
    },
    team: {
      loadData(filter, callback){
        let searchParam = {};
        if (this.exclude)  searchParam.excludeIds = [this.exclude];
        R.Management.searchTeams(Utils.extend({name: filter}, searchParam))
        .then(resp=>{
          if(resp.status == 200){
            callback(resp.body);
          }
        });
      },
      keyName: 'id',
      titleName: 'name',
      minWord: 0
    },
    sysRoles: {
      loadData(filter, callback){
        R.Management.queryRoles({roleName: filter, excludeRoleCodes: ['c', 'hr']})
        .then(resp=>{
          if(resp.status == 200){
            callback(resp.body);
          }
        });
      },
      keyName: 'id',
      titleName: 'roleName',
      minWord: 0
    },
    company: {
      loadData(filter, callback){
        let searchParam = {};
        if (this.status)  searchParam.type = this.status;
        R.Organization.searchOrgs(Utils.extend({keywords: filter, page: 1, size: 10}, searchParam))
        .then(resp=>{
          if(resp.status == 200){
            callback(resp.body);
          }
        });
      },
      keyName: 'id',
      titleName: 'name',
      minWord: 0
    }
  }
};
