let input = document.getElementById("input");
let add=document.getElementById("add");
let container=document.getElementById("container")

add.addEventListener("click",()=>{
    let text=input.value;
    let list=document.createElement("li");
    let edit=document.createElement("button")
    edit.innerText="edit";
    let deletebtn=document.createElement("button");
    deletebtn.innerText="delete";
    let check=document.createElement("input");
    check.type="checkBox"
let checktext=document.createElement("div");
    check.addEventListener("click",(e)=>{
        if(e.target.checked){
            e.target.innerText="completed"
            // e.target.removeEventListener("click")
        checktext.innerText="completed";
        e.target.removeEventListener("click",(e))
        }
        else{
            checktext.innerText=''
        }
    })
    deletebtn.addEventListener("click",(e)=>{
        e.target.parentElement.remove();
    })
    edit.addEventListener("click",(e)=>{
        e.target.parentElement.setAttribute('contenteditable','true')
    console.log(e.target.parentElement.innerText)

    })
    list.innerText=text;
    list.append(edit,deletebtn,check,checktext)

    container.appendChild(list)
})