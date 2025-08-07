// // var a;
// var a=23;
// //in var declaration, we can redeclare the variable. we can declare and initialize it in the same line or separately.
// //in var window te add hy. and function scoped hoy.
// // let b;
// // let b="cms" //in let declaration, we cannot redeclare the variable. we can declare and initialize it in the same line or separately.
// let b;
// b="ieo" //true
// let c=949; //true
// const hello=583 //in const declaration, we cannot redeclare the variable. we must initialize it at the time of declaration. and we can't change the value of the variable later.
// // hello="jfks" //false

// // function abcd(){
// //     if(true){
// //         var a=24;
// //     }
// //     console.log(a) //can be accessible inside anywhere in the function scope.
// // }
// // abcd()

// var a=23;
// {
//     var b=78;
// }
// console.log(b); //can be accessible outside the block scope because of var declaration.because var is function scoped and not block scoped.


// {
//     let b=88;
// }
// console.log(b); //cannot be accessible outside the block scope because of let declaration.let is block scoped and not function scoped.

// console.log(tdz)

// let tdz=46; //from line 1 to 34 it is the temporal dead zone of tdz. Temporal dead zone is the time from the start of the block until the variable is declared. During this time, the variable is not accessible and will throw a ReferenceError if accessed.
//it is applied for let and const, not for var.

//hoisting impact for three types
// Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.
//  var a=23;
//  //then it will break into two parts. 1. declaration part will be moved to the top of the scope.
//  var a=undefined;
//  a=23;
//  var->hoist hoy-> value set hoy undefined
//  let->hoist hoy -> value set hoy na reference error ase
//  const -> hoist hoy -> value set hoy na reference error ase

// var x=1;
// {
//     var x=2;
// }
// console.log(x); //2

//in object if we update a property, const will allow it, but if we try to reassign the object, it will throw an error.
// const obj={
//     name:"Rupam"
// }
// obj.name="Hekek";
// // obj={} //will throw an error because we are trying to reassign the object, which is not allowed with const.

// // The Object.freeze() method prevents any changes to an object.
// Object.freeze(obj)
// console.log(obj)
// obj.name="name2";
// console.log(obj) //not change 