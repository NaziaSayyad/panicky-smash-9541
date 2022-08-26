let aclr_data = JSON.parse(localStorage.getItem("aclr_data"));


let append_other_aclr = (data) => {
    let container= document.getElementById("appliancesACLR");
    container.innerHTML = null;

    data.forEach(({title,id,url,price,name})=> {
        console.log("tit",title);
        // console.log();
            
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
append_other_aclr(aclr_data);
