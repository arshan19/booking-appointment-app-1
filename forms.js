const form = document.querySelector('.forms')
const email = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
form.addEventListener('submit', dothis)
function dothis(e) {
  e.preventDefault();
  const mail_value = email.value;
  const password_value = password.value;

  myobject = {
    name: email.value,
    password: password.value
  };
  let converted = JSON.stringify(myobject);
  localStorage.setItem(email.value, converted);
  let unconverted = JSON.parse(localStorage.getItem(email.value));
  console.log(unconverted);

  let list = document.createElement('ul')
  list.className = email.value;
  let namefeild = document.createElement('li')
  namefeild.className = mail_value
  namefeild.appendChild(document.createTextNode(`email is ${mail_value} password is${password_value}`))

  let button = document.createElement('input')
  button.setAttribute("type", "button")
  button.setAttribute("value", 'delete')
  button.id = "button"
  button.className = "button"
  button.appendChild(document.createTextNode('delete'))
  console.log(button);
  let recent = document.getElementById('recent')
  list.appendChild(namefeild)
  recent.appendChild(list)
  list.appendChild(button)
  console.log(list);
}
const btn = document.querySelector('.button')
if (btn !== null) {
  btn.addEventListener('click', (e) => {
    let parent = document.querySelector('#recent')
    let child = btn.parentElement
    parent.removeChild(child)
    let removingitem = localStorage.getItem(child.nodeType(1))
    localStorage.removeItem(removingitem)
  })
}

// const body = document.querySelector('body')
// const main = document.querySelector('#maintext')
// body.onload = function (e) {
//     let details = document.createElement('textarea')
//     details.className = "container"
//     let h1 = document.createElement('h1')
//     h1.appendChild(document.createTextNode('registered users '))
//     details.append(h1)
//     for (let element in localStorage) {
//         if (localStorage.getItem(element) !== null) {
//             let child = document.createTextNode(localStorage.getItem(element))
//             details.appendChild(child)
//             main.appendChild(details)
//             details.style.width = "20cm"
//             details.style.height="15cm"
//         }
//     }
// }