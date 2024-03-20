

let p1=new Promise((res,rej)=>{
    let condition=true;
    if(condition==true)
    {
        setTimeout(() => {
           res("works fine")
        }, 1000)
    }
    else{
       rej("rejected")
    }
});

// difference b/w async and then and catch
 function  f1() {
    
p1.then((res)=>{
    console.log(res);
    }).catch((err)=>{
    console.log(err);
    })

    console.log("abc")
}
async function f2(){
let res=await p1
console.log(res)
console.log("after response")
}
f2()
// f1()