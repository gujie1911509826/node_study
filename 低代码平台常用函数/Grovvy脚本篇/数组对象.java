class GroovyExample {
  def invoke() {
    List<Map> result = new ArrayList<>();
    Map<String,String> obj1 = new HashMap<String,String>(3);
    obj1.put("url","");
    result.add(obj1);
    Map<String,String> obj2 = new HashMap<String,String>(3);
    obj2.put("url", "")
    result.add(obj2);
    Map<String,String> obj3 = new HashMap<String,String>(3);
    obj3.put("url","")
    result.add(obj3);
    return ["lst":result]
  }
}
x`