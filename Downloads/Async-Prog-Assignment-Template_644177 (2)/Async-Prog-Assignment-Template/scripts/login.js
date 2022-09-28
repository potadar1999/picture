var details=JSON.parse(localStorage.getItem("products"))
var chota=[]
function mumu(){
    event.preventDefault()

    document.getElementById("logiForm")

let email=logiForm.email.value;
let password=logiForm.password.value;

var data=new log(email,password)
// console.log(data)
chota.push(data)

// if(details.email!==data.Email){
//     alert="Wrong Email Id"
// }
// if(details.password!=chota.password){
//     alert="Wrong Password"
// }

    alert="LOGIN SUCCESSFULLY"


}
// mumu()

function log(e,p){
this.email=e;
this.password=p;
}
  