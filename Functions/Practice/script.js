//write a BMI calculator 
// function bmi(weight,height){
//    return weight/(height*height);
// }

// console.log(bmi(70,1.5))

//reusable discount calculator
// function discount(d){
//     return function(amount){
//        return amount-(amount*d/100);
//     }
// }

// let c1=discount(10);
// console.log(c1(1900))

// //counter using closures
// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// let c1=counter();
// c1() //1
// c1() //2
// c1() //3
// c1() //4
// let c2=counter();
// c2() //1