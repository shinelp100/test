/*
* 1、在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
* 2、上面例子中的callback函数中发现有$参数，这个就是依赖的jquery模块
* 的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用：
* 3、设置全局的config文件 页面中用到对应的依赖直接用短名即可
* */
require.config({
    baseUrl:"libs",
    shim:{
      d:{
         init:function(){
             return {
                d1:d.d1,
                d2:d.d2,
                d3:d.d3
             }
         }
      }
    },
    paths:{
        "jquery":["jquery-3.3.1.min","https://code.jquery.com/jquery-3.3.1.min"], //如果加载出错会加载备用的资源（但是放在队列的最后面）
        "d":"../js/d"
    }
});
require(["jquery",'../js/c','d'],function($,c,d){
    console.log(d.d1());
    var reverseStr= c.reverseStr('shinelp100');
    c.test2();
    alert(reverseStr);
    alert($('span').html());
});



/*
* AMD(Asynchronous module definition)：异步模块定义
*
* AMD 的诞生，就是为了解决这两个问题：
* 1.实现 js 文件的异步加载，避免网页失去响应
* 2.管理模块之间的依赖性，便于代码的编写和维护
*
*
* CMD(Common module definition)：通用模块定义。
*
*
* AMD、CMD区别：
* 1、对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从2.0开始，也改成了可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
* 2、CMD 推崇依赖就近，AMD 推崇依赖前置
* */
