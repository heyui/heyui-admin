export default new Model({
  callId: '',
  agentNo: '',//坐席号
  extensionNo: '', //分机号
  outNumber: '', //直线号码
  callerNumber: '', //主叫号码
  calleeNumber: '', //被叫号码
  startTime: {
    type: Model.DATE,
    format: "k",
  }, //通话开始时间
  endTime: {
    type: Model.DATE,
    format: "k",
  }, //通话结束时间
  duration: 0, //总时长
  billsec: 0, //计费时长
  recordUrl: '', //录音
})