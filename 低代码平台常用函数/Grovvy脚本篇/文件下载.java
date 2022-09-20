import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
public class ParseInTxt {
 private File result = null;
 private FileWriter writer;
 private PrintWriter pw;
 boolean bool;
 // path动态指定路径
 public void createTxT(String path) { // 创建新的txt数据⽂件
  bool = false;
  result = new File(path);
  try {
   result.createNewFile();// 在本地创建⼀个txt⽂件
   bool = true;
  } catch (IOException e) {
   bool = false;
   System.err.println(e);
  }
  if (bool) {
   try {
    writer = new FileWriter(path);
   } catch (IOException e) {
    System.err.println(e);
   }
   try {
    pw = new PrintWriter(path);
   } catch (FileNotFoundException e) {
    System.err.println(e);
   }
  }
 }
 public void aLine(List<String> in) { // 写⼊⼀个List集
  for (int i = 0; i < in.size(); i++) {
   pw.println(in.get(i));
  }
 }
 /*
  * public void aLint(String in){// 写⼊⼀⾏ pw.println(in); }
  */
 public void finish() { // 关闭输⼊流，将⽂字从缓存写⼊⽂件
  try {
   pw.flush();
   writer.close();
  } catch (IOException iox) {
   System.err.println(iox);
  }
 }
 }