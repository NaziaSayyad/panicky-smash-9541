let numval=document.getElementById("number").value
let btn=()=>{
    let numval=document.getElementById("number").value
    if(numval.length<10){
        alert("Enter 10 digit number")
    }
    else{
        const element = document.getElementById("input");
    element.remove();
    let newinput=document.getElementById("new")
    let div=document.createElement("div")
alert("Enter otp to signup or login")
input = document.createElement("input")
input.type="text"
input.setAttribute("id","abc")
newinput.innerText="Type otp sent on your mobile"
newinput.setAttribute("id","txt")
let btn=document.createElement("button")
btn.innerText="Continue"
btn.onclick=()=>{
    let val=document.getElementById("abc").value
    btnn(val,numval)
}
    
let p=document.createElement("p")
p.innerText=`OTP sent to ${numval}`
div.append(input,p)
newinput.append(div,btn)
    }
}

let btnn=(val,numval)=>{
    let data=JSON.parse(localStorage.getItem("userData"))||[]
    let filtered=data.filter((el)=>{
        return el.phone==numval
    }) 
    if(val=="12345"){
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