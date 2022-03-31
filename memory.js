// array 
// Array(8) new Array(8)
/*
function Array(){
     如果this不是Array的实例，那就重新new一个实例
    if(!(this instanceof arguments.callee)){
        return new arguments.callee();
    }
}
*/

// const arr = new Array();
// const arr = new Array(2, 3);

// const arr = new Array("3"); [ '3' ]

// const arr = new Array(3);
// console.log(arr);


// Array.of 的使用 与之前的Array构造函数的区别 
/*
Array.from 
准确来说就是从一个类似数组的可迭代对象创建一个新的数组实例
只要一个对象有迭代器，Array.from就能把它变成一个数组（当然，是返回新的数组，不改变原对象）
*/
/*
var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
var result = Array.from(obj, function(value, index){
  console.log(value, index, this, arguments.length);
  return value.repeat(3); //必须指定返回值，否则返回undefined
}, obj);
console.log(result);
a 0 { '0': 'a', '1': 'b', '2': 'c', length: 3 } 2
b 1 { '0': 'a', '1': 'b', '2': 'c', length: 3 } 2
c 2 { '0': 'a', '1': 'b', '2': 'c', length: 3 } 2
[ 'aaa', 'bbb', 'ccc' ]

这里有个repeat方法，字符串的所有方法熟悉吗？
*/

// 判断一个数组 
/*
var a = [];
console.log(a instanceof Array);
console.log(a.constructor === Array);
console.log(Array.prototype.isPrototypeOf(a));
console.log(Object.getPrototypeOf(a) === Array.prototype);
console.log(Object.prototype.toString.apply(a) === '[object Array]');
console.log(Array.isArray(a));

Array.isArray的polyfill
if (!Array.isArray){
    Array.isArray = function(arg){
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
*/

// 值得一说的是，Array.prototype本身就是一个数组。
/*
数组原型方法主要分三种：
一是 改变自身值的
二是 不会改变自身值的
三是 遍历方法 

由于 Array.prototype 的某些属性被设置为[[DontEnum]]，因此不能用一般的方法进行遍历，我们可以通过如下方式获取 Array.prototype 的所有方法：
Object.getOwnPropertyNames(Array.prototype);
33个
["length", "constructor", "toString", "toLocaleString", "join", "pop", "push", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach", "some", "every", 
"map", "indexOf", "lastIndexOf", "reduce", "reduceRight", "copyWithin", "find", "findIndex", "fill", "includes", "entries", "keys", "concat"

一是 改变自身值的
基于ES6，改变自身值的方法一共有9个，分别为pop、push、reverse、shift、sort、splice、unshift，以及两个ES6新增的方法copyWithin 和 fill。
对于能改变自身值的数组方法，日常开发中需要特别注意，尽量避免在循环遍历中去改变原数组的项

sort 
String.localeCompare 搭配这个可以实现拼音字母排序

二是 不会改变自身值的
基于ES7，不会改变自身的方法一共有9个，分别为concat、join、slice、toString、toLocateString、indexOf、lastIndexOf、未标准的toSource以及ES7新增的方法includes。
浅拷贝 concat slice 
includes includes能够发现NaN indexOf不能

三是 遍历方法
基于ES6，不会改变自身的方法一共有12个，分别为forEach、every、some、filter、map、reduce、reduceRight 以及ES6新增的方法entries、find、findIndex、keys、values。

*/
/*
var a = true;
var b = true;
var result = (a || b) || c;
console.log(result); true 
*/
/*
发现问题 各种途径 解决问题 
html css js(string array object的api必须烂熟于心) es6+ 正则 工具函数封装->一些工具库了 
dom 可以看一些库了 
函数式编程 
前面这些都是随手就写的基础功！！！
原生js开发的一个小demo项目 逐步体会到js基础好 框架就是很快可以上手的
babel.js webpack 
vue react 基础+项目+UI框架 源码面试
node 
TS
这些都是基础 看了别人的面试题知道还有很多编程语言之外的东西

html
之前看的这么久 没有总结忘记了都
iframe 涉及到微前端 
doctype
meta 
input 
button 
行内元素
块级元素
替换元素 非替换元素
title id class 共有属性

字符实体
标签写法
有些元素是有添加默认样式的 
字符编码
img的一些属性 作用
<!DOCTYPE>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <h2>h2</h2>
</body>
</html>
SEO优化 h标签
a 锚点 相关使用 链接到文档 外部文件
当链接到资源或者流媒体 使用什么文本提示是有优化点的
当你是链接到要下载的资源时而不是浏览器打开时，可使用download属性来提供一个默认的文件保存名
a 还可以连接到邮箱 
link 引入字体图标 和 样式 
html lang属性 作用
结构化 为什么？
多多练习，多多回忆笔记，以后每天早上起来读读笔记，前期读读笔记，后期就是使用笔写，记死

header
nav 
main(里面有article section div)  aside侧边栏(经常嵌在main里) 
footer

img vedio 这样的元素有时也被称之为替换元素，因为这样的元素的内容和尺寸由外部资源(一个图片或者视频文件)所定义，而不是元素自身
alt 属性作用？
figure figcaption 为图片提供一个语义容器，在标题和图片之间建立清晰的关联 
<figure>
  <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
     alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
     width="400"
     height="341">
  <figcaption>曼彻斯特大学博物馆展出的一只霸王龙的化石</figcaption>
</figure>
这个 <figcaption> 元素 告诉浏览器和其他辅助的技术工具这段说明文字描述了 <figure> 元素的内容.

*/

