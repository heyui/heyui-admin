export default new Model({
  startTime: {
    type: Model.DATE,
    format: "k",
  },//通话开始时间最小值
  endTime: {
    type: Model.DATE,
    format: "k",
  },//通话开始时间最大值
  agentNo: '',//坐席号
  extensionNo: '',//分机号
  outNumber: '',//分机直线号码
  partnerNumber: '',//对方号码
})