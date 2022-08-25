let btn=document.getElementsByClassName("button")
let userData=JSON.parse(localStorage.getItem("userData")) || []
let getData=()=>{
    let user=document.getElementById("username")
    let passwrd=document.getElementById("password")
    let e_mail=document.getElementById("email")
    let phn=document.getElementById("phone")
    if(phn.value.length!=10){
        alert("Enter 10 digit number")
    }else{
         let userData=JSON.parse(localStorage.getItem("userData")) || []
        event.preventDefault()
            let data={
                username:user.value,
                email:e_mail.value,
                password:passwrd.value,
                phone:phn.value
            }
            console.log(data)
            if(checkEmails(data.email)===true){
                userData.push(data)
                localStorage.setItem("userData",JSON.stringify(userData))
                alert("sign up successful")
                let data1={
                    username:form.username.value,
                    password:form.password.value
                }
                localStorage.setItem("signin",JSON.stringify(data1))
              window.location.href="index.html"
            }else{
                alert("account already exists")
            }
        }
    
        function checkEmails(email){
            let filtered=userData.filter(function(element){
                return email===element.email
            })
            if(filtered.length>0){
                return false
            }else{
                return true
            }
    
        }

}



let signin=()=>{
    window.location.href="./login.html"
}

