let cart_list=JSON.parse(localStorage.getItem('cart_items')); 
let all_products='';
let total=0;
document.addEventListener('DOMContentLoaded',()=>{
    let product_details=document.querySelector('.carts');
    let total_element=document.querySelector('.total');
    if(cart_list.length==0){
        total_value='';
        all_products=`<div class='cart_container'><h1 class='empty_cart'>Your Cart is Empty</h1></div>`;
        let h=document.querySelector('.heading')
        h.innerHTML='';
    }
    else{
    cart_list.forEach((carts,index)=>{
        let products_value=`
       
        <div class="cart">
        <div class="p_image">
        <img src="${carts.s_img}" width="200px" height="200px" alt="" class='cart_img'>
        </div>
        <div class="p_detail">
        <div class='c_details'><p class="p_name">${carts.name}</p><p class="p_price">$${' '}${carts.price}</p> <button onclick='remove(${index})' class='remove_btn'><i class="fa-solid fa-trash"></i></button></div>
        <p>Color:${carts.color}</p>
        <p>Style Number</p>
        </div>
        </div>`;
        total+=parseInt(`${carts.price}`)
        all_products+=products_value;
    })
    total_value=`<div class='cart_total'><div class='free_returns'><p>FREE RETURNS ON ALL QUALIFYING ORDERS</p></div><div class='promo_code'><h1>APPLY A PROMO CODE</h1></div><div><P>SUB TOTAL</P><P>${total}</P></div><div><P>SHIPPING COSTS</P><P>$0</P></div><div><div><h3>GRAND TOTAL</h3><p class='price_gst'>PRICES INCLUDE GST</p></div><p>Total:${total}</p></div><button class='checkout'onclick='clearcart()'>CHECKOUT</button></div>`
    let heading=`Your Shopping Cart [${cart_list.length}]`
    let h=document.querySelector('.heading')
    h.textContent=heading;
}

    product_details.innerHTML=all_products;
    total_element.innerHTML=total_value;  

    
})
function clearcart(){
    // localStorage.removeItem('cart_items');
    cart_items= [];
    localStorage.setItem('cart_items', JSON.stringify(cart_items));
    window.location.href='add.html';
    console.log(cart_list)
}

function remove(i){
    cart_list.splice(i,1); 
    console.log(cart_list)
    localStorage.setItem('cart_items', JSON.stringify(cart_list));
    window.location.href='add.html';
}