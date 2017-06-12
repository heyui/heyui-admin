export default new Model({
  id: 0,
  agentNo: '',//坐席号
  agentGroup: '',//坐席组号
  extensionNo: '',//分机号
  outNumber: '',//直线号码
  role: 1,//角色，1：普通坐席，2：坐席管理员
  presenceStatus: 1//坐席状态，0：离线，1：就绪，2：忙碌，3：离席，4和5：通话中
})