

let products_data = JSON.parse(localStorage.getItem("prdct_data")) || [];
console.log(products_data);




let append_other_category = (data) => {
    let container= document.getElementById("prdcts");
    // container.innerHTML = null;

    data.forEach(({title,id,url,price,name})=> {
        console.log("tit",title);
        // console.log();
            
     let nam = document.createElement("h3");
        nam.innerText = title || name;

    let image = document.createElement("img");
    image.src =url;

    let pr = document.createElement("p");
    pr.innerText = price;

    let div = document.createElement("div");
    div.append(nam,image,pr)
        container.append(div)
    });

}
let get_all_prdts = async()=>{
    
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/electronics`);
    let data = await res.json();
    console.log(data);

    let laptop = data[0].laptops;
    append_other_category(laptop);

    let smart_devices = data[0].smartdevices;
    append_other_category(smart_devices);

    let smart_phones = data[0].smartphones;
    append_other_category(smart_phones);

    let tablets = data[0].tablets;
    append_other_category(tablets);    
}

let get_all_appliances = async ()=>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/appliances`);
    let data = await res.json();
    console.log(data);

    let dishwashers  = data[0].dishwashers;
    append_other_category(dishwashers);
    
    let washing = data[0].Washingmachine;
    append_other_category(washing);

    let Refrigerators =  data[0].Refrigerators;
    append_other_category(Refrigerators);

    let telivision = data[0].telivision;
    append_other_category(telivision);

    let airconditioner =  data[0].airconditioner;
    append_other_category(airconditioner);

    let purifires = data[0].waterairpurifiers;
    append_other_category(purifires);

    let cooler = data[0].aircoolers;
    append_other_category(cooler);

    let microwave = data[0].microwaves;
    append_other_category(microwave);
   
}

if(products_data==0){
    get_all_prdts();
}
else if (products_data==1){
    get_all_appliances();
}
else{
    append_other_category(products_data);

}


// 
