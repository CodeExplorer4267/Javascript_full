//website body=DOM . if we change inside dom that is dom manipulation.this is a tree type structure.  
// 1.select element using html 2. change the text 3. change the css 4. change the html 5. change the attribute 6.event listeners add

// let abcd=document.getElementById("head");-> select element by ID
// console.log(abcd)
// let abcd=document.getElementsByClassName("head")
// console.log(abcd)
// //output -> this is an array type structure
// // HTMLCollection { 0: h1.head
// // , length: 1 }
// // ​
// // 0: <h1 class="head">
// // ​
// // length: 1

// let abcd=document.querySelector('h1') -> if there is multiple same tag it will select the first one
// console.log(abcd)
// let abcd=document.querySelector('.head') or '#head'
// console.log(abcd) 
// let abcd=document.querySelectorAll('.head');
// console.log(abcd)

// querySelector():
// This method returns only the first element within the document that matches the specified CSS selector(s).
// If no matching element is found, it returns null.
// querySelectorAll():
// This method returns a static NodeList containing all elements in the document that match the specified CSS selector(s).
// If no matching elements are found, it returns an empty NodeList.


// //kono element er moddhe html dite hole we use innerHTML
// let h1=document.querySelector('#head');
// h1.innerHTML="<i>content changed</i>"

// //innerText and textContent-> change the text
// let h1=document.querySelector('#head');
// // h1.innerText="Hey guys"
// // h1.textContent="Hello"

// // let a=document.querySelector('a')
// // a.href="https://www.google.com"
// let a=document.querySelector('.google')
// let b=document.querySelector('.facebook')
// a.setAttribute('href','https://www.google.com')
// b.setAttribute('href','https://www.facebook.com')
// console.log(a.getAttribute('href'))
// a.removeAttribute('href')

//element create then append or prepend
let h1=document.createElement('h1')
h1.innerText="Hello how are you"
document.querySelector('body').append(h1)
let h2=document.createElement('p')
h2.textContent="I am fine"
// document.querySelector('body').append(h2) //ager element err pore asbe
document.querySelector('body').prepend(h2) //ager element err age asbe