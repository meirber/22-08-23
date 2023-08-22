"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
var bigNum = function (x, y) {
    return x > y ? x : y;
};
bigNum(3, 6);
//2
var bigNum2 = function (x, y) {
    console.log(x > y ? x : y);
};
bigNum2(3, 6);
//3
function evenOrNot(num) {
    return num % 2 === 0 ? "The number is even" : "The number is odd";
}
evenOrNot(3);
//4
function stringLength(str) {
    return str.length;
}
stringLength("aaaaaa");
//5
function numbersN(n) {
    var arr = [];
    for (var i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr;
}
numbersN(6);
//6
function bigNumArr(arr) {
    var bigNum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > bigNum)
            bigNum = arr[i];
    }
    return bigNum;
}
bigNumArr([1, 7, 4, 9, 5, 3, 8, 6]);
var person = { name: "meir", age: 26, isStudent: true };
//8
function printPerson(person) {
    console.log("your name is ".concat(person.name, ", your age is ").concat(person.age, ", are you a student? ").concat(person.isStudent));
}
printPerson({ name: "meir", age: 26, isStudent: true });
//9
function isMinor(person) {
    return person.age < 18 ? true : false;
}
;
isMinor({ name: "meir", age: 26, isStudent: true });
var reader = { name: "meir", age: 26, isStudent: true, favoriteBook: { Title: "jjj", Author: "jkk", Year: 2023 } };
//12
function adultReader(arr) {
    var age = 0;
    var old = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > age)
            old = arr[i];
    }
    return old;
}
//13
function oldBook(arr) {
    var year = 0;
    var oldBook = arr[0].favoriteBook;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.Year < year)
            oldBook = arr[i].favoriteBook;
    }
    return oldBook;
}
