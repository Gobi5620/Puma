const c1=document.querySelector('.c1');

const item_details=[{id:'1',color:'blue',name:`Blktop Rider Lithium Unisex  Sneakers`,price:'5399',s_img:'folder1/blktop.avif'},
{id:'2',color:'Red',name:`Scuderia Ferrari Clyde Unisex Sneakers`,price:'4999',s_img:'folder1/ferrari.avif'},
{id:'3',color:'Brown',name:`PUMA x BEAVIS AND BUTTHEAD PUMA-180 Unisex Sneakers`,price:'6599',s_img:'folder1/butthead.avif'},
{id:'4',color:'Black',name:`SOFTRIDE Pro Coast Unisex Running Shoes`,price:'4599',s_img:'folder1/coast.avif'},
{id:'5',color:'blue and Brown',name:`PUMA x BEAVIS AND BUTTHEAD PUMA-180 Unisex Sneakers`,price:'5399',s_img:'folder1/beavis.avif'},
{id:'6',color:'White and Red',name:`SOFTRIDE Pro Coast Unisex Running Shoes`,price:'7199',s_img:'folder1/ferraix.avif'},
{id:'7',color:'Black',name:`Blktop Rider Lithium Unisex Sneakers`,price:'5399',s_img:'folder2/suede.avif'},
{id:'8',color:'White',name:`Scuderia Ferrai Clyde Unisex Sneakers`,price:'4999',s_img:'folder2/blktop_rider.avif'},
{id:'9',color:'black and blue',name:`SOFTRIDE Pro Coast Unisex Running Shoes`,price:'6599',s_img:'folder2/RS.avif'},
{id:'10',color:'white and blue',name:`Slipstream Bball Mix Unisex Sneakers`,price:'4599',s_img:'folder2/blktop_lithium.avif'},
{id:'11',color:'Light green',name:`Porsche Legacy Trinity Unisex Sneakers`,price:'5399',s_img:'folder2/future_rider.avif'},
{id:'12',color:'Black',name:`Scuderia Ferrai x Joshua Vibes RS_X Unisex Sneakers`,price:'7199',s_img:'folder2/mercedes.avif'}

]


function get(value){
    item_details.forEach((items)=>{
        if(value == items.id){
            let z=`<div class='m'><div><img src='${items.s_img}' class='shoe_images'></div><div class='cart'><p class='shoe_name'>${items.name}</p> <div> <p class='shoe_price'>$${items.price}</p></div> <p class='gst'>Price include GST</p> <div><p class="color">Color</p><p class='shoe_color'>${items.color}</p></div><div class='price  '><p class='extra_discount'>Extra 5% off auto-applied at checkout</p><p  class='extra_discount'>Extra 5% off on prepaid orders</p><div></div><p class='close'>X</p></div> <button class='cart_btn' onclick="addCart(${items.id})">ADD TO CART</button>`;
            c1.innerHTML=z;
        }

    })
    c1.style.visibility='visible'
    let close =document.querySelector('.close');
    close.addEventListener('click',()=>{
        c1.style.visibility='hidden '
    })
    
}

function addCart(id){
    let cart_items=JSON.parse(localStorage.getItem('cart_items')) || [];
    item_details.forEach((products)=>
    {
        if(id==products.id)
        cart_items.push(products);
    })
localStorage.setItem('cart_items', JSON.stringify(cart_items));

    window.location.href='add.html';
}
