class GroovyExample {
  def invoke(def arr) {
ArrayList arr2 = new ArrayList();
HashMap map2 = new HashMap();
map2.put("id","0")
    map2.put("p_id","-1")
map2.put("code_type_name","全部")
map2.put("code_type","0")
    arr2.add(map2);
    for(int i=0;i<arr.size();i++){
      arr[i]['p_id'] = "0";
         arr2.add(arr[i]);
    }
 //map2.put("children",arr);

 
    return ["arr2":arr2]
  }
}



// 树型控件代码

class GroovyExample {
  def invoke(def arr) {
ArrayList arr2 = new ArrayList();
HashMap map2 = new HashMap();
map2.put("id","0")
    map2.put("p_id","-1")
map2.put("code_type_name","全部")
map2.put("code_type","0")
    for(int i=0;i<arr.size();i++){
      arr[i]['p_id'] = "0";
    }
 map2.put("children",arr);
arr2.add(map2);
    return ["arr2":arr2]
  }
}
