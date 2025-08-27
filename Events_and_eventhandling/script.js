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

