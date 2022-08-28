let btn1 = document.getElementById("wm_prdcts");
btn1.onclick = ()=>{
        get_washingmachine();
 }
 
let get_washingmachine = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].Washingmachine
    console.log(data);
    // console.log(data[0].Washingmachine,"washing machine");
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
   
}
//  2 
let btn2 = document.getElementById("ref_prdcts");
btn2.onclick = ()=>{
    get_ref();
}
let get_ref = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].Refrigerators;
    // console.log(data[0].,"washing machine");
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
   
}


// 3.
let btn3 = document.getElementById("tel_prdts");
btn3.onclick = ()=>{
    get_tel();
}

let get_tel = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].telivision;
    // console.log(data[0].,"washing machine");
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";

}

// 4
let btn4 = document.getElementById("air_prdts");
btn4.onclick = ()=>{
    air_prdts();
}
let air_prdts = async () =>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].airconditioner;
    // console.log(data[0].,"washing machine");
    console.log(result);

    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}


// 5
let btn5 = document.getElementById("water_prdts");
btn5.onclick = ()=>{
    water_air();
}

let water_air = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].waterairpurifiers;
    // console.log(data[0].,"washing machine");
    console.log(result);

    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}
// 6
let btn6 = document.getElementById("microwave_prdts");
btn6.onclick = () =>{
    microwave();
}
let microwave = async () =>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].microwaves;
    // console.log(data[0].,"washing machine");
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}

// 7
let btn7 = document.getElementById("air_cooler_prdts");
btn7.onclick = ()=>{
    cooler_prdts();
}
let cooler_prdts = async () =>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].aircoolers;
    // console.log(data[0].,"washing machine");
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}

// 8
let btn8 = document.getElementById("dishwashers_prdts");
btn8.onclick = () =>{
   dishwashers();
}

let dishwashers = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    let result  = data[0].dishwashers;
    // console.log(data[0].,"washing machine");
    console.log(result);

    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}


let btn9 = document.getElementById("all_products");
btn9.onclick = ()=>{
    all_products();
}
let all_products = async ()=>{
    
    localStorage.setItem("prdct_data",JSON.stringify(1));
    window.location.href="product.html";

}