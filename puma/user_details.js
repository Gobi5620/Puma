document.addEventListener('DOMContentLoaded',()=>{
    
// const ername=document.querySelector('.ername');
// const ermail=document.querySelector('.ermail');
// const erpass=document.querySelector('.erpass');
// const ercpass=document.querySelector('.ercpass');
// const reg_btn=document.querySelector('.reg_btn')
const username=document.getElementById('uname');
const gmail=document.getElementById('email');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirmpassword');
const reg_sub_btn=document.querySelector('.reg_sub_btn')
const user_login=document.querySelector('.user_login')
const registration_details=JSON.parse(localStorage.getItem('registration_details'));


const login_form=document.querySelector('.login_form');
const login_btn=document.querySelector('.log_btn')
const lname=document.getElementById('lname')
const lpassword= document.getElementById('lpassword')
const logged_user = document.querySelector('.logged_user');
const user_logo =document.querySelector('.fa-user');

let users=JSON.parse(localStorage.getItem('registration_details'))|| [];

    reg_sub_btn.addEventListener('click',()=>{
        let name=username.value;
        let mail=gmail.value;
        let confirm_pass=confirm_password.value;
        let pass=password.value;
        users.push({name,mail,pass,confirm_pass});
        console.log(users);
        localStorage.setItem('registration_details',JSON.stringify(users));
        logged_user.style.display='none';
        user_logo.style.display='block';
    })

    login_btn.addEventListener('click',(e)=>{
        e.preventDefault()
        let login_name=lname.value;
        let login_password=lpassword.value;
        let lname_err=document.querySelector('.lname_error');
        let lpass_err=document.querySelector('.lpassword_error');
        let reg=document.querySelector('.reg_btn');
        let log=document.querySelector('.log');
        let isUser=false;
        let isPass=false;

       
        registration_details.forEach((ud)=>{
                if(ud.name==login_name){
                    isUser=true;
                    console.log(isUser);
                }
                return isUser;
        }); 
        registration_details.forEach((ud)=>{
            if(ud.pass==login_password){
                isPass=true;
                console.log(isPass);
            }
            return isPass;
    });
    Check();
        function Check(){  
        if(isPass==true && login_password.length >0){
             lpass_err.style.display='none';
             
        }
        else{
            lpass_err.style.display='block';
        }
        if(isUser==true && login_name.length >0){
          lname_err.style.display='none';
        }
        else{
            lname_err.style.display='block';
        }
    }
        if(isUser==true && isPass==true){
            alert(` suceess`)
            reg.style.display='none';
            log.innerHTML='Log Out'   
            login_form.style.visibility='hidden';
            logged_user.innerHTML=login_name[0];   
            user_logo.style.display='none';
            logged_user.style.display='block';
            
            // let o={id:1}
            // users.push({o});
            // localStorage.setItem('registration_details',JSON.stringify(users));
            // console.log(users)
        }
       
 

    })

    logged_user.addEventListener('click',()=>{
        user_login.style.visibility='visible';
        registration_details.forEach((n)=>{
            console.log(n.name)
            if(n.name){
                logged_user.style.display='block';
            }
        })
    })

 
    
  


})
