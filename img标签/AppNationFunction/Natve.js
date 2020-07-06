var  isIOS = navigator.userAgent.indexOf("iPhone") > -1;
//Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15
// 
function wx_ShopApplet(str){

     alert(navigator.userAgent);
     /**
        path: 小程序页面的路径
         userName  :小程序id
         title:小程序标题
        description :小程序描述
        webpageUrl:低版本网页链接
        hdImage :小程序预览图
       */
    if (isIOS) {
        var wx_shopObjc = {
            path:"/home/pageindex",
            userName:"wxxxxxx",
            title:"小程序分享",
            description : "小程序分享很好的",
            webpageUrl : "webpageUrl/url",
            hdImage : "image.png"
        };
        location.href =  'JSProtocol::wx_ShopApplet:' + JSON.stringify(wx_shopObjc);
        alert(location.href);

    } else {
        
    }

   

}