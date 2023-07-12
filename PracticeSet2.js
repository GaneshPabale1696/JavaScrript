//Chapter 2PS
//Problem No 1
let age=prompt("what is your age?")
age=Number.parseInt(age)
if(age>10 && age<20)
{
    console.log("Your age is lies between 10 and 20")
}
else{
    console.log("Your age is not lies between 10 and 20")
}

///
let age1=prompt("what is your age?")

switch(age1){
case '12':
    console.log("Your age is 12")
    break;
case '14':
    console.log("Your age is 14")
    break;
case '15':
    console.log("Your age is 15")
    break;
case '16':
    console.log("Your age is 16")
    break;
case '17':
    console.log("Your age is 17")
    break;
default:
    console.log("Your age is not special")
}

//problem no3
let num=prompt("What is your age?")
num = Number.parseInt(num)

if(num%2==0 && num%3==0)
{
    console.log("Your number is divisible by 2 and 3")
} else{
    console.log("your number is not divisible by 2 and 3")
}

let age2 = 19
let a = age2 > 18?"You can drive" : "You cannot drive"
console.log(a)