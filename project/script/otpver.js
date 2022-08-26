let ver=()=>{
    let numval=JSON.parse(localStorage.getItem("numval"))
    let otp1=document.getElementById("otp1").value
    let otp2=document.getElementById("otp2").value
    let otp3=document.getElementById("otp3").value
    let otp4=document.getElementById("otp4").value

   if(otp1==1 && otp2==2 && otp3 ==3 && otp4==4){
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


