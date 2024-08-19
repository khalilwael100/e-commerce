let userName = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let submit = document.getElementById('submit');
let spanName = document.getElementById('span-name');
let spanEmail = document.getElementById('span-email');
let spanPass = document.getElementById('span-pass');
let eyeSlash = document.getElementById('eye-slash');
let eye = document.getElementById('eye');


let nameRe = /[a-zA-Z]_?[a-zA-Z]?([0-9])?/i;
let nameValue;

userName.onkeyup = function(){
    nameValue = userName.value;
}


let emailRe = /\w+\d?@(gmail|yahoo).(com|net|info|org)/i;
let emailValue;

email.onkeyup = function(){
    emailValue = email.value;
}


let passValue;

pass.onkeyup = function(){
    passValue = pass.value.length;
}


submit.onclick = function(e){
    if(!nameValue.match(nameRe) || nameValue.match(/[^a-zA-Z0-9_]/)){
        spanName.style.display = 'block'
        e.preventDefault();
        setTimeout(function(){spanName.style.display = 'none'}, 3000);
    }

    if(!emailValue.match(emailRe)){
        spanEmail.style.display = 'block'
        e.preventDefault();
        setTimeout(function(){spanEmail.style.display = 'none'}, 3000);
    }

    if(passValue <= 8){
        spanPass.style.display = 'block'
        e.preventDefault();
        setTimeout(function(){spanPass.style.display = 'none'}, 3000);
    }
}


eyeSlash.onclick = function(){
    eyeSlash.style.display = 'none';
    eye.style.display = 'block';
    pass.type = 'text'
};

eye.onclick = function(){
    eyeSlash.style.display = 'block';
    eye.style.display = 'none';
    pass.type = 'password'
}






