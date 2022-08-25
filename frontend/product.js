

let washing_data = JSON.parse(localStorage.getItem("washing_data"));
console.log(washing_data)

let ref_data = JSON.parse(localStorage.getItem("ref_data"));


let append_other_category = (data) => {
    let container= document.getElementById("prdcts");
    container.innerHTML = null;

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

append_other_category(washing_data);


