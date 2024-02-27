document.addEventListener('DOMContentLoaded', function() {
let new1=document.getElementById('nav_3');
let bar1=document.getElementById('bar1');
let women=document.getElementById('nav3_1');
let bar2=document.getElementById('bar2')
let men=document.getElementById('nav3_2');
let bar3=document.getElementById('bar3')
let kids=document.getElementById('nav_4');
let bar4=document.getElementById('bar4');
let motorsport=document.getElementById('nav_5');
let bar6=document.getElementById('bar6');
let Collab=document.getElementById('nav_6');
let bar7=document.getElementById('bar7');
let sports=document.getElementById('nav_7');
let bar8=document.getElementById('bar8');
user_login.style.visibility='hidden';

// bar1
bar1.addEventListener('mouseover',()=>{

    new1.style.visibility='visible';
    // new1.style.transition='all 1s ease-in'
    // new1.style.transition='all 1s ease-in'




    
    
})


bar1.addEventListener('mouseout',()=>{

    new1.style.visibility='hidden';
    
  
})
new1.addEventListener('mouseover',()=>{

    new1.style.visibility='visible';
    new1.style.transform='translateY(0px)'
    
  
})
new1.addEventListener('mouseout',()=>{

    new1.style.visibility='hidden';
    // new1.style.transform='translateY(-500px)'
    
})

// 

bar2.addEventListener('mouseover',()=>{

    women.style.visibility='visible';
    women.style.transform='translateY(0px)'

    
    
})


bar2.addEventListener('mouseout',()=>{

    women.style.visibility='hidden';
    
  
})
women.addEventListener('mouseover',()=>{

    women.style.visibility='visible';
    women.style.transform='translateY(0px)'
    
  
})
women.addEventListener('mouseout',()=>{

    women.style.visibility='hidden';
    women.style.transform='translateY(-500px)'
    
})

// 

bar3.addEventListener('mouseover',()=>{

    men.style.visibility='visible';
    men.style.transform='translateY(0px)'

    
    
})


bar3.addEventListener('mouseout',()=>{

    men.style.visibility='hidden';
    
  
})
men.addEventListener('mouseover',()=>{

    men.style.visibility='visible';
    men.style.transform='translateY(0px)'
    
  
})
men.addEventListener('mouseout',()=>{

    men.style.visibility='hidden';
    men.style.transform='translateY(-500px)'
    
})

// 

bar4.addEventListener('mouseover',()=>{

    kids.style.visibility='visible';
    kids.style.transform='translateY(0px)'

    
    
})


bar4.addEventListener('mouseout',()=>{

    kids.style.visibility='hidden';
    
  
})
kids.addEventListener('mouseover',()=>{

    kids.style.visibility='visible';
    kids.style.transform='translateY(0px)'
    
  
})
kids.addEventListener('mouseout',()=>{

    kids.style.visibility='hidden';
    kids.style.transform='translateY(-500px)'
    
})

// 

bar6.addEventListener('mouseover',()=>{

    motorsport.style.visibility='visible';
    motorsport.style.transform='translateY(0px)'

    
    
})


bar6.addEventListener('mouseout',()=>{

    motorsport.style.visibility='hidden';
    
  
})
motorsport.addEventListener('mouseover',()=>{

    motorsport.style.visibility='visible';
    motorsport.style.transform='translateY(0px)'
    
  
})
motorsport.addEventListener('mouseout',()=>{

    motorsport.style.visibility='hidden';
    motorsport.style.transform='translateY(-500px)'
    
})

// 


bar8.addEventListener('mouseover',()=>{

    sports.style.visibility='visible';
    sports.style.transform='translateY(0px)'

    
    
})


bar8.addEventListener('mouseout',()=>{

    sports.style.visibility='hidden';
    
  
})
sports.addEventListener('mouseover',()=>{

    sports.style.visibility='visible';
    sports.style.transform='translateY(0px)'
    
  
})
sports.addEventListener('mouseout',()=>{

    sports.style.visibility='hidden';
    sports.style.transform='translateY(-500px)'
    
})
//

bar7.addEventListener('mouseover',()=>{

    sports.style.visibility='visible';
    sports.style.transform='translateY(0px)'

    
    
})


bar7.addEventListener('mouseout',()=>{

    sports.style.visibility='hidden';
    
  
})
sports.addEventListener('mouseover',()=>{

    sports.style.visibility='visible';
    sports.style.transform='translateY(0px)'
    
  
})
sports.addEventListener('mouseout',()=>{

    sports.style.visibility='hidden';
    sports.style.transform='translateY(-500px)'
    
})
})


// 

const e_date='30 FEB 2024 10:00:00 PM';

// document.getElementById('end_date').textContent=e_date;

const inputs=document.querySelectorAll('.clock')

