// let obj={
//     name:"Hello",
//     age:4
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj['name'])
// let obj={
//     a:1,
//     b:2,
// }
// obj['c']=3
// console.log(obj.c) //3

// let obj={
//     a:1,
//     b:{
//         c:3,
//         d:{
//             e:{
//                 f:3,
//                 g:4,
//                 h:6
//             }
//         }
//     }
// }
// // console.log(obj.b.d.e.f) //deep access

// //destructure in nestted objects
// let {f,g,h}=obj.b.d.e
// console.log(f,g,h)

// //for in loop : The for in loop iterates over a  object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// // The value of the key is person[x]
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for(let key in obj){
//     // console.log(key) // a b c
//     console.log(obj[key]) // 1 2 3
// }

//Object.keys -> creates a new array using the keys of an object

// The Object.entries() method returns an array of the key/value pairs of an object.
// // The Object.entries() method does not change the original object.
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//spread operator and Object.assign()
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// // let obj2=obj
// // console.log(obj2)
// // obj2['d']=5
// // // console.log(obj) -> modify the original object
// // let obj2={...obj}
// // console.log(obj2)
// // obj2['d']=5
// // console.log(obj2)
// // console.log(obj) -> it doesnot modify the original object

// let obj2=Object.assign({},obj) -> it does not modify the original object
// console.log(obj2)
// obj2['d']=5
// console.log(obj);
// console.log(obj2)

// //in nested object copy the children objects are passed as reference . so we don't use spread operator.
// let obj={
//     a:1,
//     b:{
//         c:1,
//         d:2
//     }
// }
// // let obj2={...obj}
// // console.log(obj2.b.c) //1
// // obj2.b.c=5;
// // console.log(obj2.b.c) //5 
// // console.log(obj.b.c) //5 
// // so we use the deep clone concept
// let obj2=JSON.parse(JSON.stringify(obj))
// console.log(obj2.b.c) //1
// obj2.b.c=5;
// console.log(obj2.b.c) //5 
// console.log(obj.b.c) //1

//optional chaining-> obj?.address?.city

//computed properties
// let role="hello"
// let obj={
//     a:1,
//     b:2,
//     [role]:'hey'
// }
// console.log(obj) // { a: 1, b: 2, hello: 'hey' }

//object keys can be booleans or numbers
