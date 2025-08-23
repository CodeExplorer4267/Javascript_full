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

//filter-> creates a newarray based on some conditions . in this we return true or false based on some conditions.
// let a=[5,8,2,4,9,3];
// let newarray=a.filter((val)=>{
//     if(val > 4){
//         return true;
//     }
// })
// console.log(newarray) // 5 8 9

//reduce -> to create a single value based on the values present in the array
// let a=[13,7,4,9];
// let ans=a.reduce((acc,val)=>{
//    return acc+val; //for 13 it is 0+13 and sum is stored as acc
// },0) //we initialize the acc as 0
// console.log(ans);

// //find()-> returns the first value that matches the condition
// let a=[4,8,3,0,6,1];
// let b=a.find((val)=>{
//     return val===3
// })
// console.log(b); //3
// let a=[{id:1,key:2},{id:2,key:2},{id:3,key:8}];
// let b=a.find((val)=>{
//     return val.id===2 //2nd one
// })
// console.log(b);

// //some()->The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// let a=[3,7,8,2];
// let b=a.some((val)=>{
//     // return val>7;
//     return val >30
// })
// // console.log(b) //true
// console.log(b); //false

//the every() checks if every elements passes the condition or not
// let a=[3,5,7,8];
// let b=a.every((val)=>{
//     // return val > 0
//     return val > 7
// })
// // console.log(b) //true
// console.log(b);//false

// //destructuring-> we can pick up array variables into our own variables . we can take any name.
// let a=[4,8,0,3,6];
// // let [first,second]=a;
// // console.log(first) //4
// // console.log(second) //8
// let [,,first,,second]=a;
// console.log(first) //0
// console.log(second) //6
// // we can store in any order as we want. if we want to skip the value just leave blank with a comma.

