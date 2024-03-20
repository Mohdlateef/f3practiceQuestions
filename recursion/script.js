let fact=1;
let n=10;
let i=1;
function recursion(n){
    console.log("a"); 
    if(n==0)
    {
        return;
    }
    else{
       
        console.log(i);
        i++;
        recursion(n-1);
        console.log(n)
}
// console.log("abc");
}
// 

recursion(6);
let str="abc"
let str2="def"
str2 =str2.concat(str);
console.log(str2);
let str4="abc,def,ghi,lmbl,pqrs"
let arr=str4.split(",");
console.log(arr);
console.log(arr[0]);
let strarray=[];
let arrstr1=""

for(let i=0;i<str4.length;i++)
{ 
    if(str4.charAt(i)===',')
    {
        strarray.push(arrstr1);
        arrstr1="";
    }
    else
    {arrstr1=arrstr1+str4.charAt(i)}

}
strarray.push(arrstr1);
console.log(strarray);
let joinstr=arr.join("");
console.log(joinstr);
const arr3=[111,121,1113]
console.log(arr3);
arr3.sort();
console.log(arr3) 
let f=function(){
    console.log("abc");
}
f();
// console.log(this);
()=> console.log("gghh");

// arrow();
// spread oprator
let sparr=[1,3,4,5]
let arrstore=[1,...sparr,5]
console.log(arrstore);
let spstring="umer";
let x=[...spstring];
console.log(x);
let user={
    a:10,
    b:30,
    c:40
}
// let spob=[...user];

console.log(...spstring);