function clock(){
    const end =new Date(e_date)
    const now = new Date()

    const diff=(end-now)/1000

    if(diff <0)return;

    days=Math.floor(diff/3600/24);
    // inputs[1].value=Math.floor(diff/3600)%24;
    
    
    hour=Math.floor(diff/3600)%24;
    minutes=Math.floor(diff/60)%60;
    second=Math.floor(diff%60);

    if(minutes>9){
        inputs[2].value=minutes
    }
    else{
        minutes='0'+minutes;
        inputs[2].value=minutes;
    }
    if(days>9){
        inputs[0].value=days
    }
    else{
        days='0'+days;
        inputs[0].value=days;
    }
    if(hour>9){
        inputs[1].value=hour
    }
    else{
        hour='0'+hour;
        inputs[1].value=hour;
    }
    
    if(second>9){
        inputs[3].value=second;
    }
    else{
        second='0'+second;
        inputs[3].value=second;
    }
    
    

}
clock()

setInterval(()=>{
    clock()
},1000)




// 

const txt=document.querySelector('.delivering').children,
            txtLen=txt.length;
            let index=0;

            function ani(){
            //  console.log(txtLen )
            for(let i=0;i<txtLen;i++){
            txt[i].classList.remove('text_in'); 

            }
            txt[index].classList.add('text_in'); 
                if(index== txtLen-1){
                    index=0
                }
                else{
                    index++
                }
            setTimeout(ani,3000)
            }
            window.onload=ani;


const user=document.querySelector('.users')

const user_login =document.querySelector('.user_login');

user.addEventListener('click',()=>{
    if(user_login.style.visibility==='hidden'){
        user_login.style.visibility='visible';
        user_login.style.top='125px';
    user_login.style.transition='top 0.15s ease';

    }
  else{
    user_login.style.visibility='hidden';
    user_login.style.top='-10%';
    user_login.style.transition='top 0.15s ease';

  }
})

// 

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
{id:'12',color:'Black',name:`Scuderia Ferrai x Joshua Vibes RS_X Unisex Sneakers`,price:'7199',s_img:'folder2/merceds.avif'}

]
let puma_container=document.querySelector('.puma_container')

function get(value){
    puma_container.style.display='none'

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
        puma_container.style.display='block'

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

// login & register
const reg_btn=document.querySelector('.reg_btn');
const register = document.querySelector('.registration_page');
const c_reg = document.querySelector('.c_reg')

reg_btn.addEventListener('click',()=>{
    register.style.visibility='visible'
    document.body.style.backgroundColor='gray';
    puma_container.style.opacity='0.5';
    document.body.style.overflow='hidden';
    user_login.style.visibility='hidden'

})

c_reg.addEventListener('click',()=>{
    register.style.visibility='hidden';
    puma_container.style.opacity='1';
    document.body.style.overflowY='scroll';
})

const cart_list=JSON.parse(localStorage.getItem('cart_items')); 

let no_of_products = document.querySelector('.cart_value');

no_of_products.textContent=cart_list.length;

const ername=document.querySelector('.ername');
const ermail=document.querySelector('.ermail');
const erpass=document.querySelector('.erpass');
const ercpass=document.querySelector('.ercpass');


const username=document.getElementById('uname');
const gmail=document.getElementById('email');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirmpassword');
const reg_sub_btn=document.querySelector('.reg_sub_btn')


    reg_sub_btn.addEventListener('click',(e)=>{
        e.preventDefault();
        // let uname = username.value;

        if(username.value.length <=0){
            ername.style.display='block'
            username.style.border='1px solid red';
        }
        else{
            ername.style.display='none'
            username.style.border='1px solid green';


        }
        if(gmail.value.length <=0){
            ermail.style.display='block'
            gmail.style.border='1px solid red';

        }
        else{
            ermail.style.display='none'
            gmail.style.border='1px solid green';


        }
         if(password.value.length <=0){
            erpass.style.display='block'
            password.style.border='1px solid red';

        }
        else{
            erpass.style.display='none'
            username.style.border='1px solid green';


        }
         if(confirm_password.value.length <=0){
            ercpass.style.display='block'
            confirm_password.style.border='1px solid red';

        }
        else{
            ercpass.style.display='none'
            username.style.border='1px solid green';


        }

        if(password.value != confirm_password.value){
            ercpass.innerHTML='Password does not Match'
            ercpass.style.display='block'
        }

        if(username.value.length !=0 && gmail.value.length !=0 && password.value.length !=0 && confirm_password.value && password.value == confirm_password.value ){
            register.style.visibility='hidden';
            document.body.style.overflowY='scroll'
             puma_container.style.opacity='1';
            
        }
        
    })

const login_close=document.querySelector('.login_close');
const login_form=document.querySelector('.login_form');
const log=document.querySelector('.log');

login_close.addEventListener('click',()=>{
    login_form.style.visibility='hidden';
})

log.addEventListener('click',()=>{
    login_form.style.visibility='visible';
    user_login.style.visibility='hidden';

})


