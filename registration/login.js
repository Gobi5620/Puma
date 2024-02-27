let lname = document.querySelector('.lname');
let lpassword = document.querySelector('.lpassword');

const lbtn = document.querySelector('.lbtn');
const g =JSON.parse(localStorage.getItem('registration'))
let answer='incorrect';
lbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    g.forEach((r)=>{

        let ln=lname.value;
        let lp=lpassword.value;

        if(ln==r.name && lp==r.password){
            return answer='correct'
        }

    } )
    lname.value='';
    lpassword.value=''
    alert(answer)
 
   
})
