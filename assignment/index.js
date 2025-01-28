document.getElementById('sign-up').addEventListener('click',function(){
let email= document.getElementById('email').value
let password= document.getElementById('password').value;
let cpass= document.getElementById('cpass').value;
let regexp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
if (!email.includes("@")){
    alert("Email is not valid")
    return;
}
if(!regexp.test(password)){
    alert("Password must be strong and atleast 8 Characters")
    return;
}
if(password!==cpass){
    alert("Password doesnot match")
    return;
}
alert("successfull");
document.getElementById('form').reset();
});

document.getElementById('sign-up').addEventListener('click',function(){
    let email= document.getElementById('email').value
    let password= document.getElementById('password').value;
    let cpass= document.getElementById('cpass').value;
    let regexp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    if (!email.includes("@")){
        alert("Email is not valid")
        return;
    }
    if(!regexp.test(password)){
        alert("Password must be strong and atleast 8 Characters")
        return;
    }
    if(password!==cpass){
        alert("Password doesnot match")
        return;
    }
    alert("successfull");
    document.getElementById('form').reset();
    });
    

    