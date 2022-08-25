let btn1 = document.getElementById("wm_prdcts");

btn1.onclick = ()=>{
        
        get_washingmachine();
        // window.location.href="product.html";
    }
let flag =0;
let get_washingmachine = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/washingmachine`);
    let data = await res.json();
    console.log(data,"washing machine");
    // append_other_category(data);
    // flag = 1;
    localStorage.setItem("washing_data",JSON.stringify(data));
    window.location.href="product.html";
   
}
if(flag==1){
    console.log(flag);
}

