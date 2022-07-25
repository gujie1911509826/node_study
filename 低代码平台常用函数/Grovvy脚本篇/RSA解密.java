import org.apache.commons.codec.binary.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;

public static String publicKeyDecrypt(String str, String publicKey) {
  // 64位解码加密后的字符串
  byte[] inputByte = Base64.decodeBase64(str.getBytes(StandardCharsets.UTF_8));
  // base64编码的私钥
  byte[] decoded = Base64.decodeBase64(publicKey);
  PublicKey pubKey = null;
  String outStr = "";
  try {
    pubKey = KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(decoded));
    // RSA解密
    Cipher cipher = Cipher.getInstance("RSA");
    cipher.init(Cipher.DECRYPT_MODE, pubKey);
    new String(cipher.doFinal(inputByte));
  } catch (InvalidKeySpecException | NoSuchAlgorithmException | NoSuchPaddingException |
           IllegalBlockSizeException | BadPaddingException | InvalidKeyException e) {
    throw new RuntimeException(e);
  }
  return outStr;
}