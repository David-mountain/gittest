const arr = [
    { level: 1 },
    { level: 2 },
    { level: 3 },
    { level: 1 }
]
/*
[
    {
        level: 1,
        sub: [
            {
                level: 2,
                sub: [
                    { level: 3 }
                ]
            }
        ],
    },
    {
        level: 1
    }
]
*/

/**
 * transTree
 * 平层->树形
 * @param {Array}
 * @return {Array}
 */
/*
通过判断 123来确定它的层级 
如果是1 则是加入平级对象 
如果是其他
    如果是2 加入属性sub 又是一个数组 值就是这个
    如果更多 递归
*/

var transTree2 = function (arr) {
    var toStr = Object.prototype.toString;
    var array = "[object Array]";
    var result = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        var level = item.level;
        if (level === 1) {
            result.push()
        }
    }
}
/**
 * ds处理
 * 
 */

function transTree(list, attr) {
    var result = [];
    list.reduce(function (res, cur, index, arr) {
        var prev = res[res.length - 1];
        if (prev && cur[attr] > prev[attr]) {
            if (!prev.sub) prev.sub = [];
            prev.sub.push(cur);
            if (index === arr.length - 1) prev.sub = transTree(prev.sub, attr);
        } else {
            res.push(cur);
            if (prev && prev.sub) prev.sub = transTree(prev.sub, attr);
        }
        return res;
    }, result);
    return result;
}

var newArr1 = transTree(arr, 'level');
console.log(newArr1);
// 递归






