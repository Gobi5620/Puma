const fname=document.querySelector('.name');
const pass = document.querySelector('.password');
const btn= document.querySelector('.sub_btn');
let registration=JSON.parse(localStorage.getItem('registration')) || []
btn.addEventListener('click',(e)=>{
    e.preventDefault()
   let name= fname.value;
   let password = pass.value;

    let store ={name,password}
    registration.push(store);

   console.log(store)
    window.alert('registered')
   localStorage.setItem('registration',JSON.stringify(registration));
   window.location.href='login.html'
})