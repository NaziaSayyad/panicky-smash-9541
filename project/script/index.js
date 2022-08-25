window.onload=()=>{
    let fa=document.getElementById("fa")
    let wl=document.getElementById("mywl")
    let log=document.getElementById("logout")
let data=JSON.parse(localStorage.getItem("signin"))||[]
let user=document.getElementById("username")
    if(!data.username || !data.password){
        fa.innerText="Login/SignUp"
        fa.onclick=()=>{
            window.location.href="./otp.html"
        }
        wl.style.backgroundColor="white"
        log.style.backgroundColor="white"
    }
    else{
        fa.innerText=`${data.username}`
        wl.innerText="My Wish List"
        log.innerText="Logout"
        log.onclick=()=>{
            remove()
        }
    }
}


let remove=()=>{
    let a=window.localStorage.removeItem('signin')
    alert("Successfully logged Out")
    window.location.href="./index.html"
}