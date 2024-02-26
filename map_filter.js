const num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]**2);
}
console.log("/////////////////////////////////////////////////");

for(let i of num){
    console.log(i**2);
}   
console.log("/////////////////////////////////////////////////");

num.forEach((a,z) => {
    console.log(a**2);  
});
console.log("/////////////////////////////////////////////////");

let newArr=[];
num.forEach((a) => {
    newArr.push(a**2);
});
console.log(newArr);
console.log("/////////////////////////////////////////////////");

// map function
const newArr2=num.map((a) => {
    return a**2;
});
console.log(newArr2);
console.log("/////////////////////////////////////////////////");

const fruits=['apple','grapes','lichi','papaya','kiwi','strawberry'];
const fruitList=fruits.map((a) => {
    return a.toUpperCase();
});
console.log(fruitList);
console.log("/////////////////////////////////////////////////");

const prices=['$56.674','$1289.9','$100.00','$45.384'];
const priceList=prices.map((a) => {
    return parseInt(a.slice(1));
});
console.log(priceList);
console.log("/////////////////////////////////////////////////");

// filter function
const prices2=[1200,5000,3400,9000,300,4999,12000];
const budgetPrices=prices2.filter((a) => {
    return a<5000;
});
console.log(budgetPrices);
console.log("/////////////////////////////////////////////////");

const newFruit=fruits.filter((a) => {
    return a.length<=5;
});
console.log(newFruit);
console.log("/////////////////////////////////////////////////");

const phoneList=[
    {brand:'Apple',model:'iPhone 12',color:['Blue','White','Red'],price:80000},
    {brand:'Samsung',model:'Galaxy S21',color:['Black','White','Red'],price:70000},
    {brand:'OnePlus',model:'8T',color:['Black','White','Red'],price:45000},
    {brand:'Xiaomi',model:'Mi 11',color:['Black','White','Red'],price:50000},
    {brand:'Samsung',model:'J7',color:['Black','White','Red'],price:20000}
];
const budgetPhones=phoneList.filter((a) => {
    return a.price<50000;
});
console.log(budgetPhones);
console.log("/////////////////////////////////////////////////");

const brandPhones=phoneList.map((a) => {
    return a.brand;
});
console.log(brandPhones);
console.log("/////////////////////////////////////////////////");

const colorPhones=phoneList.filter((a) => {
    return a.color.includes('Black');
});
console.log(colorPhones);
console.log("/////////////////////////////////////////////////");

const samsungPhones=phoneList.filter((a) => {
    return a.brand==='Samsung';
});
console.log(samsungPhones);
console.log("/////////////////////////////////////////////////");
