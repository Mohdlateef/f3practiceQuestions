// let obj={
//     a:"umer",
// }
// console.log(obj.__proto__);
// function abc(){
//     console.log(this);
// }
// abc();
// console.log(Object.prototype)
// // prototype of array is array
// let arr=[1,2,3,5]
// console.log(arr.__proto__)
// // prototype of string is object
// let str="abc"
// console.log(str.__proto__)
// // rest oprator in js
// function forrest(a, ...test){
//     console.log(test)
//     let sum=0;
//     for(let i=0;i<test.length;i++)
//     {
//          sum=sum+test[i];
//     }
//     console.log(sum);
    
// }
// forrest(1,2 ,3)
// function forthis(){
//     console.log(this);
// }
// forthis();
delete Function.prototype.call;
// now object is call founcton is delete from our browser for 
// for this program
// let obj={
//     a:10,

// }
// function abc(){
//     console.log(this.a)
// }
// abc();
// abc.call(obj);
// now we create the pollyfill of .call method
Function.prototype.call=function(objectcon,...restargs)
{
    // console.log(this);
    objectcon.tempfn=this;
    const result=objectcon.tempfn(...restargs);
    delete objectcon.tempfn;
    return result;
}
let obj=
{a:10,}
function test(a,b,c,d){
    console.log(a+b+c+d);
    console.log(this.a);
}
test.call(obj,1,2,3,4);
test(1,2,3,5);
// create polyfill of apply it takes array of arguments
delete Function.apply.prototype;
Function.prototype.apply=function(objpass,arguments){
    objpass.tempfn=this;
    const result=objpass.tempfn(...arguments);
    delete objpass.tempfn;
    return result;

}
let obj2={
    r:30,
}

function forapply(x,y)
{
    console.log(x,y);
console.log(this.r);
}
forapply.apply(obj2,[]);