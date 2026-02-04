"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     var result = 50;
// }

// console.log(result);

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// ['vruru', 'rurur', 'vvugiegv'].map(a => )

// data 
// response

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

// const COLOR_RED = '#F00';

// let number = 4.6;

// console.log(-4 / 0);
// console.log('string' * 9);

// const persone = `5`;

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr[10]);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };

// arrObj.b = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);

// const obj = {
//     Anna: 500,
//     'Alice': 800
// };




// let storeName = 'IKEA';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Ivan', 'Liza', 'Vitya'],
//     products: {
//         'milk': 15,
//         'banana': 10
//     },
//     open: true
// }




// const result = confirm("Are you here?");
// console.log(result);




// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);





// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof (answers));




// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);




// const user = "Ivan";

// alert(`Hello ${user}`);





// console.log('arr' + " - object");
// console.log(4 + "5");
// console.log(4 + +"5");





// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);



// console.log(5 % 2);

// console.log(2 + 2 * 2 !== 8);
// console.log(2 * 4 == 8);
// console.log(2 * 4 == '8');
// console.log(2 * 4 === 8);
// console.log(2 * 4 === '8');



// const isChecked = true,
//     isClose = false;

// console.log(isChecked && !isClose);
// console.log(isChecked || isClose);



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

