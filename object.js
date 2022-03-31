/* 
    Object
        assign
        toString
        hasOwnproperty
    想不到了，只想到3个，你看看这个基础，垃圾一批

    defineProperty
    toString
    toLocaleString
    valueOf
    hasOwnproperty
    isPrototype
    propertyIsEnumerable
    es5
    属性描述符 数据描述符
    getPrototypeOf
    create
    getOwnPropertyDescriptor
    getOwnPropertyNames
    preventExtensions
    isExtensible
    isSeal
    freeze
    keys
    values
    entries
    is
    assign
    .getOwnPropertySymbols
    setPrototypeOf

    常用API：
    Object.prototype.toString
    Object.prototype.hasOwnProperty
    Object.getPrototype(obj)
    Object.setPrototype()
    Object.create
    Object.defineProperty
    Object.keys
    Object.assign
    Object.prototype.constructor
*/

// 1. 封装http到原型Vue.prototype 这样容易被篡改
/*
版本一
function Vue () {
    console.log("test vue");
}
function http () {
    console.log("test http");
}
Vue.prototype.$http = http;
var vm = new Vue();
vm.$http();
vm.$http = 1; // 一旦被修改就 无法使用了
vm.$http();
*/

/*
第二版
function Vue () {
    console.log("test vue");
}
function http () {
    console.log("test http");
}
Object.defineProperty(Vue.prototype, "$http", {
    get () {
        return http;
    }
})
var vm = new Vue();
vm.$http();
vm.$http = 1; // 修改无用 下方依然正确执行的
vm.$http();
*/

/*
constructor
function Foo (name) {
    this.name = name;
}
var o = new Foo("ghost");
console.log(o.__proto__);
console.log(Object.getPrototypeOf(o));
console.log(Object.getPrototypeOf(o).constructor === Foo) true
*/

/*
    toString(radix)
    该方法返回的是一个用于描述目标对象的字符串。
    特别地，当目标是一个Number对象时，可以传递一个用于进制数的参数radix，该参数radix，该参数的默认值为10。

    var o = { prop: 1 };
    const r = o.toString();
    console.log(r); "[object Object]"

    var n = new Number(255);
    const r = n.toString();
    console.log(r); "255"
    const r2 = n.toString(16);
    console.log(r2); "ff"
*/

/*
    Object.prototype.toLocaleString()
    该方法的作用与toString()基本相同，只不过它做一些本地化处理。
    该方法会根据当前对象的不同而被重写，例如Date(),Number(),Array(),它们的值都会以本地化的形式输出
    当然，对于包括Object()在内的其他大多数对象来说，该方法与toString()是基本相同的。
    在浏览器环境下，可以通过BOM对象Navigator的language属性（在IE中则是userLanguage）来了解当前所使用的语言
    navigator.language; //'en-US'
*/
/* 
    Object.prototype.valueOf() ???
    该方法返回的是用基本类型所表示的this值
    如果它可以用基本类型表示的话。如果Number对象返回的是它的基本数值，而Date对象返回的是一个时间戳（timestamp）。
    如果无法用基本数据类型表示，该方法会返回this本身。

    // Object
    var o = {};
    typeof o.valueOf(); // 'object'
    o.valueOf() === o; // true
    // Number
    var n = new Number(101);
    typeof n; // 'object'
    typeof n.vauleOf; // 'function'
    typeof n.valueOf(); // 'number'
    n.valueOf() === n; // false
    // Date
    var d = new Date();
    typeof d.valueOf(); // 'number'
    d.valueOf(); // 1503146772355
*/

/*
    Object.prototype.hasOwnProperty(prop)
    该方法仅在目标属性为对象自身属性时返回true,而当该属性是从原型链中继承而来或根本不存在时，返回false。

var o = {prop: 1};
console.log(o.hasOwnProperty("prop")) true 
console.log(o.hasOwnProperty("toString")) false 
console.log(o.hasOwnProperty("formString")) false 
*/

/*
    Object.prototype.isPrototypeOf(obj)

var s = new String("");
console.log(Object.prototype.isPrototypeOf(s)) true 
console.log(String.prototype.isPrototypeOf(s)) true 
console.log(Array.prototype.isPrototypeOf(s)) false 
*/

/*
    Object.prototype.propertyIsEnumerable(prop)
    如果目标属性能在for in循环中被显示出来，该方法就返回true??

*/

学习链接 
https://lxchuan12.gitee.io/js-object-api/#object-prototype-isprototypeof-obj











