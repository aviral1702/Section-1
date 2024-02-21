const arr=[1,'Aviral',true,3.14,false,null];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
const movies=['The Shawshank Redemption','The Godfather','The Dark Knight','The Godfather: Part II','12 Angryy'];
console.log(movies.length);

//adding elements
movies.push('Doremon'); //add at end
movies.unshift('Tom and Jerry'); //add at start

console.log(movies);

//removing elements
movies.pop(); //remove from end
movies.shift(); //remove from start
console.log(movies);

//indexing
console.log(movies.indexOf('The Dark Knight'));
console.log(movies[748374]);
console.log(movies.at(-2));
console.log(movies[1]);

//slicing
console.log(movies.slice(1,3));
console.log(movies.slice(1));