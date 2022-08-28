let ver=()=>{
    let numval=JSON.parse(localStorage.getItem("numval"))
    let otp=document.getElementById("numinput").value
    console.log(otp)
   if(otp=="1234"){
    let data=JSON.parse(localStorage.getItem("userData"))||[]
    let filtered=data.filter((el)=>{
        return el.phone==numval
    }) 
    if(filtered.length>0){
            alert("please enter email and password to continue with signin")
            window.location.href="login.html"
        }else{
            alert("no user with this number exists, signup first")
            window.location.href="signup.html"
        }
    }else{
        alert("incorrect otp")
    }
}


