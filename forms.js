const form = document.querySelector('.forms')
const email=document.querySelector('#exampleInputEmail1')
const password =document.querySelector('#exampleInputPassword1')

function dothis (e){
    e.preventDefault();
  const mail_value=email.value;
   const password_value=password.value;
//     localStorage.setItem('mail',mail_value)
//     localStorage.setItem('password',password_value)
// 
  
}
myobject={
    name:email.value,
    password:password.value
};
let converted = JSON.stringify(myobject);
localStorage.setItem("myobject",converted);
let unconverted =JSON.parse(localStorage.getItem("myobject"));
console.log(unconverted);