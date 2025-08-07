//primitive datatypes -> if we copy a primitive datatype, we copy the value...any chnages to copied variable will not affect the original variable
// let a=10;
// let b=a;
// b=b+7;
// console.log(a); // 17
// console.log(b); // 10
// //string, number, boolean, null, undefined, symbol, bigint

// //reference datatypes -> if we copy a reference datatype, we copy the reference...any changes to copied variable will affect the original variable
// let a=[1,2,3];
// let b=a;
// b.push(5)
// console.log(a); //1 2 3 5
// console.log(b); // 1 2 3 5

// let a = 48.483;
// console.log(a); //48.483
// console.log(a.toFixed(2)); //48.48
// console.log(a.toPrecision(2)); //48

//if we don't know what to assign to a variable, we can assign null
//null vs undefined
// undefined	Null
// Indicates a variable that has been declared but not yet assigned a value.	Represents the intentional absence of any object value.
// Primitive data type in JavaScript.	Primitive data type in JavaScript.
// Automatically assigned to variables that are declared but not initialized.	Must be explicitly assigned to a variable.
// undefined == null // true (loose equality considers them equal).	undefined == null // true (loose equality considers them equal).

//symbol-> unique immutable value
// let u1=Symbol("uid")
// let u2=Symbol("uid")
// console.log(u1===u2); // false -> because they are unique

// const obj={
//     name:"Rupam",
//     age:23,
//     uid:2
// }
// const u1=Symbol("uid");
// obj[u1]=8;
// console.log(obj)

// // Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// // Number.MAX_SAFE_INTEGER is (2^53 - 1).
// let a = 9007199254740991;
// console.log(a+4) //9007199254740996 because it is not bigint
// // BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
// let b=9007199254740991n;
// console.log(b+5n) //9007199254740996n

// //in static typing we can't change the type of a variable after it has been declared
// // int a=12;
// // a="jgide"; //this is wrong
// let a=12;
// a="Hello";
// console.log(a) //hello

// console.log(typeof null) //object   
// console.log(typeof NaN) //number   

//type coercion -> concept where one type converts to another type
// console.log(typeof("6"+5+9)) //string
// console.log(typeof("89"-9)) //number because subtract performs only one task but + performs concat and add