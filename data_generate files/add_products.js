let btn = document.getElementById("add_prdts");
btn.onclick = ()=>{
    add_products(event);
}

let add_products = async  (event)=>{
    event.preventDefault();
    let data ={
        name: document.getElementById("name").value,
        price : +document.getElementById("price").value,
        url :document.getElementById("url").value,
        id:  Date.now()
    }
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/microwaves`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" :"application/json",
        }

    });
    res = await res.json();
    console.log(res);
    // getdata();
    title =  document.getElementById("name").value = null;
        price = document.getElementById("price").value = null;
        url  = document.getElementById("url").value= null;
        id =  Date.now()
}
let add_refigerator = async (e) =>{
    e.preventDefault();
    let data ={
        title: document.getElementById("ref_name").value,
        price : +document.getElementById("ref_price").value,
        url :document.getElementById("ref_url").value,
        id:  Date.now()
    }
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/Refrigerators`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" :"application/json",
        }

    });
    res = await res.json();
    console.log(res);
    // getdata();
        name =  document.getElementById("ref_name").value = null;
        price = document.getElementById("ref_price").value = null;
        url  = document.getElementById("ref_url").value= null;
        id =  Date.now()

}

let add_tel = async (event) =>{
    event.preventDefault();
    let data ={
        name: document.getElementById("tel_name").value,
        price : +document.getElementById("tel_price").value,
        url :document.getElementById("tel_url").value,
        id:  Date.now()
    }
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/telivision`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" :"application/json",
        }

    });
    res = await res.json();
    console.log(res);
    // getdata();
        name =  document.getElementById("tel_name").value = null;
        price = document.getElementById("tel_price").value = null;
        url  = document.getElementById("tel_url").value= null;
        id =  Date.now()

}

let add_air = async (e)=>{
    e.preventDefault();
    let data ={
        name: document.getElementById("air_name").value,
        price : +document.getElementById("air_price").value,
        url :document.getElementById("air_url").value,
        id:  Date.now()
    }
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/aircoolers`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" :"application/json",
        }

    });
    res = await res.json();
    console.log(res);
    // getdata();
        name =  document.getElementById("air_name").value = null;
        price = document.getElementById("air_price").value = null;
        url  = document.getElementById("air_url").value= null;
        id =  Date.now()

}