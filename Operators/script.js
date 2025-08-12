//Arithmatic
// + , -, * , / , % , ** 
// console.log(8+9); //addition
// console.log("jf"+"ifj") //concatenation

// console.log(8-32) //-24
// console.log("jf"*6) // NaN
// console.log(8*7)//56
// console.log(89/6) //14.833333...
// console.log(90%4) //2 
// console.log(3**2) // it is exponential operator. op->9

//comparison
// // =, ==, ===, != , !==, >=, <=, > , < 
// let a=9 //assign
// console.log(56==56); //true
// console.log(56=="56"); //true
// //== does not check the type of the variable
// console.log(45==="45") //false
// //===checks value as well as type

//assignment
// =, += , -=, *=, /=, %=

//logical 
// && , || 

// console.log(!90)//false

//unary -> +,-,!, type of, ++, --
// console.log(+"9") //9
// console.log(-"9") //-9
// console.log(-9) //-9
// console.log(+"djsk") //NaN
// console.log(-"djsk") //NaN
// // console.log(!90) //false
// let a=90
// console.log(a++) //90
// console.log(a) //91
// console.log(++a) //92
// console.log(--a + ++a - a + a++); //183
// console.log(4==7?"equal":"not equal") //not equal

// console.log(typeof null) //object
// console.log(typeof []) //object

//instance of -> to check if a variable is belong to a certain class or not
//it works only on reference values like array object etc
// let a=[];
// let b=90;
// let c={

// }
// console.log(a instanceof Array) //true
// console.log(b instanceof Number) //false
// console.log(c instanceof Object)//true

// let a=true;
// let b=false;
// let access=a && b ? "Allow" : "Deny";
// console.log(access) //deny

// let x=3
// let y= ++x - x-- + --x + x++;
// console.log(++y - y++ + --y , x-y); // 5 -2