let btn = document.getElementById("add_prdts");
btn.onclick = ()=>{
    add_products(event);
}

let add_products = (event)=>{
    event.preventDefault();
    let data ={
        name: document.getElementById("name").value,
        price : +document.getElementById("price").value,
        url :document.getElementById("image").value,
        id:  Date.now()
    }
    let res = await fetch(`https://evaluation-sprint-3.herokuapp.com/api/products`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type" :"application/json",
        }

    });
    res = await res.json();
    console.log(res);
    getdata();
        name =  document.getElementById("name").value = null;
        price = document.getElementById("price").value = null;
        url  = document.getElementById("image").value= null;
        id =  Date.now()

 }

