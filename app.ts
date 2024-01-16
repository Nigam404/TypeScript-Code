const num1Element=document.getElementById("num1") as HTMLInputElement;
const num2Element=document.getElementById("num2") as HTMLInputElement;

//type alias
//we can create our own alias as belows
type NumOrString = string | number;
//so we can replace string | number with NumOrString in our code.
//we can create as many alias we want.
type Result={val:number;timestamp:Date}

//OR

//defining type of an object
interface ResultObj{
    val:number;
    timestamp:Date
}

function add(num1:NumOrString,num2:NumOrString)
{
    if(typeof num1==='number' && typeof num2==='number')
    {
        return num1+num2;
    }
    if(typeof num1==='string' && typeof num2==='string')
    {
        return num1+' '+num2;
    }
}


function printResult(resultObj:ResultObj){
    console.log(resultObj.val);
}

// const numsResult:number[]=[];
// const stringResult:string[]=[];

//or

const numsResult:Array<number>=[];
const stringResult:Array<string>=[];

const addbtn=document.getElementById("btn")!;
addbtn.addEventListener('click',()=>
{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1,+num2); //passing number-allowed
    // console.log(result);
    numsResult.push(result as number);
    const result2=add(num1,num2);
    // console.log(add(num1,num2));//passing string- allowed
    stringResult.push(result2 as string);
    // console.log(add(true,false));//passing boolean- not allowed
    printResult({val:result as number,timestamp:new Date()}); 
    console.log(numsResult,stringResult);

})

//promises
const promise1=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("working fine");
    },1000);
});

promise1.then((result)=>{
    console.log(result.split('w'));
})


