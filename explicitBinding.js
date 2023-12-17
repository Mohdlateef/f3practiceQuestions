// using call method we can bind the this keyword to the obj
let obj={
    a:10,
    b:30
};
function explicit(a,b){
    
    console.log(this.a);
   console.log(a);
}
explicit.call(obj,10,20);
// now use apply
let obj1={
    r:10,
    s:30
};
let arr=[1,2,3,4]
function explicitapp(a,b,c,d){
    console.log(a+b+c);
    console.log(this.s);
    
}
explicitapp(...arr)
explicitapp.apply(obj1,arr);
// bind method
let obj2={
    p:10,
    q:55
};
let arr1=[5,6,7,8]
function explicitbind(a,b,c,d){
    console.log(a+b+c);
    console.log(this.q);
    
}
let bindfun=explicitbind.bind(obj2,...arr1);
bindfun();
// convert object into arrays
let obj_to_conver={
    a:10,
    b:35,
    c:"umer",

}
console.log("before",obj_to_conver);
const arrayformed=Object.entries(obj_to_conver);
console.log(arrayformed);
// now convert array into object 
let formobject=Object.fromEntries(arrayformed);
console.log(formobject);



