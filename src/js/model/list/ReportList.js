export default new Model({
  date: {
    type: Model.DATE,
    format: "YYYY-MM-DD 星期w",
  },//日期
  callCount: 0, //电话数
  callOutCount: 0,//呼出数
  callOutRate: 0,//呼出比例
  callInCount: 0,//呼入数
  callInRate: 0,//呼入比例
  callEffectiveCount: 0,//接通数
  callEffectiveRate: 0, //接通比例
  avgBillSec: 0,//平均电话时间
  avgOutBillSec: 0, //平均呼出电话时间
  avgInBillSec: 0, //平均呼入电话时间
  avgEffectiveBillSec: 0, //平均接通通话时间
  maxBillSec: 0, //最长通话时间
  totalBillSec: 0, //通话总时间
})