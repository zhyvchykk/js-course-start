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



// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('A lot');
// } else {
//     console.log('Ok');
// }



// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('A lot');
//         break;
//     case 50:
//         console.log('Ok');
//         break;
//     default:
//         console.log('Not this time');
//         break;
// }



// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dfdf');



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Good');
// } else {
//     console.log('We go out');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);



// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);



// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }



// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);



// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }



// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }



// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }



// for (let i = 20; i > 9; i--) {
//     if (i === 13) break;
//     console.log(i);
// }



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }



// let i = 2;
// while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// const result = [];
// for (let i = 5; i < 11; i++) {
//     result.push(i);
// }
// console.log(result);



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
// }
// console.log(result);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof data[i] === 'string') {
//         data[i] = data[i] + ' - done';
// }
// }
// console.log(data);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = data.length - 1; i >=0; i--) {
//     result.push(data[i]);
// }
// console.log(result);



// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);



// const lines = 5;
// let result = '';

// for (let i = lines; i >= 0; i--) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);



// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);



// let a = 3
// function addTwo(x) {
//   let ret = x + 2
//   return ret
// }
// let b = addTwo(a)
// console.log(b)



// let val1 = 2
// function multiplyThis(n) {
//   let ret = n * val1
//   return ret
// }
// let multiplied = multiplyThis(6)
// console.log('example of scope:', multiplied)



// let val = 7
// function createAdder() {
//   function addNumbers(a, b) {
//    let ret = a + b
//     return ret
//   }
//   return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum);



// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()
//  console.log('example increment', c1, c2, c3);



// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }


// let notebook = [];
// for (let i = 0; i <= 10; i++) {
//     let number = +prompt("Write number:", " ");
//     if (number % 2 == 0) {
//         notebook += number + ',';
//     }
// }
// alert(notebook);



// let i = 0;
// while (i < 3) {
//     alert(`number ${i++}!`);
// }



// let num;
// do {
//     num = +prompt('write number', ' ');
// } while (num <= 100 && num);



// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     }

//     console.log(i); // простое число
// }



// const i = 5;
// for (let x = 0; x < 10; x++) {
//     y = i
//     while (y > 0) {
//         y -= 1;
//         console.log(y);
//     }
// }



// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(8, 3));
// console.log(calc(5, 6));


// function ret() {
//     let num = 50;

//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => { return a + b };



// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);



// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);



// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

// sayHello("Alex");

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);




// function getMathResult(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);



// const str = "teSt";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// const fruit = "Some fruit";
// console.log(fruit.indexOf("q"));



// const logg = "Hello World";
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));



// const num = 12.2;
// console.log(Math.round(num));



// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



