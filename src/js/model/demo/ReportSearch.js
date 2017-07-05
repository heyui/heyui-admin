export default new Model({
  startDate: {
    type: Model.DATE,
    format: "k",
  },//开始日期,格式："20170601"
  endDate: {
    type: Model.DATE,
    format: "k",
  },//结束日期
})