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

    let list = document.createElement('ol')
    let namefeild = document.createElement('li')
    namefeild.appendChild(document.createTextNode(mail_value))
    list.appendChild(namefeild)
    let passfeild = document.createElement('li')
    passfeild.appendChild(document.createTextNode(password_value))
    list.appendChild(passfeild)
    form.appendChild(list)
}

const body = document.querySelector('body')
const main = document.querySelector('#maintext')
body.onload = function (e) {
    let details = document.createElement('textarea')
    details.className = "container"
    let h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('registered users '))
    details.append(h1)
    for (let element in localStorage) {
        if (localStorage.getItem(element) !== null) {
            let child = document.createTextNode(localStorage.getItem(element))
            details.appendChild(child)
            main.appendChild(details)
            details.style.width = "20cm"
            details.style.height="15cm"
        }
    }
}