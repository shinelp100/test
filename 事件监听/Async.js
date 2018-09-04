function AsyncFn(...arr) {
    this.funArr = [...arr];

    this.next = function () {
        const fn = this.funArr.shift();
        (typeof fn == 'function') && fn();
    };

    this.run = function(){
        this.next();
    }
}

function fn1() {
    console.log('Function 1');
    asyncFun.next();
}

function fn2() {
    setTimeout(() => {
        console.log('Function 2');
        asyncFun.next();
    }, 1500)
}

function fn3() {
    console.log('Function 3');
    asyncFun.next();
}
var asyncFun = new AsyncFn(fn1, fn2, fn3);
asyncFun.run();
// console.log(asyncFun.run());