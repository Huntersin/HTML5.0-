var  isIOS = navigator.userAgent.indexOf("iPhone") > -1;
//Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15
// 


function  callVedioSDK(){
    alert(navigator.userAgent);
    var parmVedioDic = {
        customerType:"0" // 0为视频 1 音频 默认为音频  
    };
    if (isIOS) {
        location.href =  'JSProtocol::CMOSServiceSDK:' + JSON.stringify(parmVedioDic);
    }
}


function wx_ShopApplet(str){

      // 获取cookie
     //alert(document.cookie);
     var arrcookie =  document.cookie.split(";");
     alert(arrcookie);


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

function userGoLogin(){
    var  account = document.getElementById("account").value;
    var  password = document.getElementById("password").value
    if(account.length == 0){
        alert("手机号为空");
        return
    }

    if(password.length == 0){
        alert("密码为空");
        return
    }
    
    if(account.length < 11 ){
        alert("请输入正确的手机号");
        return
    }
    
    // 登录
    

}

