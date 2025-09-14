//localstorage-> browser er moddhe data store hy . zeta browser bondho holeo delete hbe na.
//sessionstorage-> data temporarily store hy. tab bondho hole data delete hye jabe.

//cookies->data store kore. data browser er cookies namer property er moddhe save hoy. cookis are for light weight data or small data.

// localStorage.setItem("name","Rupam")-> store the value <key,value>
// console.log(localStorage.getItem("name"))->fetch the data from localstorage
//how to remove an item
// localStorage.removeItem("name")
//how to update an value
// localStorage.setItem("name","Rupam")
// localStorage.setItem("name","Rupam3")
// console.log(localStorage.getItem("name"))

//sessionStorage properties-> setItem(),getItem(),removeItem()
// sessionStorage.setItem("name","Rupam")-> tab close korle delete hye jabe
//how to clear entire sessionstorage-> sessionStorage.clear()

//cookies can store approximately 4kb data where local and session storage store upto 5mb of data.
 //cookies er moddhe ze data store thake seta page reload kora hole automatically server e jabe.
// document.cookie="name=Rupam"
// console.log(document.cookie)

//localstorage only saves string if we want to store other things like array, object , number etc -> it will convert them as string.
//or we can convert them to string then save
// localStorage.setItem("numbers",JSON.stringify({one:"1",two:"2"}))-> it can be also used for arrays

//now if we want to get the original object type we will use JSON.parse()
// localStorage.getItem("numbers")-> returns string
// JSON.parse(localStorage.getItem("numbers"))->returns original object

//How to get the OS display mode dark or light in js, just property no code
 