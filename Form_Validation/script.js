//create a form and add a feature to validate the form using name section like if name is 2 characters or less it should give an error
let nm=document.querySelector('#name')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let form=document.querySelector('form')
let sm=document.querySelector('small')

 

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(nm.value.length <= 2){
       sm.style.display='initial'
       sm.style.color='red'
    } 
    else{
        sm.style.display='none'
    }
})



//inline validation -> 1. required -> if we write this in an input field that feild should not be empty
//2. pattern -> it is used to validate the email
//3. minlength and maxlength -> it is used to set the minimum and maximum length of the input field
//4. type -> it is used to set the type of the input field like text, email, password etc.

//chatgpt -> "I want you to give me a regex code to check a valid email", " create a regex which allows username", "I am going to create an email, password validator with html, css js give code and explain everything"