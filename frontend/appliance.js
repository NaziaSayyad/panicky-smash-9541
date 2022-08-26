let btn = document.getElementById("prdcts");
btn.onclick = () => {
    get_prdcts();
}
let get_prdcts = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    console.log(data,"appliances");
    localStorage.setItem("data",JSON.stringify(data));
    window.location.href="applinces-on-rent.html";
}


let btn1 = document.getElementById("wm_prdcts");
btn1.onclick = ()=>{
        get_washingmachine();
 }
let flag =0;
let get_washingmachine = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].Washingmachine
    console.log(data[0].Washingmachine,"washing machine");

    localStorage.setItem("washing_data",JSON.stringify(result));
    window.location.href="washing-machines-on-rent.html";
   
}
//  2 
let btn2 = document.getElementById("ref_prdcts");
btn2.onclick = () => {
    get_ref();
}
let get_ref = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/Refrigerators`);
    let data = await res.json();
    console.log(data,"refrigirator");
    localStorage.setItem("ref_data",JSON.stringify(data));
    window.location.href="refrigerators-on-rent.html";
   
}

let btn3 = document.getElementById("tv_prdcts");
btn3.onclick = () => {
    get_tv();
}
let get_tv = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/telivision`);
    let data = await res.json();
    console.log(data,"tv");
    localStorage.setItem("tv_data",JSON.stringify(data));
    window.location.href="telivision-on-rent.html";
   
}

let btn4 = document.getElementById("ac_prdcts");
btn4.onclick = () => {
    get_ac();
}
let get_ac = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/airconditioner`);
    let data = await res.json();
    console.log(data,"ac");
    localStorage.setItem("ac_data",JSON.stringify(data));
    window.location.href="air-conditioners-on-rent.html";
   
}

let btn5 = document.getElementById("wap_prdcts");
btn5.onclick = () => {
    get_wap();
}
let get_wap = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/waterairpurifiers`);
    let data = await res.json();
    console.log(data,"wap");
    localStorage.setItem("wap_data",JSON.stringify(data));
    window.location.href="water-and-air-purifiers-on-rent.html";
   
}

let btn6 = document.getElementById("mi_prdcts");
btn6.onclick = () => {
    get_mi();
}
let get_mi = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/microwaves`);
    let data = await res.json();
    console.log(data,"mi");
    localStorage.setItem("mi_data",JSON.stringify(data));
    window.location.href="microwaves-and-induction-on-rent.html";
   
}

let btn7 = document.getElementById("aclr_prdcts");
btn7.onclick = () => {
    get_aclr();
}
let get_aclr = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/aircoolers`);
    let data = await res.json();
    console.log(data,"aclr");
    localStorage.setItem("aclr_data",JSON.stringify(data));
    window.location.href="air-coolers-on-rent.html";
   
}

let btn8 = document.getElementById("d_prdcts");
btn8.onclick = () => {
    get_d();
}
let get_d = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/dishwashers`);
    let data = await res.json();
    console.log(data,"d");
    localStorage.setItem("d_data",JSON.stringify(data));
    window.location.href="dishwashers-on-rent.html";
   
}

