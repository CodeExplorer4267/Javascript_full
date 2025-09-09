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

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("example@gmail.com"));  // true
console.log(emailRegex.test("bad-email@.com"));     // false

//inline validation -> 1. required -> if we write this in an input field that feild should not be empty
//2. pattern -> it is used to validate the email
//3. minlength and maxlength -> it is used to set the minimum and maximum length of the input field
//4. type -> it is used to set the type of the input field like text, email, password etc.

//chatgpt -> "I want you to give me a regex code to check a valid email", " create a regex which allows username", "I am going to create an email, password validator with html, css js give code and explain everything"
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/;

console.log(usernameRegex.test("Rupam123"));   // true
console.log(usernameRegex.test("123Rupam"));   // false (starts with digit)
console.log(usernameRegex.test("ru"));         // false (too short)

// Explanation
// HTML Part

// <form id="loginForm"> → Our login form.

// <input type="text" id="email"> → Email input field.

// <input type="password" id="password"> → Password input field.

// <div class="error"> → Error messages (hidden by default).

// <button type="submit"> → Submit button.

// CSS Part

// body → Centers the form on the page.

// .container → Styled card-like form.

// .error → Red error text, hidden by default.

// .success → Green success message, hidden by default.

// JavaScript Part

// Regex Definitions

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Email must be valid.

// Password must contain:

// at least 8 characters

// 1 lowercase, 1 uppercase, 1 digit, 1 special symbol

// Validation Logic

// On submit, prevent page reload:

// e.preventDefault();


// Check email using regex.test().

// Show/hide error messages.

// If all valid → show success message.