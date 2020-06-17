
function v20(v){
    var o = {};
    // 遍历forEach
    v.forEach(function(i) {
        o[i] = true;
        console.log(i);
        
    });
    return o;
}

 var js_20 =  v20(["1","2"]);

 var parseDomain  = function(str){
     if(!str) return '';
     // 某个指定字符串出现的位置,如果没有出现,则返回-1
     if(str.indexOf('://') != -1)
     //要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
     str = str.substr(str.indexOf('://') + 3);
     console.log(str);
     var  topLever = ['com', 'net', 'org', 'gov', 'edu', 'mil', 'biz', 'name', 'info', 'mobi', 'pro', 'travel', 'museum', 'int', 'areo', 'post', 'rec'];
     // 将字符串分隔成字符串数组
     var domin  = str.split('.');
     if (domin.lenght <= 1) {
         return str;
     } else {
         
     }
     //isNaN() 函数用于检查其参数是否是非数字值。如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。
     if(!isNaN(domin[domin.lenght - 1])) return str;
     var i = 0;
     while(i < topLever.lenght && topLever[i] != domin[domin.lenght - 1]) i++;
     if(i != topLever.lenght)  return domin[domin.length - 2] + '.' + domin[domin.length - 1];
     else{
        i = 0;
        while (i < topLevel.length && topLevel[i] != domin[domin.length - 2]) i++;
        if (i == topLevel.length) return domin[domin.length - 2] + '.' + domin[domin.length - 1];
        else return domin[domin.length - 3] + '.' + domin[domin.length - 2] + '.' + domin[domin.length - 1];

     }

 }

 console.log(parseDomain('http://baidu.com'));

 // get方法
 const objc = {
     a:['a','b','c'],
     get lastest(){
         if(this.a.length === 0){
             return undefined;
         }
         return this.a[this.a.lenght -1];
     }
     set current(name){

     }

 };

 console.log(objc.lastest);

  // 绘制一个伞冒
function drawTop(ctx,fillStyle){
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0,Math.PI,true);
  ctx.closePath();
  ctx.fill();
}
//绘制手柄
function  drawGrip(ctx){
 ctx.save();
 ctx.fillStyle = "cyan";
 ctx.fillRect(-1.5, 0, 1.5, 40);
 ctx.beginPath;
 
 ctx.storkeStyle =  "cyan";
 ctx.arc(2.5, 40, 4, Math.PI,0,true);
 ctx.stroke();
 ctx.closePath;
 ctx.restore();

}

// 写法在外部js中无法调用
 function  draw(){
     var ctx = document.getElementById('myCanvas').getContext('2d');
     ctx.translate(50,50);
     drawTop(ctx,"rgb(255,123,345)");
     drawGrip(ctx);

 }




//  draw = function(){
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//      ctx.translate(50,50);
//      drawTop(ctx,"rgb(255,123,345)");
//      drawGrip(ctx);

//  }


class  Rectangle{

     constructor(x,y){
         this.x = x;
         this.y = y;
     }
     static distance(a,b){

    }
}

// 匿名类
let rectangle = class{
  // 静态方法  不需要实例化 可以调用
  static distance(a,b){

  }

}

//console.log(Rectangle.distance(a,));

// 用于窗口或框架的 Location 对象 包含了当url信息  hostname获取主机名
var thisURL = window.location.hostname;
var thisdcsid = undefined;
// navation对象 浏览器的名称 版本号 操作平台等
var ua = window.navigator.userAgent;
var appNmae = window.navigator.appName;
var isAndrod  = ua.indexOf('Android') > -1

confingWT = {
   mibileFlag:false,
   fpc:parseDomain(thisURL),
   domain:"www.gx.10086.cn/zt-webtrends",
   dscid:"dcscpvjnz00000gccqfofusl2_4t9k",
   sdc_server:[
       function (arg,dcs) {
         var dcsid =  "dcscpvjnz00000gccqfofusl2_4t9k";
         thisdcsid = dcsid
         try {
             // 当浏览器载入html文档时,就变成一个document对象,是html的根节点
             // getElementById 返回对拥有指定 id 的第一个对象的引用。
             if(document.getElementById("")){
                 var getid = document.getElementById("").value;
             }
         } catch (error) {
             
         }


       }

   ],


};


// 内置number型 内置Math 内置date
var  bigNum = Number.MAX_SAFE_INTEGER;
var math = Math.PI;
var date = new Date("2020,5,21");
console.log(date.setDate);
date.getTime;
date.getDay;

//  函数嵌套 闭包
var pet = function(name){
  var getName = function(){
    
    return name;
  }
  return getName;
};

var myPet = pet("你好");
console.log(myPet());

var jsonStr  = {
    appid:"",
    sign:"",
    action:""
};
if(window.JSON){
    console.log(JSON.stringify(jsonStr));
    console.log(JSON.parse(JSON.stringify(jsonStr)))
}

let myMap = new Map();
let keyObj = {};
let func1 = function () {
    
};
let string = 'a string';

// 添加键
myMap.set(string,"你好");
myMap.set(keyObj,"对象");
myMap.set(func1,"函数");
console.log(myMap.size);
console.log(myMap.get(keyObj))
for (let key of myMap.keys()) {
    console.log(key);
    
}

for (let value of myMap.values()) {
    console.log(value);
}

for (let [key,value] of myMap.entries()) {
    console.log([key,value]);
}

myMap.forEach(function(value,key){
    console.log([key,value]);
})
let array = [["key1","数组1"],["key2","数组2"]];
let map = new Map(array);
console.log(map.get("key1"));
console.log(Array.from(map));
// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ]);

  let merged = new Map([...first, ...second]);
  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three
//    Promise对象用于一个异步操作完成或者失败,包括显示结果值
 function asynRequestURL(url){
  return new Promise((resolve,reject) => {
     resolve("成功");
     reject("失败")

  }) ;
}


let myFirstPromise = new Promise( function (resolve,reject) {
   setTimeout(() => {
       resolve("成功");
   }, 1);

});

myFirstPromise.then(function(succeedMeage){
    console.log("yes" + succeedMeage);
    
});

myFirstPromise.catch((crash) =>{
//   null 和 undefined的区别
// 当检测 null 或 undefined 时，注意相等（==）与全等（===）两个操作符的区别
typeof null        // "object" (因为一些以前的原因而不是'null')
typeof undefined   // "undefined"
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true

});




 