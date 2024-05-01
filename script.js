const shoppingcart=document.querySelector(".shopping-cart");
const cart=document.querySelector("#cart");

function ToggleCart(){
    shoppingcart.classList.toggle("active");
    loginform.classList.remove("active")
}
cart.addEventListener("click",()=>{
    ToggleCart();
})
// login
const loginform=document.querySelector(".login-form");
const login=document.querySelector("#login");

function ToggleLogin(){
    loginform.classList.toggle("active");
    shoppingcart.classList.remove("active");
}
login.addEventListener("click",()=>{
    ToggleLogin();
})

// read more btn

const additional=document.querySelector('.additional-content');
const readbtn=document.querySelector('.btn1');

function readMore(){
    if(additional.classList.contains('hidden')){
        additional.classList.remove('hidden');
        readbtn.textContent='Read Less';
    }
    else{
        additional.classList.add('hidden');
        readbtn.textContent='Read More';
    }
   
}
readbtn.addEventListener("click", ()=>{
    readMore();
})

