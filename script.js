const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();

});

function setSuccess(){
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('error');
    
    errorDisplay.innerText= '';
    inputControl.clasList.add('success');
    inputControl.clasList.remove('error');
}

function setError (element,message){
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('error');

    errorDisplay.innerText=message;
    inputControl.clasList.add('error');
    inputControl.clasList.remove('success');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs(){

    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }
    
    if(emailValue===''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailValue)){
setError(email,'Provide a valid email address');
    }
    
    else{
        setSuccess(email);
    }
    
    if(passwordValue===''){
        setError(password,'password is required');
    }else if(passwordValue.length<8){
        setError(password,'Password must be 8 charectors long.')
    }
    
    else{
        setSuccess(password);
    }
    
    if(password2Value===''){
        setError(password2,'password is required');
    }else if(password2Value!==passwordValue){
        setError(password2,'Password does not Match');
    }
    
    else{
        setSuccess(password2);
    }


    

}

