// function hello(){
//     return 894;
// }
// console.log(hello())
// //it increases the code reusability
// //function name don't be speacial characters , numbers, keyword

//other function writing methods
// let func=function(){ -> function expression
//     console.log("Hello")
// }
// func()

// //function declaration
// function abcd(){
//     return 1;
// }
// //fat arraw function
// const func=()=>{

// }

// function print(a){ //it is parameter
//    console.log(a);
// }
// print(5); //this is argument
// print(9);
// print(11);

// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(5,8,3));

// function print(a){
//     console.log(`The number is ${a}`); //this is called template literals
// }
// print(4)

//default parameters
// function add(a,b){
//     console.log(a+b);
// }
// add() -> it will print NaN bcz a and b are undefined

// function add(a=9,b=4){ //default parameters
//     console.log(a+b);
// }
// add() //13
// add(1) //it will take a as 1

// function add(a=1,b=5,c=5){
//     console.log(a+b+c);
// }
// add()
// add(4) // it will take a as 4 -> 14
// add(9,4) //18 -> it will take a as 9 and b as 4

//rest operator
// //if we pass high number of arguments then in parameter section we have to write all the parameters in order to solve that we can use rest operator
// function abcd(...val){
//     console.log(val); //in this case the output will be an array
// }
// abcd(1,2,3,4,5,6,7,8,9)
// //if this ...operator works with arrays then it will be called spread operator\

// function abcd(a,b,c,d,...val){
//   console.log(val); // 5 6 7 8 9 
//  }
//  abcd(1,2,3,4,5,6,7,8,9);

//return statement returns something after the function execution
// function abcd(v){
//     return 20+v;
// }
// console.log(abcd(60)); //80

// //first class functions -> we can treat functions as values. Functions value r moto use hobe.
// function abcd(f){
//    f();
// }
// // abcd(12)//this is value passing
// abcd(function(){
//     console.log("first class function")
// })

//higher order functions-> those functions zara function return kore or accept kore function as parameter.
//1. function abcd(val){
//    console.log(val()) -> hey . so here abcd is higher order function
// }
// abcd(function(){
//     return "hey"
// })
// function abcd(){
//    return function(){
//       console.log("Hey7e")
//    }
// }
// abcd()(); //Hey7e -> bcz return e ar ekta function ache so we call twice. abcd is higher order function

//pure vs impure functions
// //pure -> which can not modify the outside value of the function
// let a=34
// function abcd(){
//     console.log("hey")
// }
// abcd();
// console.log(a);
//impure -> which can modify the outside value of the function
// let a=23
// function abcd(){
//     a++;
// }
// abcd();
// console.log(a); //24

//closures-> where a function is returning a function . return function parent function er kono variable use kore.
// function abcd(){
//     let a=4;
//     return function(){
//        console.log(a);
//     }
// }
// abcd()() ->4

//IIFE -> a function that is immediately called
// (function(){
//    console.log("Called")
// })()

//function expression e and fat arrow function e hoisting allowed na but declaration e allowed 
/// abcd() //allowed
// function abcd(){
//     console.log("hey")
// }
// f() //reference error
// let f=function(){
//     console.log("Hey")
// }

// //use rest parameter to accept any number of scores and return the total
// function getScore(...score){
//     let sum=0;
//     score.forEach((s)=>{
//        sum+=s
//     })
//     return sum;
// }
// console.log(getScore(12,13,17,19))

//a function which does not return anything returns undefined
// [1,2,3].map(function(x){
//    console.log(x*2)
// }) -> in this case map is the higher order function

// //create an IIFE and set value to a private variable
// let iifefunc=(function(){
//     let score =0;
//     return {
//         getScore:function(){
//             return score;
//         },
//         setScore:function(){
//             score=7;
//         }
//     };
// })();
// console.log(iifefunc.setScore())
// console.log(iifefunc.getScore())


