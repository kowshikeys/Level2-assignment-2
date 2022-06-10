

document.querySelector('.img-btn').addEventListener('click',function(){
    document.querySelector('.cont').classList.toggle('s--signup')
})

const signIn=()=>{
    const emailSignIn = document.getElementById("email").value
    const passwordSignIn = document.getElementById("password").value

    const storageSignIn = {
        email:emailSignIn,
        password:passwordSignIn
    }

    let localGet = JSON.parse(localStorage.getItem("user"))

    if (localGet.email !==  emailSignIn ) {
        alert("email do not match.");
        return;
    }
    if (localGet.password !==  passwordSignIn ) {
        alert("Passwords do not match.");
        return;
    }

    console.log("success")
    sessionStorage.setItem("user",JSON.stringify(storageSignIn))
    window.location.href="http://127.0.0.1:5500/subaa/Public/HTML/home.html"
    
}

const signUp=()=>{
    const emailSignUp = document.getElementById("Email").value
    const passwordSignUp = document.getElementById("Password").value
    const nameSignUp = document.getElementById("name").value
    const numberSignUp = document.getElementById("number").value

    const storageSignUp = {
        name:nameSignUp,
        email:emailSignUp,
        Number:numberSignUp,
        password:passwordSignUp
    }
    localStorage.setItem("user",JSON.stringify(storageSignUp))
    sessionStorage.setItem("user",JSON.stringify(storageSignUp))
    window.location.href="http://127.0.0.1:5500/subaa/Public/HTML/home.html"
}

