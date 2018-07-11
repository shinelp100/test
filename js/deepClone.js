/*
* 1、类型判断对于拷贝的类型是Array或是Object
* 2、对于不同类型：array定义[],对于Object类型{} 其他类型直接返回
* 3、遍历赋值
* 4、递归调用实现嵌套的拷贝
*
* */
function getType(data){
    var toString = Object.prototype.toString;
    var type = {
        "[object Array]":'array',
        "[object Boolean]":'boolean',
        "[object Function]":'function',
        "[object Object]":'object',
        "[object String]":'string',
        "[object Number]":'number',
        "[object Undefined]":'undefined',
        "[object Null]":'null',
        "[object Date]":'date',
        "[object RegExp]":'regExp'
    };
    if(data instanceof Element){
        return 'element';
    }
    return type[toString.call(data)];
}


function deepClone(data){
    var type = getType(data),
    result;
    if(type=="array"){
        result = [];
    } else if(type == "object"){
        result = {};
    } else {
        return data;
    }
    if(type == "array"){
        for(var i=0;i<data.length;i++){
            result[i] = deepClone(data[i]);//递归调用 拷贝更深层对象或是数组
        }
    } else if(type == "object"){
        for(var key in data){
            result[key] = deepClone(data[key]);
        }
    }
    return result;
}