/*
    String构造器
    自己回忆：split substring 正则  
    看看自己的基础 多差啊
    String构造函数的方法：
    还是按照不同的需求来划分方法：
    创建： fromCharCode(传入unicode序列的返回字符串) fromCodePoint(es6同左 区别注意)
    获取：raw(一个模板字符串的标签函数)

    String.prototype所有的方法：
    截止ES6，共有31个标准的API方法
    字符串属性不可编辑：改变它就报错
    writable enumerable configurable :false
    共有两个属性：
        String.prototype.constructor 指向构造器(String())
        String.prototype.length 表示字符串长度
    
    字符串原型方法分为两种，一种是html无关的方法，一种是html有关的方法
    虽然方法如何厉害，但是不注意强大到修改原字符串
    ！HTML无关的方法：
    常用的方法有，charAt、charCodeAt、concat、indexOf、lastIndexOf、localeCompare、match、replace、
    search、slice、split、substr、substring、toLocaleLowerCase、toLocaleUpperCase、toLowerCase、
    toString、toUpperCase、trim、valueof 等ES5支持的，
    以及 codePointAt、contains、endsWith、normalize、repeat、startsWith 等ES6支持的，
    还包括 quote、toSource、trimLeft、trimRight 等非标准的。
    若没有特别说明，默认该方法兼容所有目前主流浏览器。

    获取：charAt(返回字符串中指定位置的字符) charCodeAt(返回指定索引处字符的 Unicode 数值) 
         indexOf lastIndexOf(获取字符的下标) 
         search
         includes(返回布尔值的 判断一个字符串是否属于另一个字符)
    判断：includes endsWith(返回布尔值的 它用来判断一个字符串是否是原字符串的结尾) 
          startsWith(返回布尔值的 它用来判断当前字符串是否是以给定字符串开始的)
    拼接：concat(性能表现不佳,强烈推荐使用赋值操作符（+或+=）) repeat(返回重复原字符串多次的新字符串)
    比较：localeCompare(用来比较字符串 该方法实现依赖具体的本地实现，不同的语言下可能有不同的返回)
    正则相关：match test exec replace
    替换：replace 
    截取：slice substr(可能会被遗弃) substring 
    转数组：split 
    大小写：toLowerCase toUpperCase
    清除首尾空格：trim 

    toString valueOf 返回字符串本身

    ！ HTML有关的：
    常用的方法有 anchor，link

    anchor() 方法创建一个锚标签。
    name 指定被创建的a标签的name属性，使用该方法创建的锚点，将会成为 document.anchors 数组的元素。

    link() 方法同样创建一个a标签。
    url 指定被创建的a标签的href属性，如果url中包含特殊字符，将自动进行编码。例如 " 会被转义为 &\quot。
     使用该方法创建的a标签，将会成为 document.links 数组中的元素。

    区别：
    substr substring 
    都是两个参数，作用基本相同，
    两者第一个参数含义相同，但用法不同,前者可为负数，后者值为负数或者非整数时将隐式转换为0。
    前者第二个参数表示截取字符串的长度，后者第二个参数表示截取字符串的下标
    同时substring第一个参数大于第二个参数时，执行结果同位置调换后的结果。

    search方法与indexOf方法作用基本一致，都是查询到了就返回子串第一次出现的下标，否则返回-1，
    唯一的区别就在于search默认会将子串转化为正则表达式形式，而indexOf不做此处理，也不能处理正则。

*/

/*
const str = "12 345 6789 12 3 45678";
console.log(str.slice(3));
console.log(str.slice(3, -3));
slice() 提取的新字符串包括beginIndex但不包括 endIndex
*/

/*
 字符串替换场景
 "abcedfghijk" => dfg -> pppp 
function replaceString (olds, news, fulls) {
    // const idx =  fulls.search(/dfg/g);
    // const sBefore = fulls.slice(0, idx);
    // const sAfter = fulls.slice(idx+1);
    // const s = sBefore + news + sAfter;
    // console.log(s);

    const idx =  fulls.search(/dfg/g);
    return fulls.slice(0, idx) + news + fulls.slice(idx + 1)
}
const str = "abcedfghijk";
const o = "dfg";
const n = "pppp";
console.log(replaceString(o, n, str));
*/

/*
用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
有2个参数 你知道吗？还有一个limit
const str = "12 345 6789 1";
console.log(str.split()); [ '12 345 6789 1' ] 什么都不传 就是一个数组元素
console.log(str.split("")); ['1', '2', ' ', '3','4', '5', ' ', '6','7', '8', '9', ' ','1'] 
console.log(str.split(" ")); [ '12', '345', '6789', '1' ]

const str = "12 34 56 78";
console.log(str.split(" ", 2)); [ '12', '34' ] 限制返回了2个元素
一个整数，限定返回的分割片段数量

const str = "12 34 56 78";
console.log(str.split("", 3)); 第一个参数只有1个的时候可以不传 但是有2个的时候就必须传第一个参数
console.log(str.split());
*/












