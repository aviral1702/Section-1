const user={name:'Aviral',email:'avi@gmail.com',password:'12345'};
console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.email='aviral@gmail.com';
console.log(user);

user.address='Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone={
    brand:'Apple',
    model:'iPhone 12',
    color:['Black','White','Red'],
    price:80000
};
console.log(smartphone.brand);
console.log(smartphone.color[1]);
console.log(smartphone.color[1]='Green');
console.log(smartphone.color);
smartphone.color.push('Blue');
console.log(smartphone.color);

const phoneList=[
    {brand:'Apple',model:'iPhone 12',color:['Black','White','Red'],price:80000},
    {brand:'Samsung',model:'Galaxy S21',color:['Black','White','Red'],price:70000},
    {brand:'OnePlus',model:'8T',color:['Black','White','Red'],price:45000},
    {brand:'Xiaomi',model:'Mi 11',color:['Black','White','Red'],price:50000}
];
console.log(phoneList[0].price);
console.log(phoneList[0].brand);
console.log(phoneList[0].color[1]);

console.log(phoneList[1].price);
phoneList[phoneList.length-1].color[1]='Yellow';
console.log(phoneList);