/** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数
 * @param {data} 页面数据
 * @param {state} 组件状态
 * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)
 * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)
 */
 function main(data, state, success, fail) {
  // 表单数据
  var form = allFormValues;
  // payInfo
  var obj = form.payInfo
  // invoiceInfo
  var obj2 = form.invoiceInfo
  // receiptInfo
  var obj3 = form.receiptInfo
  // "custInfo"
  var obj4 = form.custInfo
  // hdc_busi_info
  var obj5 = form.hdc_busi_info
  // order_info
  var obj6 = form.order_info
  // approveInfo
  var obj7 = form.approveInfo
  //zhuanxinaxinxi
  var obj8 = form.zhuanxinaxinxi
  // approveInfo
  var obj9 = form.approveInfo
  //数据源
  var data = data;
  // account_arr1
  var arr1 = data.account_arr1
  // account_arr2
  var arr2 = data.account_arr2
  // resultObject
  var data_obj1 = data.resultObject
  // account_info
  var data_obj2 = data.account_info
  // assemble_cust_info
  var data_obj3 = data.assemble_cust_info
  //  isCreateGrpAccount
  var data_obj4 = data.isCreateGrpAccount
  // account_info
  var data_obj5 = data.account_info
  // message_head
  var data_obj6 = data.message_head
  //look_price
  var data_obj7 = data.look_price
  //prolist
  var data_obj8 = data.prolist
  //fild_ids
  var data_obj9 = data.fild_ids
  // 静态数据
  var paymentMethodDesc = [{ key: '月', code: 1 }, { key: '季', code: 2 }, { key: '半年', code: 3 }, { key: '年', code: 4 }];
  var paymentMethod = [{ key: '转账', code: '1' }, { key: '线上支付', code: '2' }, { key: 'pos', code: '3' }, { key: '现金', code: '4' }, { key: '自定义来源', code: '5' }]
  var paymentMethodType = [{ key: '预付费', code: '1' }, { key: '后付费', code: '2' }];
  var invoice_type = [{ key: '增值税电子普票', code: '2' }, { key: '增值税专用发票', code: '1' }];

  var disputeSettlement_js = [{ key: '提交仲裁委员会', code: '1' }, { key: '提交人民法院诉讼', code: '2' }]
  var billingPeriod = [{ key: '年', code: '1' }, { key: '协议期', code: '2' }, { key: '月', code: '0' }]
  var bool_Arr = [{ key: '是', code: '1' }, { key: '否', code: '0' }]
  var dz_effDate = [{ key: '当月生效', code: '0' }, { key: '次月生效', code: '1' }]

  // [{key:'',code:''},{key:'',code:''},{key:'',code:''},{key:'',code:''}]
  // [{key:'',code:''},{key:'',code:''},{key:'',code:''},{key:'',code:''}]
  // [{key:'',code:''},{key:'',code:''},{key:'',code:''},{key:'',code:''}]
  const filter_name = (arr, code) => {
      const obj_key = arr.filter(item => item.code == code)[0] || '';
      return obj_key ? obj_key.key : "";
  }
  const filter_name2 = (arr, code) => {
      const obj_key = arr.filter(item => item.paramValue == code)[0] || '';
      return obj_key ? obj_key.paramName : "";
  }
  const filter_name3 = (arr, code) => {
      const obj_key = arr.filter(item => item.value == code)[0] || '';
      return obj_key ? obj_key.name : "";
  }
  // 64位流水号
  var str_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function generateMixed(n) {
      var res = "";
      for (var i = 0; i < n; i++) {
          var id = Math.ceil(Math.random() * 35);
          res += str_arr[id];
      }
      return res;
  }

  // 获取浏览器本地id
  function get_ids() {
      var num = 8;
      var arr_ids = [];
      if (data_obj9.id1) {
          arr_ids.push(data_obj9.id1)
      }
      for (let index = 2; index <= num; index++) {
          let id = localStorage.getItem(`id${index}`);
          arr_ids.push(Number(id));
      }
      return arr_ids;
  }
  var result = {
      "partyAAddr": data_obj3.addr || '',
      "partyAContact": data_obj3.aeName,
      "partyAName": data_obj3.cust_name,
      "partyAPhone": data_obj3.aeTel,
      "fromFlag": "APP",
      "isOp": "1",
      "contractAccountBillInfo": {
          "isNewAccount": data_obj4.isCreateGrpAccount ? "Y" : "N",
          "accountId": data_obj5.account_id,
          "accountName": data_obj5.account_name,
          "accountDescription": data_obj5.account_description,
          "accountType": data_obj5.account_type,
          "accountPaymentType": data_obj5.account_payment_type,
          "accountStatus": data_obj5.account_status,
      },
      "contractApproval": {
          "approvalFlag": obj9.approvalFlag,
          "approvalReason": obj9.approvalReason,
          "attachmentId": data_obj9.id1,
      },
      "contractPaymentInfo": {
          "custPhone": data_obj1.custphone,
          "custaddress": data_obj1.custaddress,
          "custBankAcccout": data_obj1.custbankacccout,
          "custBankName": data_obj1.custbankname,

          "accountId": data_obj2.account_id,

          "receiptBankNameType": obj3.receiptOpenAccount,
          "receiptBankName": filter_name2(arr1, obj3.receiptOpenAccount),
          "receiptBankAcccoutType": obj3.receiptOpenAccountName,
          "receiptBankAcccoutName": filter_name2(arr2, obj3.receiptOpenAccountName),
          "receiptBankAcccout": obj3.receiptOpenBank,



          "custfullname": obj2.custfullname,
          "taxpayerIdentityNumber": obj2.custaxpayernumber,
          "invoiceType": obj2.invoice_type,
          "invoiceTypeDesc": filter_name(invoice_type, obj2.invoice_type),

          "paymentCycle": obj.paymentCycle,
          "paymentCycleDesc": filter_name(paymentMethodDesc, obj.paymentCycle),
          "paymentMethod": obj.paymentMethod,
          "paymentMethodDesc": filter_name(paymentMethod, obj.paymentMethod),
          "paymentType": obj.paymentMethodType,
          "paymentTypeDesc": filter_name(paymentMethodType, obj.paymentMethodType),
          "accountBalance": obj.accountBalance,
          "rechargeAmount": obj.rechargeAmount,
      },
      "contractGroupCustInfo": {
          "addr": data_obj3.addr,
          "aeEmail": data_obj3.aeEmail,
          "aeId": data_obj3.aeId,
          "aeName": data_obj3.aeName,
          "aeTel": data_obj3.aeTel,
          "attention": obj5.groupContactName || '',
          "certno": data_obj3.certno,
          "certtype": data_obj3.certtype,
          "crmCustId": data_obj3.crmCustId,
          "custCode": data_obj3.custCode,
          "custName": data_obj3.custName,
          "customtrade": data_obj3.customtrade,
          "tel": data_obj3.tel,
          "iscmiot": "0",
          "corpvaluelevel": "D"
      },
      "contractInfoItems": [
          {
              "prodId": "100009",
              "offerUuid": generateMixed(64),
              "entityAttrs": [
                  { "attrNbr": "TariffInformation", "attrValue": "" },
                  {
                      "attrNbr": "billingPeriod",
                      "attrValueValue": obj5.billingPeriod,
                      "attrValueName": filter_name(billingPeriod, obj5.billingPeriod)
                  },
                  { "attrNbr": "guaranAmount_js", "attrValue": obj5.guaranAmount_js },
                  { "attrNbr": "contractAmount_js", "attrValue": obj5.contractAmount_js },
                  { "attrNbr": "ywxxyxa", "attrValue": "" },
                  {
                      "attrNbr": "busiType_js",
                      "attrValueValue": obj5.busiType_js,
                      "attrValueName": obj5.busiType_js
                  },
                  { "attrNbr": "termBusiness_js", "attrValue": obj5.termBusiness_js },
                  { "attrNbr": "autoDelay_js", "attrValue": obj5.autoDelay_js },
                  { "attrNbr": "jsContactZx", "attrValue": obj5.jsContactZx },
                  { "attrNbr": "lxrphone", "attrValue": obj5.lxrphone },
                  { "attrNbr": "contactAEmail_js", "attrValue": obj5.contactAEmail_js },
                  { "attrNbr": "managerName", "attrValue": obj5.managerName },
                  { "attrNbr": "jsKhjllxdh", "attrValue": obj5.jsKhjllxdh },
                  { "attrNbr": "groupContactName", "attrValue": obj5.groupContactName || '' },
                  { "attrNbr": "groupContactTel", "attrValue": obj5.groupContactTel || '' },
                  {
                      "attrNbr": "disputeSettlement_js",
                      "attrValueValue": obj5.disputeSettlement_js || "",
                      "attrValueName": filter_name(disputeSettlement_js, obj5.disputeSettlement_js)
                  },
                  { "attrNbr": "band_ramark", "attrValue": obj5.band_ramark || "" },
                  {
                      "attrNbr": "isElectronicSign",
                      "attrValueValue": "1",
                      "attrValueName": filter_name(bool_Arr, "1")
                  },
                  { "attrNbr": "ddxx", "attrValue": "" },
                  { "attrNbr": "ddbzxx", "attrValue": obj6.ddbzxx },
                  { "attrNbr": "sfdxtx", "attrValueValue": obj6.sfdxtx, "attrValueName": filter_name(bool_Arr, obj6.sfdxtx) },
                  { "attrNbr": "ddxxsfjj", "attrValueValue": obj6.ddxxsfjj, "attrValueName": filter_name(bool_Arr, obj6.ddxxsfjj) },
                  {
                      "attrNbr": "isPrintBusiAuthorize",
                      "attrValueName": filter_name(bool_Arr, obj6.isPrintBusiAuthorize),
                      "attrValueValue": obj6.isPrintBusiAuthorize
                  }
              ],
              "prodInsts": [
                  {
                      "prodId": "100009",
                      "entityAttrs": [
                          {
                              "attrNbr": "look_prodType",
                              "attrValueValue": obj8.list,
                              "attrValueName": filter_name3(data_obj8, obj8.list)
                          },
                          {
                              "attrNbr": "look_prodGrade",
                              "attrValueValue": obj8.look_prodGrade,
                              "attrValueName": filter_name3(data_obj8, obj8.look_prodGrade)
                          },
                          { "attrNbr": "look_price", "attrValue": obj8.look_price },
                          { "attrNbr": "look_priceUnit", "attrValue": obj8.look_priceUnit },
                          {
                              "attrNbr": "dz_effDate",
                              "attrValueValue": obj8.dz_effDate,
                              "attrValueName": filter_name(dz_effDate, obj8.dz_effDate)
                          },
                          { "attrNbr": "smsTitle", "attrValue": data_obj6.smsHeader },
                          { "attrNbr": "smsPort", "attrValue": data_obj6.spCode }
                      ]
                  }
              ]
          }
      ],
      "otherAttachListId":get_ids()
  };

  console.log("日志", result);
  success(JSON.stringify(result));

};