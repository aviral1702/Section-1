// 1. WAP to check if a number is prime
let num=11;
let isPrime=true;
if(num===1){
  console.log('1 is neither prime nor composite');
}
else if(num>1){
  for(let i=2;i<num;i++){
    if(num%i===0){
      isPrime=false;
      break;
    }
  }
  if(isPrime){
    console.log(`${num} is a prime number`);
  }
  else{
    console.log(`${num} is not a prime number`);
  }
}

// 2. WAP to find all prime numbers in range of 100 - 600
let start=100;
let end=600;
let primeNumbers=[];
for(let i=start;i<=end;i++){
  let isPrime=true;
  if(i===1){
    continue;
  }
  for(let j=2;j<i;j++){
    if(i%j===0){
      isPrime=false;
      break;
    }
  }
  if(isPrime){
    primeNumbers.push(i);
  }
}
console.log(primeNumbers);

// 3. WAP to print fibonacci series
let n=10;
let a=0;
let b=1;
let c;
let fibSeries=[];
for(let i=0;i<n;i++){
  fibSeries.push(a);
  c=a+b;
  a=b;
  b=c;
}
console.log(fibSeries);

// 4. Create a function to find area of a triangle
function areaOfTriangle(base,height){
  return 0.5*base*height;
} 
console.log(areaOfTriangle(10,20));

// 5. Create a function to reverse a number
function reverseNumber(num){
  let reverse=0;
  while(num>0){
    reverse=reverse*10+num%10;
    num=Math.floor(num/10);
  }
  return reverse;
}
console.log(reverseNumber(123456789));