// event means any action on the browser
// events can be triggered by user interactions like clicks, key presses, etc.
// we can add event listeners to elements to respond to these events
// addEventListener(event,function)
//create a paragraph click on it make it color blue and after clicking below create a h1 
// let p=document.querySelector('.para')
// p.addEventListener('click',function(){
//     p.style.color="blue"
//     let h1=document.createElement('h1')
//     h1.textContent="Hello"
//     p.appendChild(h1)
// })
//dblclick->double click event listener

//eventlistener delete korar jonno element.removeEventListener(event,function)-> same function pass korte hy zeta amra addevent e diyechilam
//input event listener-> input box e kichu change hole trigger hoy
// type in input box and console it
// let input=document.querySelector('input')
// input.addEventListener('input',(e)=>{
//     console.log(e.target.value)
// })

//now create a button on clicking on this button whatver written on the input box it will show on the screen
// let input=document.querySelector('input')
// let button=document.querySelector('button')
// let s=""
// input.addEventListener('input',(e)=>{
//     s=e.target.value //ekhetre puro string ta asbe alada alada character ante hole 
// })
// input.addEventListener('input',(e)=>{
//     console.log(e.data) -> ekhetre backspace dile null pront hobe and space dile kichu print hobe na
// })
// button.addEventListener('click',()=>{
//     let h1=document.createElement('h1')
//     h1.textContent=s;
//     document.body.appendChild(h1)
// })

//change event->select tag or textarea tag e kichu change hole trigger hoy
//create a list of dropdown box and if a option is selected, it will show the selected value as selected : option
// let sel=document.querySelector('select')
// let h1=document.querySelector('#select_head')
// sel.addEventListener('change',(e)=>{
//     h1.textContent=`Selected : ${e.target.value}`
// })

//keydown event -> kono key click korle trigger hobe
// //task : create a h1 tag and show what are you typing
// let h1=document.querySelector('#head')
// let s=""
// window.addEventListener('keydown',(e)=>{
//     console.log(e);
//     if(e.code==='Space'){
//         console.log("You are typing space")
//         s+=' '
//         h1.textContent=s;
//     }
//     if(e.key==="Backspace"){
//         s=s.slice(0,-1)
//         h1.textContent=s;
//     }
//     else{
//         s+=e.key;
//         h1.textContent=s;
//     }
// })

// create a button upon clicking on that button files will be opened and the selected file name should be on that button
// let input=document.querySelector('#fileinput')
// input.style.display="none"
// let btn=document.querySelector('#btn')
// btn.addEventListener('click',()=>{
//     input.click()
// })
// input.addEventListener('change',(e)=>{
//     let fileName=e.target.files[0].name
//     btn.textContent=fileName
// })

//form submit hole page reload hoy. to stop form submission use preventDefault()
//type = submit event listener-> form submit hole trigger hoy
// let form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{ 
//     e.preventDefault()
// })

//create a form with name, email, phone number and profile pic . on submitting the form the data should be shown on the screen as a card
// const btn1=document.querySelector('#file_upload')
// const input1=document.querySelector('#file_input')
// const allinputs=document.querySelectorAll('.content')
// const submit=document.querySelector('#submit_button')
// const imageDisplay=document.querySelector('#image_display')
// const divBox=document.querySelector('#load_content')

// btn1.addEventListener('click',(e)=>{
//     e.preventDefault();
//     input1.click()
// })
// input1.addEventListener('change',(e)=>{
//     e.preventDefault()
//     let filename=e.target.files[0].name
//     btn1.textContent=filename
// })
// submit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const file=input1.files[0]
//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             imageDisplay.src = reader.result;
//         };

//         reader.readAsDataURL(file);
        
//     }
//     allinputs.forEach((input,index)=>{
//             const p=document.createElement('p');
//             p.textContent=input.value;
//             divBox.append(p)
//   })
// })

// // const reader = new FileReader(): We create an instance of the FileReader object. The FileReader is a built-in browser API that lets you read the contents of a file.

// reader.onload = function(e) { ... }: The onload event fires when the file reading operation is successfully completed. The e.target.result contains the data URL of the file.

// imageDisplay.src = e.target.result: We set the src attribute of our img tag to the data URL, which makes the image appear on the screen.

// reader.readAsDataURL(file): This method tells the FileReader to start reading the file and, once complete, it will trigger the onload event. This converts the file's data into a base64 encoded string, which can be directly used as an image source.

//assignment due -> create a form with name, email, phone number and profile pic . on submitting the form the data should be shown on the screen as a card. Add many cars as you want they all apperar side by side on the screen.