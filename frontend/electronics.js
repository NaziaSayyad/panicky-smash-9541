let btn1 = document.getElementById("smrt_phn");
btn1.onclick = () =>{
    smart_phones();
}
let smart_phones = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);
    let result = data[0].smartphones;
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}

let btn2 = document.getElementById("smrt_devices");
btn2.onclick = () =>{
    smart_devices();
}

let smart_devices = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);
    let result = data[0].smartdevices;
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";
}


// 3
let btn3 = document.getElementById("tablet_prdts");
btn3.onclick = () =>{
    tablets();
}
let tablets = async () =>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);
    let result = data[0].tablets;
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";

}

// 4.
let btn4 = document.getElementById("laptop_prdts");
btn4.onclick = ()=>{
    laptops();
}
let laptops = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);
    let result = data[0].laptops;
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(result));
    window.location.href="product.html";

}

let all_products_btn = document.getElementById("all_products");
all_products_btn.onclick = ()=>{
    get_all_prdts();
}
let get_all_prdts = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);
    let result = data[0].laptops;
    console.log(result);
    localStorage.setItem("prdct_data",JSON.stringify(0));
    // window.location.href="product.html";

}