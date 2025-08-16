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