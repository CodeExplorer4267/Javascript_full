 //in js arrays can hold different types of values
 //create , access, modify ->done
//push-> add elements at the end of the array , pop->remove elements from the end of the array
// let a=[12,5,7,76];
// a.push(54)
// console.log(a)
// a.pop();
// a.pop()
// a.pop()
// console.log(a) //12 5

//shift->first thek elements remove hobe; unshift-> first e elements add korbe
// let a=[1,2,3,4,5]
// a.unshift(78)
// console.log(a) //78 1 2 3 4 5
// a.shift();
// a.shift()
// console.log(a) //2 3 4 5

//splice(kon index thek remove hobe,koto gulo remove hobe)
// let a=[1,2,3,4,5,6];
// // a.splice(2,4);
// // console.log(a) // 1 2
// // a.splice(3,1)
// // console.log(a) //1 2 3 5 6
// a.splice(2,2)
// console.log(a) // 1 2 5 6 

// //slice(kon index thek remove hobe , kon index er ager index obdhi remove hobe). it does not modify the original array. it creates a newone
// let a=[1,2,3,4];
// let newarr=a.slice(0,2)
// console.log(newarr) //1 2 

// a=[12,8,1,78,34,100];
// let newarr=a.sort(function(a,b){
//     return a-b; //ascending order for descending-> b-a;
// })
// console.log(newarr)

// forEach()-> executes the function for every element in array
//ex -> a[1,8,5,2,9] -> add 5 to every element in the array
// let a=[1,8,5,2,9];
// a.forEach((val)=>{
//    console.log(val+5)
// })

//map creates a newarray based on the data of the current array.
// let a=[5,8,2,1,9];
// // let newarr=a.map((e)=>{
// //     return 13;
// // })
// // console.log(newarr) //13 13 13 13 13
// let newarr=a.map((e)=>{
//     return e+6;
// })
// console.log(newarr) //11 14 8 7 15
//return na dile sob undefined asbe