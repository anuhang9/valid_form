let emailValidation = document.getElementById('emailValidation');
let emailInput = document.getElementById('email');
let validRegex = /^[a-z0-9]{2,15}@[a-z]{2,10}\.[a-z]{2,7}$/;


emailInput.addEventListener('input', function(){
    if(validRegex.test(emailInput.value)){
        emailValidation.innerText = null;
    }
    else{
        emailValidation.innerHTML = 'email not valid'
    }
})