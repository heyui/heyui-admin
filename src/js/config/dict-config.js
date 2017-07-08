const initStaticDict = function () {
  const dict = {};
  dict.YESNO = {
    1: '是',
    0: '否',
  };
  dict.HASORNOT = {
    1: '有',
    0: '无',
  };
  dict.CURRENCY = {
    1: '美元',
    0: '人民币',
  };
  dict.GENDER = {
    1: '男',
    2: '女',
  };
  dict.USER_SALARY = {
    1: '月薪',
    2: '年薪',
  };
  dict.USER_BONUS = {
    1: '每月',
    2: '季度',
    3: '每年',
  };
  dict.USER_GRADE = {
    1: '1星',
    2: '2星',
    3: '3星',
    4: '4星',
    5: '5星',
  };


  dict.PROJECT_STATUS = {
    0: "招聘中",
    1: "已暂停",
    2: "已完成",
    3: "已取消",
    4: "Offer确认"
  };

  dict.DEVELOP_STAGE = {
    DEVELOPMENT: '初次拓展',
    VISIT: '需求确认',
    BID: '招投标',
    CONTRACT: '签订合同',
  };

  dict.PHONE_TYPE = {
    1: '座机',
    2: '手机',
  };
  dict.RECORD_TYPE = {
    1: '电话',
    3: '邮箱',
  };

  dict.RESULT_TYPE = {
    1: '待处理',
    2: '待定',
    3: '通过',
    4: '拒绝',
    5: '完成',
  };

  dict.MARKET_INFO = {
    1: '内部推荐',
  };

  dict.MARKET_SOURCE = {
    1: '候选人',
    2: '51Job',
  };

  dict.MARKET_INFO_DEV_STATUS = {
    1: '未开发',
    2: '开发中',
    3: '开发失败',
    4: '开发成功',
  };

  dict.MARKET_INFO_VALID_STATUS = {
    1: '真实有效',
    2: '信息过时',
    3: '虚假消息',
  };

  dict.DEVELOPED_BY_TYPE = {
    1: '我负责的开发项目',
    2: '我参与的开发项目'
  };

  dict.EXPERT_TASK_TPYE = {
    1: 'RFI',
    2: 'KFC',
    3: 'WCB',
  };

  dict.USER_CONTACTER_TYPE = {
    2: '普通联系人',
    3: '临时联系人',
  };

  dict.DEVELOP_PRIORITY = {
    1: '高',
    2: '中',
    3: '低',
  };

  dict.BD_PRIORITY = {
    30: '高',
    20: '中',
    10: '低',
  };

  dict.VISIT_TYPE = {
    1: '面谈',
    2: '培训'
  };

  dict.PAYTIME_TYPE = {
    1: '入职后',
    2: '预付款',
    3: '收到发票后',
  };

  dict.DAY_TYPE = {
    1: '自然日',
    2: '工作日',
  };

  dict.PAY_UNIT = {
    1: 'K',
    2: '%',
  };

  dict.TASK_CODE_TYPE = {
    1: '操作',
    2: '判断',
    3: '题库',
  };

  dict.ACTION_TASK_NOTIFY_AT_CODE = {
    0: '不提醒',
    1: '事件发生时',
    300: '5 分钟前',
    900: '15 分钟前',
    1800: '30 分钟前',
    3600: '1 小时前',
    7200: '2 小时前',
    86400: '1 天前',
    172800: '2 天前',
    604800: '1 周前',
  };
  dict.USER_LANG_GRADE = {
    1: "精通",
    2: "熟练",
    3: "一般"
  };
  dict.NOTIFICATION_TYPE = {
    1: '职位',
    2: '系统任务',
    4: '自建任务',
    8: '收藏夹',
    16: 'BD',
    32: '其他',
    64: '通讯',
    128: '系统公告',
  };
  dict.INVOICE_FEE_TYPE = {
    1: '人才推荐费',
    2: '预付款',
    3: '其它服务费',
  };
  dict.SIGN_STATUS = {
    1: "已签约",
    2: "合作中"
  }
  dict.BD_STATUS = {
    "3": "待BD",
    "4": "BD中",
    "1": "BD成功",
    "5": "BD失败",
    "2": "合作中"
  }
  dict.BRIEF_BD_STATUS = {
    4: "BD中",
    1: "BD成功",
    5: "BD失败",
  }

  dict.APPLY_HANDLE_STATUS = {
    1: '待处理',
    2: '合作中',
    3: '不合作'
  };

  dict.COOPERATE_INTENTION = {
    1: '无合作意向',
    2: '弱',
    3: '一般',
    4: '强'
  };


  dict.COMMISSION_REQUIREMENT = {
    1: '2万以下',
    2: '2-5万',
    3: '5-10万',
    4: '10万以上'
  };

  dict.PROJECT_APPLY_STATUS = {
    1: '申请中',
    2: '申请失败',
    3: '申请成功',
    4: '接单中',
  };


  dict.SYSTEM_DEVICES = {
    1: "Web",
    2: "Android",
    3: "iOS",
  };

  dict.SYSTEM_PLATFORMS = {
    1: "猎头端",
    2: "HR端",
    3: "CW端",
  };

  dict.ATTACHMENT_TYPE = {
    1: "合同",
    2: "公司简介",
    3: "营业执照正本",
    4: "人员名单"
  };



  dict.SUBSCRIBE_MATCH_TYPE = {
    4: "匹配",
    3: "近似",
    2: "不建议",
    1: "不匹配"
  };

  dict.SALARY_GAPS = {
    1: '12万以下',
    2: '12-18万',
    3: '18-30万',
    4: '30-50万',
    5: '50-80万',
    6: '80-100万',
    7: '100万以上'
  }

  dict.RESUME_SORT_OPTIONS = {
    'default': '默认排序',
    'updatedAt:desc': '按更新时间倒序',
    'updatedAt:asc': '按更新时间正序'
  };

  dict.ANNUAL_SALARY_TYPE = {
    1: '税前',
    2: '税后'
  };

  dict.FINANCE_TYPE = {
    '1': '收款',
    '2': '付款'
  };

  dict.FINANCE_STATUS = {
    'TO_BE_INVOICED': '待开票',
    'TO_GET_PAYMENT': '待收款',
    'TO_BE_REVIEWED': '待审核',
    'TO_BE_PAID': '待付款',
    'PAID': '付款成功'
  };

  dict.ACCOUNT_STATUS = {
    0: '使用中',
    1: '已停用'
  };

  dict.USER_ROYALTY = { 1: '月', 2: '年' };
  dict.REMARK_TYPE = { 1: '电话', 2: '面谈', 3: '其他' };
  dict.QUES_TYPE = { 1: '单行文本', 2: '单选', 3: '多选', 4: '标题', 5: '多行文本' };
  dict.TASK_TYPE = { 1: '职位', 2: 'BD', 3: '通用' };
  dict.QUES_FORM_TYPE = { 1: '职位', 2: 'BD', 3: '人才', 4: '公司' };


  dict.presenceStatus = {
    0: '离线',
    1: '就绪',
    2: '忙碌',
    3: '离席',
    4: '通话中',
    5: '通话中'
  };
  dict.role = {
    1: '普通坐席',
    2: '坐席管理员'
  };
  dict.phoneStatus = {
    0: '空闲',
    1: '占线',
    2: '振铃',
    3: '媒体音',
    4: '通话中'
  };
  dict.phoneType = {
    1: '模拟话机',
    2: 'IP话机',
    3: '软电话'
  }
  return dict;
}

const initDict = function () {
  const staticDict = initStaticDict();

  Object.keys(staticDict).forEach((key) => {
    HeyUI.addDict(key, staticDict[key])
  });
}

export default initDict;
