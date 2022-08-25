

let washing_data = JSON.parse(localStorage.getItem("washing_data"))

let append_other_category = (data) => {
    let container= document.getElementById("prdcts");
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
append_other_category(washing_data);