/*
    Array
        join是否改变原数组？不会改变 并且传入不同的型号返回值是不一样的 看了这里又忘记了！！！你看看这就是效果
        这个过程还要注意浅引用 slice concat等等都是 这些使用的时候一定要注意 如果元素有引用类型的时候 

    Object
    String
*/
// const obj = {
//     a: "aaa"
// }
// const arr = [1,2,3]
// let result = arr.join(",") 
// console.log(arr); // [1,2,3]
// console.log(result); // "1,2,3"
// Object.assign(obj, { b: result });
// console.log(obj); // { a: 'aaa', b: '1,2,3' }
// const arr2 = {
//     c: "ccc",
//     d: "ddd"
// }
// Object.assign(obj, arr2);
// console.log(obj); { a: 'aaa', b: '1,2,3', c: 'ccc', d: 'ddd' }

// const arr = [
//     1,
//     "abc",
//     true,
//     { a: "aaa", b: "bbb" },
//     [2,3,4]
// ]
// const newArr = JSON.stringify(arr);
// console.log(newArr);
// console.log(JSON.parse(newArr));
// 普通数组可以使用 concat  var newArr = [].concat(arr)  slice 
// 似乎必须是深拷贝啊 

// 回忆方法：push pop shift unshift reverse join filter map reduce concat sort splice 
// 增加(首 尾 中间位置) push unshift splice 
// 删除 pop 
// 修改 splice 
// 排序 sort
// 拼接 concat push 
// 转字符串 join toString
// 截取 slice 
// 查找 indexOf(返回下标的查找) lastIndexOf includes(返回布尔值的查找) find(返回满足条件函数的新数组的查找) findIndex()
// 神龙摆尾 reverse
// 筛选 filter(返回新数组的筛选) some(返回布尔值的数组筛选) every(返回布尔值的数组筛选)
// 映射 map 
// 归纳 reduce reduceRight
// 遍历 forEach
// 生成 fill
// 多维->一维 flat
// 类数组->数组 Array.from
// 判断 Array.isArray

// JavaScript 数组的toString()与toLocaleString()方法的区别??
// toString返回一个字符串，和原型上的有什么区别 ?? fill(填充) entries?如何使用的 keys() 这几个看看
// Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素
// 当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
// 数组的toString是把每个数组的元素以，分割的字符串返回的
// 对象的toString返回的是特定的类型[object  类型]；

// var arr = [1,2,3];
// console.log(arr.toString()); "1,2,3"
// function Fn () {}
// var f = new Fn();
// console.log(f.toString()); "[object Object]"

// 判断数组类型 利用call、apply
// var arr = [1,2,3];
// console.log(Object.prototype.toString.call(arr)); "[object Array]"

// console.log("1"); 白色字符串
// console.log(1);  黄色数字

