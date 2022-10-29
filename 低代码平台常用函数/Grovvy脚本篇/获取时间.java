import java.util.Date;
import java.text.SimpleDateFormat;
class GroovyExample {
  def invoke(Object t) {
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
      return ['resultStr': df.format(new Date())]
  }
}


import java.util.Date;
import java.text.SimpleDateFormat;
class GroovyExample {
   def invoke(def start , def end ) {
   HashMap map = new HashMap();
   SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
   map.put('start_created_time',df.formate(start));
   map.put('end_created_time',df.formate(end));
   return ['map':map]
    
  }
}