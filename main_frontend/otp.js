let numval=document.getElementById("numinput").value
let btnnn=()=>{
    let numval=document.getElementById("numinput").value
    if(numval.length==10){
        localStorage.setItem("numval",JSON.stringify(numval))
        window.location.href="otp2.html"
    }
    else {
        alert("Enter 10 digit number")
    }
}


