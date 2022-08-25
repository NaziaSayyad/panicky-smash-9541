let btn1 = document.getElementById("wm_prdcts");
btn1.onclick = ()=>{
        get_washingmachine();
 }
let flag =0;
let get_washingmachine = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/washingmachine`);
    let data = await res.json();
    console.log(data,"washing machine");
    localStorage.setItem("washing_data",JSON.stringify(data));
    window.location.href="product.html";
   
}
//  2 
let btn2 = document.getElementById("ref_prdcts");
btn2.onclick = ()=>{
    get_ref();
}
let get_ref = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/Refrigerators`);
    let data = await res.json();
    console.log(data,"refrigirator");
    localStorage.setItem("ref_data",JSON.stringify(data));
    window.location.href="reproduct.html";
   
}

