class GroovyExample {
  def invoke(Object treeList,String parentId) {
    // 结果数组
    List<Map<String, Object>> reasultList = new ArrayList<>();
    List<Map<String, Object>> oneList = new ArrayList<>();
    // 循环整个树结构
    for ( Map<String, Object> treeMap: treeList) {
      // 如果他的id等于父节点id
      if( treeMap.get("par_catalog_item_id").equals(parentId)){
        // 那就吧他的item返回出去
        reasultList.add(treeMap);
        break;
      }
      else{
         reasultList.add(digui(treeMap.get('children'),parentId));
         break;
      }
   

    }
    return ["treeList":reasultList]
  }
  
  private List<Map<String, Object>> digui( List<Map<String, Object>> childrenMap,String parentId  ) {
  	List<Map<String, Object>> twoList = new ArrayList<>();
    for (Map<String, Object> treeMap:childrenMap){
      if( treeMap.get("par_catalog_item_id").equals(parentId)){
        // 那就吧他的item返回出去
        twoList.add(treeMap);
        break;
      }
      else{
       digui(treeMap.get('children'),parentId)
      }
    }
    return twoList;
  }
  
}