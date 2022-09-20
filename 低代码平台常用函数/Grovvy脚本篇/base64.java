import sun.misc.BASE64Encoder;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class redisLock {
    public static void main(String[] args) throws Exception {
        String str = encodeImageToBase64(new URL("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664965805&t=32b5ed788d1b042d663db778429bc081"));
        System.out.println(str);
    }


    /**
     * 将网络图片编码为base64
     *
     * @param url 网络图片url
     * @return
     * @throws
     */
    public static String encodeImageToBase64(URL url) throws Exception {

//打开链接
        HttpURLConnection conn = null;
        InputStream inStream = null;
        ByteArrayOutputStream out = null;
        try {
            conn = (HttpURLConnection) url.openConnection();

//设置请求方式为"GET"
            conn.setRequestMethod("GET");
//超时响应时间为5秒
            conn.setConnectTimeout(5 * 1000);
//通过输入流获取图片数据
            inStream = conn.getInputStream();
//得到图片的二进制数据，以二进制封装得到数据，具有通用性

//            ByteArrayOutputStream outStream = new ByteArrayOutputStream();
            out = new ByteArrayOutputStream();
//创建一个Buffer字符串
            byte[] buffer = new byte[1024];
//每次读取的字符串长度，如果为-1，代表全部读取完毕
            int len = 0;
//使用一个输入流从buffer里把数据读取出来
            while ((len = inStream.read(buffer)) != -1) {
//用输出流往buffer里写入数据，中间参数代表从哪个位置开始读，len代表读取的长度
                out.write(buffer, 0, len);
            }

            byte[] data = out.toByteArray();
//对字节数组Base64编码
            BASE64Encoder encoder = new BASE64Encoder();
            String base64 = encoder.encode(data);
            return base64;//返回Base64编码过的字节数组字符串


        } catch (IOException e) {
            e.printStackTrace();
            throw new Exception("========图片上传失败,请确定图片是否存在=========", e);
        } 
            }
            }