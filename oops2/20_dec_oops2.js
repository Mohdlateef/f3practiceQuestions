// function bankacc(name,branch,bank,accountBalnce){
//     this.name=name;
//     this.branch=branch;
//     this.bank=bank;
//     this.accountBalnce=accountBalnce;
// }
// bankacc.prototype.addmoney=function(amount)
// {
//     this.accountBalnce += amount;
// }
// bankacc.prototype.withdrawMoney=function(amount)
// {
//     this.accountBalnce -= amount;
// }
// let user=new bankacc("umer","chadoora","hdfc",1800)
// console.log(user.name);
// user.addmoney(700);
// console.log(user.accountBalnce);
// user.withdrawMoney(700);
// console.log(user.accountBalnce);
// ****inharitence**
function bankacc(name,branch,bank,accountBalnce){
    this.name=name;
    this.branch=branch;
    this.bank=bank;
    this.accountBalnce=accountBalnce;
}
bankacc.prototype.addmoney=function(amount)
{
    this.accountBalnce += amount;
}
bankacc.prototype.withdrawMoney=function(amount)
{
    this.accountBalnce -= amount;
}
// to access the protype of bankacc
saving.prototype.__proto__=bankacc.prototype;
function saving(name,branch,bank, accountBalnce){
    bankacc.call(this,name,branch,bank,accountBalnce);
    this.limit=8000;
} 

let user=new saving("umer","abc","def" ,40000)
user.addmoney(500);
console.log(user.accountBalnce)
function ccacount(name,branch,bank, accountBalnce){
    bankacc.call(this,name,branch,bank,accountBalnce);
    this.limit="no limit";
}
let user2=new ccacount("aj","js","jdj",1000000);
console.log(user2.limit);