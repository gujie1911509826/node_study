class GroovyExample {
  def invoke(List<Map<String, Object>> arr1,  List<Map<String, Object>> arr2) {
    def ret = [];
    // def min = Math.min(arr1.size(), arr2.size());
    for (int i = 0;i< arr2.size(); i++) {
      Map<String, Object> item1 = arr1.get(i);
      Map<String, Object> item2 = arr2.get(i);
      def item3 = item1;
      item3['month_merits'] = item2['month_merits']
      item3['unit_settlement'] = item2['unit_settlement']
      item3['settlement_no'] = item2['settlement_no']
      item3['work_days'] = item2['work_days']
      ret.add(item3);
    }
    return ['result': ret];
  }
}