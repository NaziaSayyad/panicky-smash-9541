

let search = (event)=>{
    if(event.key =='Enter'){
       let q = document.getElementById("search").value;
       console.log(q);
       getdata(q);
    }
}

let getdata = async (q) =>{
    let res = await fetch(`https://poject-panicky-smash-9541.herokuapp.com/api/${q}`);
    let data = await res.json();
    console.log(data);
    localStorage.setItem("search",JSON.stringify(data));
    window.location.href= "search.html";
}

