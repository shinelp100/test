/*
* 1、找准基准点
* 2、把比基准点大的放右边，比基准点小的放左边
* 3、递归调用方法本身（中间数比值concat到leftArr与rightArr中间）
*
* */

function quickSort(data){
    if(data.length<=1){
        return data;//递归的结束调用
    }
    var len=data.length,pivot = Math.floor(len/2),leftArr=[],rightArr=[];
    for(var i=0;i<len;i++){
        if(data[i]<data[pivot]){
            leftArr.push(data[i]);
        } else if(data[i]>data[pivot]){
            rightArr.push(data[i]);
        }
    }
    //[].concat(1,[23,45])//[1,23,45];
    return quickSort(leftArr).concat(data[pivot],quickSort(rightArr));
}