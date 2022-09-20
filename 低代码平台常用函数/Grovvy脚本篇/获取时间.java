import java.util.Date;
import java.text.SimpleDateFormat;
class GroovyExample {
  def invoke(Object t) {
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
      return ['resultStr': df.format(new Date())]
  }
}