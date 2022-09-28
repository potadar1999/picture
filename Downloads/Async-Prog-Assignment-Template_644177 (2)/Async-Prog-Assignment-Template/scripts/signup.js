// var Array=JSON.parse(localStorage.getItem("products"))||[]
var details
function getData(){
 event.preventDefault()
 document.getElementById("form")

 let name=form.name.value;
 let contact=form.contact.value;
 let email=form.email.value;
 let password=form.password.value;

 details= new detailsData(name,contact,email,password)
//  Array.push(details)
 localStorage.setItem("products",JSON.stringify(details))
 window.location.reload()

}


function detailsData(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p;
}