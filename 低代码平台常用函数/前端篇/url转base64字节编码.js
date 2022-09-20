getBase64("https://fastmarket.oss-cn-shenzhen.aliyuncs.com/oss/static/other/1/images/baseMap_index.jpg")//链接是你的网络图片

function getBase64(imgUrl) {
  window.URL = window.URL || window.webkitURL;
  var xhr = new XMLHttpRequest();
  xhr.open("get", imgUrl, true);
  // 至关重要
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      //得到一个blob对象
      var blob = this.response;
      console.log("blob", blob)
      // 至关重要
      let oFileReader = new FileReader();
      oFileReader.onloadend = function (e) {
        // 此处拿到的已经是 base64的图片了
        let base64 = e.target.result;
        console.log("方式一》》》》》》》》》", base64)
      };
      oFileReader.readAsDataURL(blob);
  }
  }
  xhr.send();
}
