

let washing_data = JSON.parse(localStorage.getItem("washing_data"));
console.log(washing_data);

let append_other_wash = (data) => {
    let container= document.getElementById("appliancesW");
    container.innerHTML = null;

    data.forEach(({title,id,url,price,name})=> {
        // console.log("tit",title);
            
    let nam = document.createElement("h2");
    nam.innerText = title || name;
    nam.setAttribute("class","nam");


    let image = document.createElement("img");
    image.src =url;
    image.setAttribute("class","photo");

    let pr = document.createElement("p");
    pr.innerText ="₹"+price+"/mo";
    pr.setAttribute("class","kimat");

    let qw = document.createElement("button");
    qw.innerText="Quick View";
    qw.setAttribute("class","rm-quickv__btn");

    let hbtn = document.createElement("div");
    hbtn.setAttribute("class","rm-quickview__container");

    let div = document.createElement("div");
    div.setAttribute("class","myDIV");


    hbtn.append(qw);
    div.append(image,nam,pr,hbtn);
    container.append(div);
    });

}

append_other_wash(washing_data);

