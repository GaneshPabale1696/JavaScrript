//program to add first n natural numbers
let sum=0
let n = prompt("enter the value of n")
n=Number.parseInt(n)
for(let i=0;i<n;i++)
{
    sum=sum+i 
}
console.log("Sum of first" + n +"natural numbers is"+ sum)


let obj ={
    harry:90,
    shubh:45,
    shivika:56,
    ritika:57,
    shiv:23
}

// For in loop
for(let a in obj){
    console.log("marks of " + a + " are "+ obj[a])
}

//for of loop
for(let b of "Harry"){
    console.log(b)
}