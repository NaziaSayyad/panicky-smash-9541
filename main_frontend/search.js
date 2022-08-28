

let search_data = JSON.parse(localStorage.getItem("search"));

console.log(search_data);

let append_pr = (data)=>{
    let container= document.getElementById("search_pr");
    // container.innerHTML = null;

    data.forEach(ele => {
              
        let nam = document.createElement("h2");
        nam.innerText = ele.title || ele.name;
        nam.setAttribute("class","nam");
    
    
        let image = document.createElement("img");
        image.src = ele.url;
        image.setAttribute("class","photo");
    
        let pr = document.createElement("p");
        pr.innerText ="₹"+ele.price+"/mo";
        pr.setAttribute("class","kimat");
    
        let qw = document.createElement("button");
        qw.innerText="Quick View";
        qw.setAttribute("class","rm-quickv__btn");
    
        let hbtn = document.createElement("div");
        hbtn.setAttribute("class","rm-quickview__container");
    
        let div = document.createElement("div");
        div.addEventListener("click",()=>{
            add_cart(ele);
        })
        div.setAttribute("class","myDIV");
    
    
        hbtn.append(qw);
        div.append(image,nam,pr,hbtn);
        container.append(div);
        });

}
append_pr(search_data);

let arr = [];
let add_cart = (ele)=>{
    console.log(ele);
    arr.push(ele)
    console.log(arr)
    localStorage.setItem("cart_item",JSON.stringify(arr));
    window.open('product_cart.html')
}