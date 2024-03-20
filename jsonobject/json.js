// console.log("abc");
// let obj={
//     a:10,
//     b:39,
//     c:40,
// }
// console.log(obj)
// let d=JSON.stringify(obj);
// console.log(typeof(d))
// console.log(d);
// console.log(JSON.parse(d));
// console.log(obj)
// let arr=[1,2,2,3]
// let arr_str=JSON.stringify(arr)
// console.log(typeof(arr_str))
// console.log(arr_str[0]);
// console.log(arr[0]);
// let str_arr=JSON.parse(arr_str);
// console.log(str_arr[0]);
// ********* api call
// let url="https://api.publicapis.org/entries";

// async  function f1(){
//     let response=await fetch(url);
//     let data=await response.json();
//     console.log(data.entries[113].Link);
//     let link=data.entries[113].Link;
// let response2=await fetch(url);
// console.log(response2);
// }
// f1();
// let Banckacc=(bal,type,branch)=>{
//     let obj1={

//     }
//     obj1.bal=bal;
//     obj1.type=type;
//     obj1.branch=branch;
//     obj1.totalam=(am)=>{
//    obj1.bal+=am;
//     }
//     return obj1;
// }
// let cos1= Banckacc(100,"saving","kanir");
// cos1.totalam(300);
// console.log(cos1.bal);
// function Fun1(bal,type,branch){
//    this.bal=bal;
//    this.type=type,
//    this.branch=branch
// }
// Fun1.prototype.addmoney=function(money){
//     this.bal+=money;
// }
// const user1=new Fun1(100,"saving","srig");
// console.log(user1.bal);
// user1.addmoney(200);
// console.log(user1.bal);
// function createpro(delay,conition,resolve,error)
// {
//     return new Promise((res,rej)=>{
//         if(conition){
//             setTimeout(()=>{
//                 res(resolve);
//             },delay)}
//             else{
//                 setTimeout(()=>{
//                     rej(error);
//                 },delay)
//             }
//         }
//     )

// }
// let p1=createpro(3000,false,"p1 resove","error")
// p1.then((resolve)=>{
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error)
// })
let p1=new Promise((res,rej)=>{
let conition=false;
if(conition){
setTimeout(() => {
    res("workproperly")
}, 3000);

}
else{
    setTimeout(()=>{
        rej("notworking")
    },4000)
}
}
)

p1.then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})