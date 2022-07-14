// 脚本代码块  (包括格式化时间 以及 计算时间差  计算完成后 将时间转化为分钟 )

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
class GroovyExample {
  def invoke(def start_time , def end_time) {
int min = 0;
    SimpleDateFormat formate = new SimpleDateFormat("yy-MM-dd HH:mm:ss");
    try {
      long days = 0;
      long hours = 0;
      long minutes = 0;
      Date startTime = formate.parse(start_time);
      Date endTime = formate.parse(end_time);
      long inpecTimeHS = endTime.getTime() - startTime.getTime();
      days = inpecTimeHS / (1000 * 60 * 60 * 24);
      hours = (inpecTimeHS - days * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      minutes = (inpecTimeHS - days * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60)) / (1000 * 60);
      System.out.println("天"+days + "小时" + hours + "分钟" + minutes);
       min = (int)days*24*60+(int)hours*60+(int)(minutes);
    } catch (ParseException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    return ["min":min];
  }
}

// eclipse 中执行的脚本

package com.iwhalecloud.gj_test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class deal_time {
  public int name() {
    int min = 0;
    SimpleDateFormat formate = new SimpleDateFormat("yy-MM-dd HH:mm:ss");
    try {
      long days = 0;
      long hours = 0;
      long minutes = 0;
      Date startTime = formate.parse("2022-07-07 14:21:10.954");
      Date endTime = formate.parse("2022-07-07 14:28:10.954");
      long inpecTimeHS = endTime.getTime() - startTime.getTime();
      days = inpecTimeHS / (1000 * 60 * 60 * 24);
      hours = (inpecTimeHS - days * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      minutes = (inpecTimeHS - days * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60)) / (1000 * 60);
      System.out.println("天"+days + "小时" + hours + "分钟" + minutes);
        min = (int)days*24*60+(int)hours*60+(int)(minutes);
    } catch (ParseException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    return min;
  }

  public static void main(String[] args) {

    int a = new deal_time().name();
    System.out.println(a);
  }
}