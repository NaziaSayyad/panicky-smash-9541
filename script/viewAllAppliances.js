// // var rangeslider = document.getElementById("sliderRange");
// // var output = document.getElementById("demo");
// // output.innerHTML = rangeslider.value;
  
// // rangeslider.oninput = function() {
// //   output.innerHTML = this.value;
// // }

// // let x;
// // document.getElementById("myCheck");
// // x.checked = true;

// let wap = () =>{
//     window.location.href="water-and-air-purifiers-on-rent.html";
// }

// let tv = () =>{
//     window.location.href="telivision-on-rent.html";
// }



// let wm = () =>{
//     window.location.href="washing-machine-on-rent.html";
// }

// 

// let aclr = () =>{
//     window.location.href="telivision-on-rent.html";
// }

// let dsw = () =>{
//     window.location.href="telivision-on-rent.html";
// }



let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

let append = (data) => {
    let container= document.getElementById("appliances");
    container.innerHTML = null;

    data.forEach(({title,id,url,price,name})=> {
        console.log("tit",title);
            
    let nam = document.createElement("h2");
    nam.innerText = title || name;
    nam.setAttribute("class","nam");


    let image = document.createElement("img");
    image.src =url;
    image.setAttribute("class","photo");

    let pr = document.createElement("p");
    pr.innerText ="₹"+price+"/mo";
    pr.setAttribute("class","kimat");

    let qw = document.createElement("button");
    qw.innerText="Quick View";
    qw.setAttribute("class","rm-quickv__btn");

    let hbtn = document.createElement("div");
    hbtn.setAttribute("class","rm-quickview__container");

    let div = document.createElement("div");
    div.setAttribute("class","myDIV");


    hbtn.append(qw);
    div.append(image,nam,pr,hbtn);
    container.append(div);
    });

}

append(data);

let ac = () =>{
    let ac_data = JSON.parse(localStorage.getItem("ac_data"));
    // window.location.href="air-conditioners-on-rent.html";
    append(ac_data);
}

let wap = () =>{
    let wap_data = JSON.parse(localStorage.getItem("wap_data"));
    // window.location.href="air-conditioners-on-rent.html";
    append(wap_data);   //window.location.href="telivision-on-rent.html";
}
