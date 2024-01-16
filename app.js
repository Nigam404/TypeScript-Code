var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
// const numsResult:number[]=[];
// const stringResult:string[]=[];
//or
var numsResult = [];
var stringResult = [];
var addbtn = document.getElementById("btn");
addbtn.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2); //passing number-allowed
    // console.log(result);
    numsResult.push(result);
    var result2 = add(num1, num2);
    // console.log(add(num1,num2));//passing string- allowed
    stringResult.push(result2);
    // console.log(add(true,false));//passing boolean- not allowed
    printResult({ val: result, timestamp: new Date() });
    console.log(numsResult, stringResult);
});
//promises
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("working fine");
    }, 1000);
});
promise1.then(function (result) {
    console.log(result);
});
