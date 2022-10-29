APPLICATION|DEBUG|||2022-10-25 10:33:16:680|||BaseJdbcLogger.java:137|debug||95||||<==      Total: 0
APPLICATION|DEBUG|||2022-10-25 10:33:16:681|||OrchestrationEngine.java:182|doRun||95||||Start executing orchestration service request: startTime=Tue Oct 25 10:33:16 CST 2022, request=OrchestrationEngineRequest(runMode=1, debugInnerService=null, serviceVersionId=899579643025317888, appId=836459940279783424, serviceCode=circle_table, version=1.0, serviceDefinition=null, parameters={created_time_begin=2022-10-01, created_time_end=2022-10-30}, attributes=null, dataSourceProvider=null, httpRequest=org.apache.catalina.connector.RequestFacade@3c136af5)
APPLICATION|DEBUG|||2022-10-25 10:33:16:681|||AbstractStepRunner.java:50|run||95||||Execute step start: name=入参, code=input, type=input
APPLICATION|DEBUG|||2022-10-25 10:33:16:681|||AbstractStepRunner.java:82|run||95||||Execute step end: name=入参, code=input, type=input, next=callInternalService8463
APPLICATION|DEBUG|||2022-10-25 10:33:16:681|||AbstractStepRunner.java:50|run||95||||Execute step start: name=内部服务, code=callInternalService8463, type=callInternalService
APPLICATION|WARN|||2022-10-25 10:33:16:681|||ParamUtil.java:45|getParamValue||95||||No param found: spec=$.input.city_name
APPLICATION|DEBUG|||2022-10-25 10:33:16:681|||BaseJdbcLogger.java:137|debug||95||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:16:682|||BaseJdbcLogger.java:137|debug||95||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:16:688|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:689|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:689|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:689|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:689|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:689|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:690|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:16:696|||BaseJdbcLogger.java:137|debug||95||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:16:697|||BaseJdbcLogger.java:137|debug||95||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:16:697|||BaseJdbcLogger.java:137|debug||95||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:16:704|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:704|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:704|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:705|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:706|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:706|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:16:706|||AutoMappingUnknownColumnBehavior.java:47|doAction||95||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:16:711|||BaseJdbcLogger.java:137|debug||95||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:16:733|||AbstractStepRunner.java:82|run||95||||Execute step end: name=内部服务, code=callInternalService8463, type=callInternalService, next=script3148
APPLICATION|DEBUG|||2022-10-25 10:33:16:733|||AbstractStepRunner.java:50|run||95||||Execute step start: name=筛选数据, code=script3148, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:16:733|||ScriptStepRunner.java:47|doRun||95||||Executing groovy script start: step=筛选数据, parameters=[[{xcsg=0.016, zb=0, wc=0, sjhsavg=null, cs=null, upf1=0.003, city_name=南京, total=2, a3=0, a4=0, qd=0, sjhs=1, yw=0, upfcs=0}]]
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
[苏州市, 淮安市, 宿迁市, 南京市, 连云港市, 徐州市, 常州市, 镇江市, 无锡市, 南通市, 泰州市, 盐城市, 扬州市]
[[qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0], [qd:0, zb:0, wc:0, yw:0]]
APPLICATION|DEBUG|||2022-10-25 10:33:16:734|||ScriptStepRunner.java:54|doRun||95||||Executing class GroovyExample {
  def invoke(def arr_result) {
                ArrayList<Map<String, String>> arr = new ArrayList();
        List<Map<String, String>> result = new ArrayList();
        result = arr_result;
        ArrayList arr_city_info = new ArrayList();
        List list = (List) Arrays.asList("苏州市", "淮安市", "宿迁市", "南京市", "连云港市", "徐州市", "常州市", "镇江市", "无锡市", "南通市", "泰州市", "盐城市", "扬州市");
        ArrayList result_arr = new ArrayList();
        arr_city_info.addAll((Collection) list);
        for(int i=0;i<arr_city_info.size();i++) {
          if(result.size()>0){
            for (int j = 0; j < result.size(); j++) {
                System.out.println("日志"+result.get(j).get("city_name"));
         if((result.get(j).get("city_name")+"市").equals(arr_city_info.get(i))) {
                HashMap map2 = new HashMap();
                map2.put("qd",result.get(j).get("qd"));
                map2.put("zb",result.get(j).get("zb"));
                map2.put("yw",result.get(j).get("yw"));
                map2.put("wc",result.get(j).get("wc")); 
                arr.add(map2);
                break;
         }else {
                HashMap map2 = new HashMap();
                map2.put("qd","0");
                map2.put("zb","0");
                map2.put("yw","0");
                map2.put("wc","0");
                arr.add(map2);
                break;
         }
            }
          }else{
                HashMap map2 = new HashMap();
                map2.put("qd","0");
                map2.put("zb","0");
                map2.put("yw","0");
                map2.put("wc","0");
                arr.add(map2);
        break;
          }

        }
        System.out.println(arr_city_info);
        System.out.println(arr);
return [arr:arr]
  }
} script end: step=筛选数据, result={arr=[{qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}]}
APPLICATION|DEBUG|||2022-10-25 10:33:16:735|||AbstractStepRunner.java:82|run||95||||Execute step end: name=筛选数据, code=script3148, type=script, next=script8212
APPLICATION|DEBUG|||2022-10-25 10:33:16:735|||AbstractStepRunner.java:50|run||95||||Execute step start: name=代码块_求和, code=script8212, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:16:735|||ScriptStepRunner.java:47|doRun||95||||Executing groovy script start: step=代码块_求和, parameters=[[{qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}, {qd=0, zb=0, wc=0, yw=0}]]
APPLICATION|DEBUG|||2022-10-25 10:33:16:735|||ScriptStepRunner.java:54|doRun||95||||Executing def invoke(def list) {
ArrayList<Map<String, String>> arr = new ArrayList();
  ArrayList<Map<String, String>> result = new ArrayList();
HashMap map1 = new HashMap();
  HashMap map2 = new HashMap();
  HashMap map3 = new HashMap();
  HashMap map4 = new HashMap();
arr = list;
def num1 = 0;
def num2 = 0;
def num3 = 0;
def num4 = 0;
  for(int i=0;i<arr.size();i++) {
  num1 +=Integer.parseInt(arr.get(i).get('qd'));
  num2 +=Integer.parseInt(arr.get(i).get('zb'));
  num3 +=Integer.parseInt(arr.get(i).get('yw'));
  num4 +=Integer.parseInt(arr.get(i).get('wc'));
}
  map1.put('name',"项目启动");
  map1.put('value',num1);
  map2.put('name',"中标项目启动");
  map2.put('value',num2);
  map3.put('name',"业务受理开通");
  map3.put('value',num3);
  map4.put('name',"项目完成");
  map4.put('value',num4);
  result.add(map1);
   result.add(map2);
   result.add(map3);
   result.add(map4);
  return [result:result]
} script end: step=代码块_求和, result={result=[{name=项目启动, value=0}, {name=中标项目启动, value=0}, {name=业务受理开通, value=0}, {name=项目完成, value=0}]}
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||AbstractStepRunner.java:82|run||95||||Execute step end: name=代码块_求和, code=script8212, type=script, next=output
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||AbstractStepRunner.java:50|run||95||||Execute step start: name=出参, code=output, type=output
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||OutputStepRunner.java:31|doRun||95||||Will exit service as output step has been executed: name=出参, code=output
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||AbstractStepRunner.java:82|run||95||||Execute step end: name=出参, code=output, type=output, next=null
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||OrchestrationEngine.java:189|doRun||95||||Execute orchestration service end: startTime=Tue Oct 25 10:33:16 CST 2022, output={result=[{name=项目启动, value=0}, {name=中标项目启动, value=0}, {name=业务受理开通, value=0}, {name=项目完成, value=0}]}
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||OrchestrationEngine.java:429|cleanup||95||||Start cleanup orchestration context: serviceVersionId=899579643025317888
APPLICATION|DEBUG|||2022-10-25 10:33:16:736|||OrchestrationEngine.java:432|cleanup||95||||Finish cleanup orchestration context: serviceVersionId=899579643025317888
APPLICATION|DEBUG|||2022-10-25 10:33:17:043|||BaseJdbcLogger.java:137|debug||96||||==>  Preparing: SELECT av.app_version_id, av.app_id, av.app_name, av.tenant_id, av.version_no, av.created_time FROM lcdp_app_version_rel av WHERE av.app_version_id = ? AND av.status_cd = '00A'
APPLICATION|DEBUG|||2022-10-25 10:33:17:044|||BaseJdbcLogger.java:137|debug||96||||==> Parameters: 836459940279783424(Long)
APPLICATION|DEBUG|||2022-10-25 10:33:17:049|||BaseJdbcLogger.java:137|debug||96||||<==      Total: 0
APPLICATION|DEBUG|||2022-10-25 10:33:17:050|||OrchestrationEngine.java:77|run||96||||Received executing orchestration service request: startTime=Tue Oct 25 10:33:17 CST 2022, request=OrchestrationEngineRequest(runMode=1, debugInnerService=null, serviceVersionId=899596053680119808, appId=836459940279783424, serviceCode=zhuzhuangtu_cav, version=1.0, serviceDefinition=null, parameters={created_time_begin=2022-10-01, created_time_end=2022-10-30}, attributes=null, dataSourceProvider=null, httpRequest=org.apache.catalina.connector.RequestFacade@3c136af5)
APPLICATION|DEBUG|||2022-10-25 10:33:17:051|||BaseJdbcLogger.java:137|debug||96||||==>  Preparing: SELECT s.service_id, s.service_name, s.service_code, s.service_layer, s.catalog_item_id, s.remark service_desc, s.service_type, s.is_logged, v.service_version_id, v.service_param_id, v.version_code, v.service_state, v.service_logic_json, v.status_cd, v.creator_id, v.created_time, v.updator_id, v.updated_time, v.status_time, v.remark, v.app_id, v.mock_state FROM lcdp_service_version v JOIN lcdp_service s ON v.service_id = s.service_id AND s.status_cd = '00A' WHERE v.status_cd = '00A' AND v.app_id = ? AND s.app_id = ? AND s.service_code = ? AND v.version_code = ?
APPLICATION|DEBUG|||2022-10-25 10:33:17:051|||BaseJdbcLogger.java:137|debug||96||||==> Parameters: 836459940279783424(Long), 836459940279783424(Long), zhuzhuangtu_cav(String), 1.0(String)
APPLICATION|DEBUG|||2022-10-25 10:33:17:063|||BaseJdbcLogger.java:137|debug||96||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:064|||BaseJdbcLogger.java:137|debug||96||||==>  Preparing: SELECT av.app_version_id, av.app_id, av.app_name, av.tenant_id, av.version_no, av.created_time FROM lcdp_app_version_rel av WHERE av.app_version_id = ? AND av.status_cd = '00A'
APPLICATION|DEBUG|||2022-10-25 10:33:17:064|||BaseJdbcLogger.java:137|debug||96||||==> Parameters: 836459940279783424(Long)
APPLICATION|DEBUG|||2022-10-25 10:33:17:070|||BaseJdbcLogger.java:137|debug||96||||<==      Total: 0
APPLICATION|DEBUG|||2022-10-25 10:33:17:070|||OrchestrationEngine.java:182|doRun||96||||Start executing orchestration service request: startTime=Tue Oct 25 10:33:17 CST 2022, request=OrchestrationEngineRequest(runMode=1, debugInnerService=null, serviceVersionId=899596053680119808, appId=836459940279783424, serviceCode=zhuzhuangtu_cav, version=1.0, serviceDefinition=null, parameters={created_time_begin=2022-10-01, created_time_end=2022-10-30}, attributes=null, dataSourceProvider=null, httpRequest=org.apache.catalina.connector.RequestFacade@3c136af5)
APPLICATION|DEBUG|||2022-10-25 10:33:17:070|||AbstractStepRunner.java:50|run||96||||Execute step start: name=入参, code=input, type=input
APPLICATION|DEBUG|||2022-10-25 10:33:17:070|||AbstractStepRunner.java:82|run||96||||Execute step end: name=入参, code=input, type=input, next=callInternalService8463
APPLICATION|DEBUG|||2022-10-25 10:33:17:070|||AbstractStepRunner.java:50|run||96||||Execute step start: name=内部服务, code=callInternalService8463, type=callInternalService
APPLICATION|WARN|||2022-10-25 10:33:17:071|||ParamUtil.java:45|getParamValue||96||||No param found: spec=$.input.city_name
APPLICATION|DEBUG|||2022-10-25 10:33:17:071|||BaseJdbcLogger.java:137|debug||96||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:17:071|||BaseJdbcLogger.java:137|debug||96||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:17:078|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:078|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:078|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:079|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:079|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:079|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:079|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:079|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:080|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:080|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:080|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:080|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:17:086|||BaseJdbcLogger.java:137|debug||96||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:086|||BaseJdbcLogger.java:137|debug||96||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:17:087|||BaseJdbcLogger.java:137|debug||96||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:17:093|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:094|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:094|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:094|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:095|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:095|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:096|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:096|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:096|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:096|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:096|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:097|||AutoMappingUnknownColumnBehavior.java:47|doAction||96||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:17:102|||BaseJdbcLogger.java:137|debug||96||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:129|||AbstractStepRunner.java:82|run||96||||Execute step end: name=内部服务, code=callInternalService8463, type=callInternalService, next=script3148
APPLICATION|DEBUG|||2022-10-25 10:33:17:129|||AbstractStepRunner.java:50|run||96||||Execute step start: name=筛选数据, code=script3148, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:17:129|||ScriptStepRunner.java:47|doRun||96||||Executing groovy script start: step=筛选数据, parameters=[[{xcsg=0.016, zb=0, wc=0, sjhsavg=null, cs=null, upf1=0.003, city_name=南京, total=2, a3=0, a4=0, qd=0, sjhs=1, yw=0, upfcs=0}]]
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
[苏州市, 淮安市, 宿迁市, 南京市, 连云港市, 徐州市, 常州市, 镇江市, 无锡市, 南通市, 泰州市, 盐城市, 扬州市]
[[upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0.003, xcsg:0.016, sjhsavg:null], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0], [upf1:0, xcsg:0, sjhsavg:0]]
APPLICATION|DEBUG|||2022-10-25 10:33:17:130|||ScriptStepRunner.java:54|doRun||96||||Executing class GroovyExample {
  def invoke(def arr_result) {
                ArrayList<Map<String, String>> arr = new ArrayList();
        List<Map<String, String>> result = new ArrayList();
        result = arr_result;
        ArrayList arr_city_info = new ArrayList();
        List list = (List) Arrays.asList("苏州市", "淮安市", "宿迁市", "南京市", "连云港市", "徐州市", "常州市", "镇江市", "无锡市", "南通市", "泰州市", "盐城市", "扬州市");
        ArrayList result_arr = new ArrayList();
        arr_city_info.addAll((Collection) list);
        for(int i=0;i<arr_city_info.size();i++) {
          if(result.size()>0){
            for (int j = 0; j < result.size(); j++) {
                System.out.println("日志"+result.get(j).get("city_name"));
         if((result.get(j).get("city_name")+"市").equals(arr_city_info.get(i))) {
                HashMap map2 = new HashMap();
                map2.put("xcsg",result.get(j).get("xcsg"));
                map2.put("upf1",result.get(j).get("upf1"));
                map2.put("sjhsavg",result.get(j).get("sjhsavg"));
                arr.add(map2);
                break;
         }else {
                HashMap map2 = new HashMap();
                map2.put("xcsg","0");
                map2.put("upf1","0");
                map2.put("sjhsavg","0");
                arr.add(map2);
                break;
         }

            }

          }else{
                HashMap map2 = new HashMap();
                map2.put("xcsg","0");
                map2.put("upf1","0");
                map2.put("sjhsavg","0");
                arr.add(map2);
                break;
          }

        }
        System.out.println(arr_city_info);
        System.out.println(arr);
return [arr:arr]
  }
} script end: step=筛选数据, result={arr=[{upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0.003, xcsg=0.016, sjhsavg=null}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}]}
APPLICATION|DEBUG|||2022-10-25 10:33:17:131|||AbstractStepRunner.java:82|run||96||||Execute step end: name=筛选数据, code=script3148, type=script, next=script8212
APPLICATION|DEBUG|||2022-10-25 10:33:17:131|||AbstractStepRunner.java:50|run||96||||Execute step start: name=代码块_求和, code=script8212, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:17:131|||ScriptStepRunner.java:47|doRun||96||||Executing groovy script start: step=代码块_求和, parameters=[[{upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0.003, xcsg=0.016, sjhsavg=null}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}, {upf1=0, xcsg=0, sjhsavg=0}]]
APPLICATION|ERROR|||2022-10-25 10:33:17:139|||AbstractStepRunner.java:67|run||96||||Execute step failed: name=代码块_求和, code=script8212, type=script
com.iwhalecloud.bss.litchi.base.exception.BssException: Groovy 脚本执行失败: 行号: 14, NullPointerException: 
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:102)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:75)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.impl.ScriptStepRunner.doRun(ScriptStepRunner.java:52)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.impl.ScriptStepRunner.doRun(ScriptStepRunner.java:29)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.AbstractStepRunner.run(AbstractStepRunner.java:61)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.executeSteps(OrchestrationEngine.java:398)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.doRun(OrchestrationEngine.java:187)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.run(OrchestrationEngine.java:95)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.invokeService(OrchestrationController.java:268)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.execute(OrchestrationController.java:203)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.run(OrchestrationController.java:165)
        at sun.reflect.GeneratedMethodAccessor625.invoke(Unknown Source)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.lang.reflect.Method.invoke(Method.java:498)
        at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:190)
        at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:138)
        at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:105)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:878)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:792)
        at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
        at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1040)
        at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943)
        at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
        at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:681)
        at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:764)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:97)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at com.iwhalecloud.bassc.lcdp.security.fliter.EncryptionFilter.doFilter(EncryptionFilter.java:63)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197)
        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97)
        at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:541)
        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135)
        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92)
        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78)
        at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769)
        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:359)
        at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:399)
        at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65)
        at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:889)
        at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1743)
        at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)
        at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191)
        at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659)
        at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
        at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.NullPointerException: null
        at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1838)
        at sun.misc.FloatingDecimal.parseFloat(FloatingDecimal.java:122)
        at java.lang.Float.parseFloat(Float.java:451)
        at org.codehaus.groovy.vmplugin.v8.IndyInterface.selectMethod(IndyInterface.java:346)
        at org.codehaus.groovy.vmplugin.v8.IndyInterface.fromCache(IndyInterface.java:318)
        at Scripta2d6be1015cc5aa24e5fef98b38e2d4d7eb943e309bce066138a0f80623f8f98.invoke(Scripta2d6be1015cc5aa24e5fef98b38e2d4d7eb943e309bce066138a0f80623f8f98.groovy:14)
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.lang.reflect.Method.invoke(Method.java:498)
        at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)
        at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)
        at groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)
        at groovy.lang.Script.invokeMethod(Script.java:96)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:87)
        ... 67 common frames omitted
