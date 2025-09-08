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

//mouseover and mouse out event listener -> mouse over mane hover korle and mouse out mane hover theke ber hole
//create a div on hovering bg should be red and on mouse out it should be yellow
// const div=document.querySelector('#box_div');
// div.addEventListener('mouseover',(e)=>{
//     div.style.backgroundColor="red"
// })
// div.addEventListener('mouseout',(e)=>{
//     div.style.backgroundColor="yellow"
// })

//mousemove event listener -> jokhon mouse move korbe tokhon trigger hobe
// create a div and on moving the mouse it will move with the mouse
// div.addEventListener('mouseover',(e)=>{
//     e.preventDefault()
//     div.style.backgroundColor="red"
// })
// window.addEventListener('mousemove',(e)=>{
//     div.style.position="absolute"
//     div.style.left=`${e.clientX-50}px`
//     div.style.top=`${e.clientY-50}px`
// })

//event object-> 
// const div=document.querySelector('#box_div');
// div.addEventListener('click',(e)=>{ //thst e is the event object
      
// })
//zar upor actual event hoy that is target

//event bubbling and capturing
 //event bubbling->kono element er upor event asle and otate event listener na thakle oi event oi element er parent element e khujbe erom korte korte upor dik move korbe joto khon na event listener pabe ba document er upor chole asbe. zodi child and parent er duitar e event listener thake tahole age child er event listener kaj korbe tarpor parent er

//  const p=document.querySelector('p')
//  const nav=document.querySelector('#nav');
//  const main=document.querySelector('#main');
// //  p.addEventListener('click',(e)=>{
// //     alert("Clicked on paragraph")
// //  })
// // nav.addEventListener('click',(e)=>{
// //     alert("Clicked on Nav")
// // })
// main.addEventListener('click',(e)=>{
//     alert("Clicked on main") -> nav e listener nei tai main e jabe direct
// })

//create 5 li tags and whenever each tag is clicked it should cross it and make it toggle
// const ul=document.querySelector('ul')
// ul.addEventListener('click',(e)=>{
//     e.target.classList.toggle('lt')
// })

//amra zokhon click kori ba kono event raise kori. sei event flow ta 2 to phase e chole. 
//phase 1 : event top level element thek nicher dike asbe
//phase 2 : event raised element thek parent er dike jabe
//first e phase 1 hoy.
//first e capture phase then bubbling phase

// let p1=document.querySelector('.parent1')
// let p2=document.querySelector('.parent2')
// let p3=document.querySelector('.parent3')
// let p4=document.querySelector('.parent4')
// let child=document.querySelector('.child')

// child.addEventListener('click',(e)=>{
//     alert("Child Clicked")
// })
// p3.addEventListener('click',(e)=>{
//     alert("Parent 3 clicked")
// })
// p1.addEventListener('click',(e)=>{
//     alert("parent 1 clicked")
// },true) //this is capturing phase 

//create an input box and print how many character are typed
let input=document.querySelector('input');
let btn=document.querySelector('#btn')
let count=0;
input.addEventListener('input',(e)=>{
    count++;
})
btn.addEventListener('click',(e)=>{
    let h1=document.createElement('h1');
    h1.textContent="You have typed "+count+"characters";
    document.body.appendChild(h1)
})