// const arr = ["a","b","c"]
// console.log(arr.toString());
// if (arr.toString() === 'a,b,c') {
//     console.log("======")
// }
/*
array array -> object DS题 
第一次
var keysArr = ["a", "b", "c"];
var valuesArr = ["aaa", "bbb", "ccc"];
var obj = {
    "a": "aaa",
    "b": "bbb",
    "c": "ccc"
}
const obj = {};
keysArr.forEach(key => {
    valuesArr.forEach(value => {
        obj[key] = value;
    })
})
console.log(obj);
*/
/* 
    交集
    两个数组取交集
    多个数组取交集

    应该先去重或者取的时候去判断也可以 
    取交集还是可以理解成筛选 筛选出是别人也有的元素 使用filter
    最后使用A B谁为基准都是可以的
*/
/*
const arr1 = [1,2,3,4,5,6,5,2];
const arr2 = [2,3,8,9,4,5,2];
const result = [...new Set(arr1)].filter(item => {
    return [...new Set(arr2)].includes(item);
    我这里思路有问题 必须两个都要去重才行 否则也会被加入的
})
const result = [...new Set(arr1)].filter(item => [...new Set(arr2).includes(item)])
console.log(result); // [2,3,4]
博客使用的Set 的 has 
const intersection = (a, b) => {
    const s = new Set(b);
    return [...new Set(a)].filter(x => s.has(x));
};
A B 两个数组 从哪个数组为基础去判断 都是可以的
也就是 A包含B的一个元素 返回true 
或者 B包含是A的一个元素 返回true 
*/
// 多个数组交集
// 思路：先是遍历拿到每一个元素，然后再次遍历，把这个元素和这次遍历的元素都是数组进行对比，判断是否存在，使用一个锁记住
// const arr1 = [1, 2, 3, 4,11]
// const arr2 = [3, 4, 6,11]
// const arr3 = [4, 5,11]
// const arr4 = [4, 5, 8, 9,11]
// const arr5 = [4, 5, 2, 7,11]
// const arr6 = [4, 5, 3,11]
// const arr7 = [4, 5, 0,11]
// 方案一
function newArr () {
    const len = arguments.length;
    const result = [];
    let lists = null;

    if (len ===  1) {
        result = arguments[0];
    } else {
        lists = arguments;
    }

    for (let i = 0; i < lists.length; i++) {
        for (let j = 0; j < lists[i].length; j++) {
            const value = lists[i][j];
            let existAll = true;
            if (result.indexOf(value) === -1) {
                for (let k = 0; k < lists.length; k++) {
                    if (lists[k].indexOf(value) === -1) {
                        existAll = false;
                        break;
                    }
                }

                if (existAll) {
                    result.push(value);
                }
            }
        }
    }
    return result;
}
// const result = newArr(arr1,arr2,arr3);
// console.log(result);
// 方案二 二维数组
// let arr = [
//     [1, 2, 3, 4, 4],
//     [3, 4, 6],
//     [4, 5],
//     [4, 5, 8, 9],
//     [4, 5, 2, 7],
//     [4, 5, 3],
//     [4, 5, 0],
// ];
// 这里还是需要去重的 第一个数组 我加了个4 就重复了
// const result = arr.reduce((prev, cur) =>{
//     return prev.filter(item => cur.indexOf(item) !== -1)
// })
// arr.reduce((a, b) => a.filter(c => b.includes(c))) // [4] 博客的
// console.log(result);

/* 
    并集
    思路：我第一次成了差集 并集就是两个大家所有总共有的
    那就放进一个数组，去重就可以了啊
*/
// const arr3 = [
//     [1,2,3,4],
//     [2,4,5,7,1],
//     [1,6,9,2]
// ]
// const result = arr3.reduce((prev, cur) => {
//     // return prev.filter(item => !cur.includes(item)) 这个成了差集的
//     return [...new Set(prev.concat(cur))];
// })
// console.log(result);

/*
const arr1 = [1,2,3,4,8];
const arr2 = [2,4,5,7];
const result = function (a, b) {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        result.push(a[i]);
    }
    for (let j = 0; j < b.length; j++) {
        if (!result.includes(b[j])) {
            result.push(b[j]);
        }
    }
    return result;
}
console.log(result(arr1, arr2));
*/

// var kvArray = [
//     {key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}
// ];
// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],
// const result = kvArray.map(item => {
//     const tempObj = {};
//     tempObj["key"] = item["key"]; // item["key"] item[key] 一个是变量 一个是字符串 ！！
//     tempObj["value"] = item["value"];
//     return tempObj;
// })
// console.log(result);

// 实现 add(1)(2)(3)
// 实现n的阶乘 
// 合并两个有序数组
/*
函数柯里化没有搞出来
function add () {
    return Array.prototype.slice.call(arguments).reduce((prev, cur) => prev + cur);
}
function curry (fn) {

    return function () {
        const args = arguments;
        return fn;
    }
}

const curryAdd = curry(add);
curryAdd(1)(2)(3);
*/

/*
客户管理 custManage
    -- 企微客户 qwCustomer 卡这关键词树组件这
    -- 行内客户
    -- 流失客户
客户交接
    -- 离职继承
    -- 在职继承
标签管理
    -- 客户标签
活码管理
    -- 员工活码
客户运营
    -- 客户群发
企微群运营
    -- 智能群活吗
    -- 智能群推广
    -- 企微客户群
    -- 客户群群发
朋友圈运营
    -- 创建朋友圈
    -- 历史朋友圈
内容管理
    -- 话术
    欢迎语
    素材
    咨询
    微助手
    活动
会话存档
    按员工检索
    按客户检索
关键词
    关键词库
    统计分析
敏感行为
    敏感词库
    统计分析
目标管理
    我的任务
    任务创建
数据中心
    企微跟进
    客户来源
应用管理
    企微应用
    应用管理
    应用页面
    应用推荐
系统管理
    用户管理
    组织架构
    菜单管理
    角色管理
    岗位管理
    企业管理
    条线管理
    定时任务
    通知公告
    提醒设置
    同步管理
    任务监控
日志管理
    操作日志
    登录日志
参数管理
    字典管理
    系统参数
    业务参数
    


*/






















