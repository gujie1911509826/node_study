class GroovyExample {
  def invoke(def arr_result) {
		ArrayList<Map<String, String>> arr = new ArrayList();
        List<Map<String, String>> result = new ArrayList();
        result = arr_result;
        ArrayList arr_city_info = new ArrayList();
        List list = (List) Arrays.asList("苏州市", "淮安市", "宿迁市", "南京市", "连云港市", "徐州市", "常州市", "镇江市", "无锡市", "南通市", "泰州市", "盐城市", "扬州市");
        ArrayList result_arr = new ArrayList();
        arr_city_info.addAll((Collection) list);
        for(int i=0;i<arr_city_info.size();i++) {
            for (int j = 0; j < result.size(); j++) {
                System.out.println("日志"+result.get(j).get("city_name"));
         if((result.get(j).get("city_name")+"市").equals(arr_city_info.get(i))) {
        	HashMap map2 = new HashMap();
      		map2.put("x",arr_city_info.get(i));
      		map2.put("y0",result.get(j).get("total"));
      		map2.put("y1",result.get(j).get("a3"));
      		map2.put("y2",result.get(j).get("a4")); 
      		arr.add(map2);
      		break;
         }else {
     		HashMap map2 = new HashMap();
     		map2.put("x",arr_city_info.get(i));
     		map2.put("y0","0");
     		map2.put("y1","0");
     		map2.put("y2","0");
     		arr.add(map2);
     		break;	
         }

            }
        }
        System.out.println(arr_city_info);
        System.out.println(arr);
return [arr:arr]
  }
}