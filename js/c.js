/*
* 符合AMD规范
* */
define(function(){
    function reverseStr(str){
        return str.split('').reverse().join('');
    }
    function test2(){
        alert('test shim2');
    }
    function test3(){
        alert('test shim3');
    }

    return c = {
        reverseStr:reverseStr,
        test2:test2,
        test3:test3
    };
});
