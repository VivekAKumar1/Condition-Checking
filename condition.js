
let age = prompt("Enter the Age :");

if(age < 18){
    console.log("Your are child");
} 
else if( age > 60)
{
    console.log("Your are Old");
}
else if(age > 18 && age < 60)
{
    console.log("Your are Young men");
}
else
{
    console.log("Your not men");
} 

// To Print the Product key
const product ={  
    name : "Bell pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);
console.log("To print the specific Product key Value :",product.offer);

//To Check the Number is even or not ??

let a = prompt("Enter the any Positive Number to Check Even or Not : ");

if ( a%2 == 0)
{
  console.log("the No. is even");
} 
else{
    console.log("the No. is odd");
}


