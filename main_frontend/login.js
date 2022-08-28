let btn=document.getElementsByClassName("button")

let userData=JSON.parse(localStorage.getItem("userData")) || []
let getData=()=>{
    let user=document.getElementById("username")
    let pass=document.getElementById("password")
    let data={
        username:user.value,
        password:pass.value,
        status:true,
    }
    console.log(data)
 if(checksignin(data.username,data.password)===true){
    console.log(data);
    localStorage.setItem("signin",JSON.stringify(data))
    alert("Sign in Successful")

    window.location.href="index.html"
 }else{
    alert("Wrong User or Password")
 }
}

function checksignin(username,password){
let filter=userData.filter(function(element){
return element.username===username && element.password===password
})
if(filter.length>0){
    return true
}else{
    return false;
}
}

let signup=()=>{
    window.location.href="./signup.html"
}