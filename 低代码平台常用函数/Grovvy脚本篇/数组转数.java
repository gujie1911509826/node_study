class GroovyExample {
  def invoke(Object treeList) {
    List<Map<String, Object>> oneList = new ArrayList<>()
    for ( Map<String, Object> treeMap: treeList) {
      if("0".equals(treeMap.get("parentId"))){
        treeMap.put("children",digui(treeList,treeMap))
        oneList.add(treeMap)
      }
    }
    return ["treeList":oneList]
  }
  
  private List<Map<String, Object>> digui(Object treeList,Map<String, Object> oneList) {
  	List<Map<String, Object>> twoList = new ArrayList<>();
    for (Map<String, Object> treeMap:treeList){
      
      if(treeMap.get("parentId").equals(oneList.get("orgId").toString())){
        treeMap.put("children",digui(treeList,treeMap))
        twoList.add(treeMap)
      }
      
    }
    return twoList;
  }
  
}