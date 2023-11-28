let form = document.getElementById("register-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmPassword = document.getElementById("co-password")
    let gender = document.getElementsByName("gender")
    let tos = document.getElementById("tos")
    let error = document.getElementById("error")
    error.innerHTML = ""
    
    if(name.value.length < 5 || name.value.length > 30){
        error.innerHTML = "Username is Invalid"
        return
    }

    if(!validateEmail(email.value)){
        error.innerHTML = "Email is Invalid"
        return
    }

    if(!validatePassword(password.value)){
        error.innerHTML = "Password is Invalid"
        return
    }

    if(password.value != confirmPassword.value) {
        error.innerHTML = "Password does not match!"
        return
    }

    let validGender = false
    gender.forEach((option) =>{
        if(option.checked){
            validGender = true
        }
    })

    if(!validGender){
        error.innerHTML = "You must select a gender"
        return
    }

    if(!tos.checked){
        error.innerHTML = "You must agree to the terms of service"
        return
    }

    let confirmResult = confirm("Are you sure you want to sumbit?")
    if(confirmResult){
        alert("Register Success") 
        location.replace("home.html")
    }

    else{
        alert("Register Cancelled")
    }
})

function validatePassword(password){
    let length = password.length

    let isAlpha = false
    let isNumeric = false
    for(let i=0; i<length; i++){
        let charCode = password.charCodeAt(i)

        if(!isNaN(password[i])){
            isNumeric = true
        }

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122 )){
            isAlpha = true
        }
    }
    if(isAlpha && isNumeric){
        return true
    }
    
    else{
        return false
    }
}

function validateEmail(email){
    return email.indexOf('@') != -1 && email.endsWith('.com')
}