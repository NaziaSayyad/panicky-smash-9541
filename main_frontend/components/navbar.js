let navbar=()=>{
    return `<section class="mx-16 mr-16">
      <div id="navbar" class="flex  items-center justify-between ">
            <div class="logo flex justify-center items-center ">
                <div>
              <a href="index.html">
              <svg class="h-12 w-56 mt-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
              <path fill="#db3327" d="M43.3 1.2H12.4a3.6 3.6 0 0 0-3.6 3.6V26l-4 6.9h35a3.6 3.6 0 
              
              
              0 0 3.6-3.6V8l4-6.8zM21.4 13.6c-1.3.1-2.5 1.2-2.5 3.8v6.2h-3.4V10.4h.5a2.6 2.6 0 0 1 2.8 
              2 3.8 3.8 0 0 1 3.8-2.1h1l-1.9 3.3zM36.6 17v6.8h-.5c-1.9 0-3-1-3-3.4v-3.8c0-1.9-.9-3.1-2.6-3.1s-2.7 
              1.1-2.7 3.8v6.3h-3.5v-7c0-1.5-.5-2.6-1.7-3l1.9-3.2a4.6 4.6 0 0 1 2.7 2.2 5.3 5.3 0 0 1 4.6-2.3c3.4 0 4.8 2.5 4.8 5.8z">
              </path><path fill="#6d6d6d" d="M148.3 11.5a6.4 6.4 0 0 1 6.7 6.6 6.7 6.7 0 0 1-13.4 0 6.4 6.4 0 0 1 6.7-6.6zm0 10.1a3.4 3.4 0 0 0
               3.5-3.5 3.5 3.5 0 1 0-6.9 0 3.4 3.4 0 0 0 3.4 3.5zm11.6 1.6a6.1 6.1 0 0 1-3.4 5.8l-2-2.2a3.8 3.8 0 
               0 0 2.1-3.5V11.9h3.3zm-1.7-16.5c1.2 0 1.9.4 1.9 1.6s-.7 1.7-1.9 1.7-1.9-.5-1.9-1.7.8-1.6 1.9-1.6zm10.3 4.8a6.4 6.4 0 0 
               1 6.7 6.6 6.7 6.7 0 0 1-13.4 0 6.4 6.4 0 0 1 6.7-6.6zm0 10.1a3.4 3.4 0 0 0 3.5-3.5 3.5 3.5 0 1 0-6.9 0 3.4 3.4 0 0 0 
               3.4 3.5zm-88 1.4a8.3 8.3 0 0 1-5.2 1.7c-4.7 0-6.8-2.9-6.8-6.5a6.3 6.3 0 0 1 6.6-6.6c3.8 0 5.6 2.3 5.6 5.2a11.5 11.5 0 0 1-.3 
               
               2.4h-8.5a3.1 3.1 0 0 0 3.4 2.7 6.8 6.8 0 0 0 3.1-.8.9.9 0 0 1 1.2.4zm-3.1-6.8c0-1-.8-1.9-2.4-1.9a2.8 2.8 0 0 0-3 2.3h5.4a2.6 
               2.6 0 0 0 .1-.4zm23.1-7.5v3.2h5.4a11.7 11.7 0 0 0-1.6 2.6h-3.8v5.1c0 1.5.6 2.4 1.7 2.4a4.6 4.6 0 0 0 2.3-.6 5.3 5.3 0 0 0 1.2 
               
               2.1 8.7 8.7 0 0 1-4.6 1.1c-2.4 0-4-1.5-4-4.4v-5.7h-2a11.3 11.3 0 0 0-1.2-2.6h3.2l.4-3.2zm-6.6 11.8v-3.3c0-3.1-1.4-5.5-4.6-5.5a5.2 
               5.2 0 0 0-4 1.7v-1.5H82v12.4h3.3v-5.7c0-2.4 1.4-3.9 2.8-3.9s2.5 1.1 2.5 3v3.6c0 2.3 1 3.3 2.9 3.3h.5z"></path>
               <path fill="#6d6d6d" d="M111.9 11.5a6.4 6.4 0 0 1 6.7 6.6 6.7 6.7 0 0 1-13.4 0 6.4 6.4 0 0 1 6.7-6.6zm0 10.1a3.4 3.4 0 0 
               0 3.5-3.5 3.5 3.5 0 1 0-6.9 0 3.4 3.4 0 0 0 3.4 3.5zm-42.6-9.1a4.2 4.2 0 0 0-2.4-.9 3.2 3.2 0 0 0-3.1 1.9 2.5 2.5 0 
               0 0-2.8-1.8h-.5v12.6h3.3v-6c0-2.6 1.3-3.6 2.7-3.6h1.1a9.1 9.1 0 0 1 1.7-2.2zm66.2-.8a5 5 0 0 0-4.4 2.2c-.6-1.5-2.4-2.2-4.5-2.2h-.2a4
                4 0 0 0-3.5 1.9 2.5 2.5 0 0 0-2.7-1.9h-.5v12.6h3.3v-6c0-2.6 1.3-3.6 2.7-3.6s2.5 1.1 2.5 2.9v6.6h3.3v-6c0-2.5 1.2-3.6 2.6-3.6s2.5
                 1.1 2.5 3v3.6c0 2.3 1 3.3 2.9 3.3h.5v-7.3c.1-3.1-1.2-5.5-4.5-5.5z"></path></svg> </a>
                </div>
                <div class="city flex justify-center items-center">
                <div class="flex">delhi</div>
               <img class="ml-1 w-3 h-3" src="./imagesnav/downopen.jfif" alt="" > </a>
            </div>
            </div>
            <!-- searchbar -->
            <div class="serachbar  flex relative  justify-end items-center w-1/2  ">

               <input class=" inputsearch w-full   order-1 " type="text" placeholder="search" id="search"
          onkeypress="search(event)">
                <svg class="w-6 h-6 absolute order-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <!-- cart -->
            <div class="cart_login flex justify-center items-center 
            ">
                <div class="cart flex justify-center items-center mr-1">
                    <img class="w-10 h-10 mr-1" src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="error">
                    <p>Cart</p>
                </div>
                
                <div id="buttonlogin">
          <p id="username"></p>
  
          <ul id="cont">
          <li id="list" > 
          <a  id="fa" >
              
          </a>
              <ul class="dropdown">
                  <li>
                      <a href="#" id="mywl" ></a>
                  </li>
                  <li >
                      <a  id="logout"></a>
                  </li>
              </ul>
          </li>
      </ul>
      </div>
            
        </div>
    </section  >`;
}

export default navbar