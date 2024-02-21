//Type 1
function add(a, b) {
  c = a + b;
  return c;
}
const result = add(1, 2);
console.log(result);

//Type 2
const avg = function (m1,m2,m3) {
    let avg=(m1+m2+m3)/3;
    return avg;
}

const myAvg=avg(90,80,70);
console.log(myAvg);

//Type 3
const factorial=(n)=>{
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
const myFact=factorial(5);
console.log(myFact);