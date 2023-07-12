let a = prompt("Hey whats your age?");
a=Number.parseInt(a)//converting  the String  to a number
if(a>0){
    alert("This is a valid age");
} else if(a<9)
{
    alert("You are a kid you can not think of driving");
} else if(a<18&&a>=9)
{
    alert("You are a kid and you think of driving after 18")
}
else{
    alert("You can drive as you are above 18")
}
console.log("Done")

console.log("You can",(a<18? "not drive":"drive"))

