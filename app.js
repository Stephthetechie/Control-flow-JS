// Input validation
let number;
while (number >= 100) {
  number= prompt('Enter a number')
}
console.log(`Number ${number} is valid`)

while (number >=50 || number <= 100) {
   number= window.prompt('Enter a number')
} console.log(`Number ${number} is between 50 and 100`);

// FizzBuzz
for (let i = 1; i <= 100; i++) {
   console.log(i)
  if (i % 15 === 0) {
      console.log("FizzBuzz")
  } else if(i % 5 === 0){
   console.log("Buzz");
  }else if(i % 3 === 0){
   console.log("Fizz");
  }else{
   console.log(i)
  }
}

// Multiplication table
let num;
num = prompt("Enter a number")
for (let i = 1; i <=  10; i++) {
   console.log(`${num} x ${i} = ${num * i}`)
   
}
for (let i = 1; i >= 2 && i <= 9; i++) {
   console.log(`${num} x ${i} = ${num * i}`)
}