APPLICATION|ERROR|||2022-10-25 10:33:17:139|||OrchestrationEngine.java:192|doRun||96||||Failed to execute orchestration service: startTime=Tue Oct 25 10:33:17 CST 2022, error=Groovy 脚本执行失败: 行号: 14, NullPointerException: 
APPLICATION|DEBUG|||2022-10-25 10:33:17:139|||OrchestrationEngine.java:429|cleanup||96||||Start cleanup orchestration context: serviceVersionId=899596053680119808
APPLICATION|DEBUG|||2022-10-25 10:33:17:140|||OrchestrationEngine.java:432|cleanup||96||||Finish cleanup orchestration context: serviceVersionId=899596053680119808
APPLICATION|DEBUG|||2022-10-25 10:33:17:161|||BaseJdbcLogger.java:137|debug||100||||==>  Preparing: SELECT av.app_version_id, av.app_id, av.app_name, av.tenant_id, av.version_no, av.created_time FROM lcdp_app_version_rel av WHERE av.app_version_id = ? AND av.status_cd = '00A'
APPLICATION|DEBUG|||2022-10-25 10:33:17:161|||BaseJdbcLogger.java:137|debug||100||||==> Parameters: 836459940279783424(Long)
APPLICATION|DEBUG|||2022-10-25 10:33:17:167|||BaseJdbcLogger.java:137|debug||100||||<==      Total: 0
APPLICATION|DEBUG|||2022-10-25 10:33:17:168|||OrchestrationEngine.java:77|run||100||||Received executing orchestration service request: startTime=Tue Oct 25 10:33:17 CST 2022, request=OrchestrationEngineRequest(runMode=1, debugInnerService=null, serviceVersionId=899648396694020096, appId=836459940279783424, serviceCode=zhuzhuangtu_cav2, version=1.0, serviceDefinition=null, parameters={created_time_begin=2022-10-01, created_time_end=2022-10-30}, attributes=null, dataSourceProvider=null, httpRequest=org.apache.catalina.connector.RequestFacade@3c136af5)
APPLICATION|DEBUG|||2022-10-25 10:33:17:168|||BaseJdbcLogger.java:137|debug||100||||==>  Preparing: SELECT s.service_id, s.service_name, s.service_code, s.service_layer, s.catalog_item_id, s.remark service_desc, s.service_type, s.is_logged, v.service_version_id, v.service_param_id, v.version_code, v.service_state, v.service_logic_json, v.status_cd, v.creator_id, v.created_time, v.updator_id, v.updated_time, v.status_time, v.remark, v.app_id, v.mock_state FROM lcdp_service_version v JOIN lcdp_service s ON v.service_id = s.service_id AND s.status_cd = '00A' WHERE v.status_cd = '00A' AND v.app_id = ? AND s.app_id = ? AND s.service_code = ? AND v.version_code = ?
APPLICATION|DEBUG|||2022-10-25 10:33:17:169|||BaseJdbcLogger.java:137|debug||100||||==> Parameters: 836459940279783424(Long), 836459940279783424(Long), zhuzhuangtu_cav2(String), 1.0(String)
APPLICATION|DEBUG|||2022-10-25 10:33:17:180|||BaseJdbcLogger.java:137|debug||100||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:181|||BaseJdbcLogger.java:137|debug||100||||==>  Preparing: SELECT av.app_version_id, av.app_id, av.app_name, av.tenant_id, av.version_no, av.created_time FROM lcdp_app_version_rel av WHERE av.app_version_id = ? AND av.status_cd = '00A'
APPLICATION|DEBUG|||2022-10-25 10:33:17:181|||BaseJdbcLogger.java:137|debug||100||||==> Parameters: 836459940279783424(Long)
APPLICATION|DEBUG|||2022-10-25 10:33:17:187|||BaseJdbcLogger.java:137|debug||100||||<==      Total: 0
APPLICATION|DEBUG|||2022-10-25 10:33:17:187|||OrchestrationEngine.java:182|doRun||100||||Start executing orchestration service request: startTime=Tue Oct 25 10:33:17 CST 2022, request=OrchestrationEngineRequest(runMode=1, debugInnerService=null, serviceVersionId=899648396694020096, appId=836459940279783424, serviceCode=zhuzhuangtu_cav2, version=1.0, serviceDefinition=null, parameters={created_time_begin=2022-10-01, created_time_end=2022-10-30}, attributes=null, dataSourceProvider=null, httpRequest=org.apache.catalina.connector.RequestFacade@3c136af5)
APPLICATION|DEBUG|||2022-10-25 10:33:17:187|||AbstractStepRunner.java:50|run||100||||Execute step start: name=入参, code=input, type=input
APPLICATION|DEBUG|||2022-10-25 10:33:17:187|||AbstractStepRunner.java:82|run||100||||Execute step end: name=入参, code=input, type=input, next=callInternalService8463
APPLICATION|DEBUG|||2022-10-25 10:33:17:187|||AbstractStepRunner.java:50|run||100||||Execute step start: name=内部服务, code=callInternalService8463, type=callInternalService
APPLICATION|WARN|||2022-10-25 10:33:17:188|||ParamUtil.java:45|getParamValue||100||||No param found: spec=$.input.city_name
APPLICATION|DEBUG|||2022-10-25 10:33:17:188|||BaseJdbcLogger.java:137|debug||100||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:17:188|||BaseJdbcLogger.java:137|debug||100||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:17:195|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:195|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:195|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:195|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:195|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:196|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:17:202|||BaseJdbcLogger.java:137|debug||100||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:202|||BaseJdbcLogger.java:137|debug||100||||==>  Preparing: select a.app_service_id, a.app_id, a.table_code, a.service_name, a.service_code, a.service_desc, a.service_path, a.service_method, a.external_service_code, a.request_obj, a.response_obj, a.status_cd, a.creator_id, a.updator_id, a.created_time, a.updated_time, a.status_time, a.remark, a.tenant_code, a.service_type, a.script_result_type, a.service_provider_id, a.catalog_item_id, a.script_sql, a.script_params, a.data_source_code, a.params_type, a.params_name, a.invoke_interface, a.invoke_method, a.mock_state, a.mock_response from lcdp_app_service a where status_cd = '00A' and service_code = ? and (app_id = ? or app_id = -1)
APPLICATION|DEBUG|||2022-10-25 10:33:17:202|||BaseJdbcLogger.java:137|debug||100||||==> Parameters: statistical_detail(String), 836459940279783424(Long)
APPLICATION|WARN|||2022-10-25 10:33:17:209|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=EXTERNAL_SERVICE_CODE,propertyName=EXTERNAL_SERVICE_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:209|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_CD,propertyName=STATUS_CD,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:209|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATOR_ID,propertyName=CREATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:209|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATOR_ID,propertyName=UPDATOR_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CREATED_TIME,propertyName=CREATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=UPDATED_TIME,propertyName=UPDATED_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=STATUS_TIME,propertyName=STATUS_TIME,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=REMARK,propertyName=REMARK,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=TENANT_CODE,propertyName=TENANT_CODE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:210|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=CATALOG_ITEM_ID,propertyName=CATALOG_ITEM_ID,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:211|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_STATE,propertyName=MOCK_STATE,propertyType=null]
APPLICATION|WARN|||2022-10-25 10:33:17:211|||AutoMappingUnknownColumnBehavior.java:47|doAction||100||||Unknown column is detected on 'com.iwhalecloud.bassc.lcdp.internalservice.mapper.AppServiceMapper.getAppServiceByServiceCode' auto-mapping. Mapping parameters are [columnName=MOCK_RESPONSE,propertyName=MOCK_RESPONSE,propertyType=null]
APPLICATION|DEBUG|||2022-10-25 10:33:17:216|||BaseJdbcLogger.java:137|debug||100||||<==      Total: 1
APPLICATION|DEBUG|||2022-10-25 10:33:17:237|||AbstractStepRunner.java:82|run||100||||Execute step end: name=内部服务, code=callInternalService8463, type=callInternalService, next=script3148
APPLICATION|DEBUG|||2022-10-25 10:33:17:237|||AbstractStepRunner.java:50|run||100||||Execute step start: name=筛选数据, code=script3148, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:17:237|||ScriptStepRunner.java:47|doRun||100||||Executing groovy script start: step=筛选数据, parameters=[[{xcsg=0.016, zb=0, wc=0, sjhsavg=null, cs=null, upf1=0.003, city_name=南京, total=2, a3=0, a4=0, qd=0, sjhs=1, yw=0, upfcs=0}]]
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
日志南京
[苏州市, 淮安市, 宿迁市, 南京市, 连云港市, 徐州市, 常州市, 镇江市, 无锡市, 南通市, 泰州市, 盐城市, 扬州市]
[[cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:null, sjhs:1, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0], [cs:0, sjhs:0, upfcs:0]]
APPLICATION|DEBUG|||2022-10-25 10:33:17:239|||ScriptStepRunner.java:54|doRun||100||||Executing class GroovyExample {
  def invoke(def arr_result) {
                ArrayList<Map<String, String>> arr = new ArrayList();
        List<Map<String, String>> result = new ArrayList();
        result = arr_result;
        ArrayList arr_city_info = new ArrayList();
        List list = (List) Arrays.asList("苏州市", "淮安市", "宿迁市", "南京市", "连云港市", "徐州市", "常州市", "镇江市", "无锡市", "南通市", "泰州市", "盐城市", "扬州市");
        ArrayList result_arr = new ArrayList();
        arr_city_info.addAll((Collection) list);
        for(int i=0;i<arr_city_info.size();i++) {
          if(result.size()>0){
            for (int j = 0; j < result.size(); j++) {
                System.out.println("日志"+result.get(j).get("city_name"));
         if((result.get(j).get("city_name")+"市").equals(arr_city_info.get(i))) {
                HashMap map2 = new HashMap();
                map2.put("cs",result.get(j).get("cs"));
                map2.put("upfcs",result.get(j).get("upfcs"));
                map2.put("sjhs",result.get(j).get("sjhs"));
                arr.add(map2);
                break;
         }else {
                HashMap map2 = new HashMap();
                map2.put("cs","0");
                map2.put("upfcs","0");
                map2.put("sjhs","0");
                arr.add(map2);
                break;
         }

            }}else{
                HashMap map2 = new HashMap();
                map2.put("cs","0");
                map2.put("upfcs","0");
                map2.put("sjhs","0");
                arr.add(map2);
                break;

            }
        }
        System.out.println(arr_city_info);
        System.out.println(arr);
return [arr:arr]
  }
} script end: step=筛选数据, result={arr=[{cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=null, sjhs=1, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}]}
APPLICATION|DEBUG|||2022-10-25 10:33:17:239|||AbstractStepRunner.java:82|run||100||||Execute step end: name=筛选数据, code=script3148, type=script, next=script8212
APPLICATION|DEBUG|||2022-10-25 10:33:17:239|||AbstractStepRunner.java:50|run||100||||Execute step start: name=代码块_求和, code=script8212, type=script
APPLICATION|DEBUG|||2022-10-25 10:33:17:239|||ScriptStepRunner.java:47|doRun||100||||Executing groovy script start: step=代码块_求和, parameters=[[{cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=null, sjhs=1, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}, {cs=0, sjhs=0, upfcs=0}]]
APPLICATION|ERROR|||2022-10-25 10:33:17:244|||AbstractStepRunner.java:67|run||100||||Execute step failed: name=代码块_求和, code=script8212, type=script
com.iwhalecloud.bss.litchi.base.exception.BssException: Groovy 脚本执行失败: 行号: 12, NullPointerException: 
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:102)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:75)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.impl.ScriptStepRunner.doRun(ScriptStepRunner.java:52)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.impl.ScriptStepRunner.doRun(ScriptStepRunner.java:29)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.runner.AbstractStepRunner.run(AbstractStepRunner.java:61)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.executeSteps(OrchestrationEngine.java:398)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.doRun(OrchestrationEngine.java:187)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.impl.OrchestrationEngine.run(OrchestrationEngine.java:95)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.invokeService(OrchestrationController.java:268)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.execute(OrchestrationController.java:203)
        at com.iwhalecloud.bassc.lcdp.orchestration.web.controller.OrchestrationController.run(OrchestrationController.java:165)
        at sun.reflect.GeneratedMethodAccessor625.invoke(Unknown Source)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.lang.reflect.Method.invoke(Method.java:498)
        at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:190)
        at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:138)
        at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:105)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:878)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:792)
        at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
        at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1040)
        at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943)
        at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
        at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:681)
        at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:764)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:97)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at com.iwhalecloud.bassc.lcdp.security.fliter.EncryptionFilter.doFilter(EncryptionFilter.java:63)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197)
        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97)
        at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:541)
        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135)
        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92)
        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78)
        at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769)
        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:359)
        at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:399)
        at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65)
        at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:889)
        at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1743)
        at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)
        at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191)
        at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659)
        at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
        at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.NullPointerException: null
        at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1838)
        at sun.misc.FloatingDecimal.parseFloat(FloatingDecimal.java:122)
        at java.lang.Float.parseFloat(Float.java:451)
        at org.codehaus.groovy.vmplugin.v8.IndyInterface.selectMethod(IndyInterface.java:346)
        at org.codehaus.groovy.vmplugin.v8.IndyInterface.fromCache(IndyInterface.java:318)
        at Script33a666a4ce9e372fed26d186547e45d0a56ecb782c2a0e4d83dac5b8d6d54ebc.invoke(Script33a666a4ce9e372fed26d186547e45d0a56ecb782c2a0e4d83dac5b8d6d54ebc.groovy:12)
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.lang.reflect.Method.invoke(Method.java:498)
        at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)
        at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)
        at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)
        at groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)
        at groovy.lang.Script.invokeMethod(Script.java:96)
        at com.iwhalecloud.bassc.lcdp.orchestration.engine.util.GroovyUtil.invoke(GroovyUtil.java:87)
        ... 67 common frames omitted
APPLICATION|ERROR|||2022-10-25 10:33:17:245|||OrchestrationEngine.java:192|doRun||100||||Failed to execute orchestration service: startTime=Tue Oct 25 10:33:17 CST 2022, error=Groovy 脚本执行失败: 行号: 12, NullPointerException: 
APPLICATION|DEBUG|||2022-10-25 10:33:17:245|||OrchestrationEngine.java:429|cleanup||100||||Start cleanup orchestration context: serviceVersionId=899648396694020096
APPLICATION|DEBUG|||2022-10-25 10:33:17:245|||OrchestrationEngine.java:432|cleanup||100||||Finish cleanup orchestration context: serviceVersionId=899648396694020096