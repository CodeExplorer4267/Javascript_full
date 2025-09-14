//setTimeout(()=>{
    // },time in miliseconds)
//oi particular time er por function cholbe ekbar e
//setInterval er syntax same and eta oi time interval ontor function chalabe
// setTimeout(()=>{
//    console.log("Hello")
// },4000)
// setInterval(()=>{
//    console.log("Hello")// proti 4 sec ontor cholbe
// },4000)

// In JavaScript, clearTimeout() and clearInterval() are functions used to manage and stop timers that have been previously set using setTimeout() and setInterval(), respectively.
// 1. clearTimeout():
// Purpose:
// This function is used to cancel a timeout that was initiated with setTimeout().
// Usage:
// setTimeout() schedules a function to be executed once after a specified delay and returns a unique ID for that timeout. clearTimeout() takes this ID as an argument to prevent the scheduled function from running if the delay has not yet expired.
// let st=setTimeout(()=>{
//     console.log("hello")
// },4000)
// clearTimeout(st)

// 2. clearInterval():
// Purpose:
// This function is used to stop a repeating interval that was initiated with setInterval().
// Usage:  
// setInterval() schedules a function to be executed repeatedly at a specified interval and returns a unique ID for that interval. clearInterval() takes this ID as an argument to stop the repetitive execution of the function.
// let si=setInterval(()=>{
//     console.log("hello")
// },3000)
// clearInterval(si)

//create a counter that will count from 10 to 0..after reaching 0 it will stop
// let count=10;
// let si=setInterval(()=>{
//    console.log(count);
//    count--;
//    if(count < 0){
//       console.log("Time Out")
//       clearInterval(si)
//    }
// },1000)

//create a download progress bar
// let prog=document.querySelector('.download_progress')
// let perc=document.querySelector('.percentage')
// let count=0;
// let interval=setInterval(()=>{
//    if(count > 100){
//       clearInterval(interval)
//       let h1=document.createElement('h1');
//       h1.textContent="Your download is finished";
//       h1.style.textAlign="center"
//       document.body.appendChild(h1)
//    }
//    else{
//      prog.textContent=`${count}%`;
//      perc.style.width=`${count}%`
//      count++;
//    } 
// },30)
