// get data 
// Categories of product 

// 1.  APPLIANCES 

let get_appliances = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/appliances`);
    let data = await res.json();
    console.log(data,"appliances")
    append_main_category(data)
}
get_appliances();

// 2. Washingmachine

let get_washingmachine= async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/Washingmachine`);
    let data = await res.json();
    console.log(data,"washing machine");
    append_other_category(data)
}
get_washingmachine();

// 3. Refrigerators

let get_refrigrator = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/Refrigerators`);
    let data = await res.json();
    console.log(data,"Refrigerators");
    append_other_category(data)
}
get_refrigrator();

// 4. telivision
let get_telivision= async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/telivision`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"telivision");
}
get_telivision();

// 5. airconditioner

let get_airconditioner = async () => {
    let res = await fetch(`http://127.0.0.1:3000/api/airconditioner`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"airconditioner");
}
get_airconditioner();

// 6. waterairpurifiers

let waterairpurifiers = async () =>{
    let res = await fetch(`http://127.0.0.1:3000/api/waterairpurifiers`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"waterairpurifiers");
}
waterairpurifiers();

// 7. Microwaves

let get_microwaves =  async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/microwaves`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"microwaves");
}
    get_microwaves();

// 8. aircoolers

let get_aircoolers = async () =>{
    let res = await fetch(`http://127.0.0.1:3000/api/aircoolers`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"aircoolers");
}
    get_aircoolers();

// 9. dishwashers

let get_dishwashers = async () => {
    let res = await fetch(`http://127.0.0.1:3000/api/dishwashers`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"dishwashers");
}
get_dishwashers();
// 10. electronics

let get_electronics = async () =>{
    let res = await fetch(`http://127.0.0.1:3000/api/electronics`);
    let data = await res.json();
    append_main_category(data)
    console.log(data,"electronics")
    
}
get_electronics();

// 11.smartphones

let get_smartphones = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/smartphones`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"smartphones");
}
get_smartphones();

// 12. smartdevices

let get_smartdevices = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/smartdevices`);
    let data = await res.json();
    append_other_category(data)
    console.log(data,"smartdevices");
}
get_smartdevices();

// 13. laptops

let get_laptops = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/laptops`);
    let data = await res.json();
    console.log(data,"laptops");
    append_other_category(data)
}
get_laptops();

// 14. tablets 

let get_tablets = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/tablets`);
    let data = await res.json();
    console.log(data,"tablets");
    append_other_category(data)
}
get_tablets();

// 15. furniture

let get_furniture = async () =>{
    let res = await fetch(`http://127.0.0.1:3000/api/furniture`);
    let data = await res.json();
    console.log(data,"furniture");
    append_main_category(data)
}
get_furniture();

// 16. fitness
let get_fitness = async ()=>{
    let res = await fetch(`http://127.0.0.1:3000/api/fitness`);
    let data = await res.json();
    console.log(data,"fitness");
    append_main_category(data)
}
get_fitness();

let append_main_category = (data)=>{
    let container= document.getElementById("prdcts");
    // container.innerHTML = null;

    data.forEach(({title,id,url})=> {
            
     let name = document.createElement("h3");
        name.innerText = title;

    let image = document.createElement("img");
    image.src =url;
        let div = document.createElement("div");
        div.append(name,image);
        container.append(div)
    

    });
}

let append_other_category = (data) => {
    let container= document.getElementById("other_prdcts");
    // container.innerHTML = null;

    data.forEach(({title,id,url,price})=> {
            
     let name = document.createElement("h3");
        name.innerText = title;

    let image = document.createElement("img");
    image.src =url;

    let pr = document.createElement("p");
    pr.innerText = price;

    let div = document.createElement("div");
    div.append(name,image,pr)
        container.append(div)
    });

}