export default new Model({
  extensionNo: '',//分机号
  outNumber: '',//专线号码
  phoneType: 0,//分级类型
  phoneStatus: 0,//话机状态，0：空闲，1：DOWN，2：振铃，3：EARLY，4：通话中
  callerNumber: '',//主叫号码
  calleeNumber: '',//被叫号码
  callStartTime: {
    type: Model.DATE,
    format: "k",
  }, //通话开始时间
})