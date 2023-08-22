import { type } from "os";
import { formatWithOptions } from "util";

//1
const bigNum: (x: number, y: number) => number
    = (x: number, y: number) => {
        return x > y ? x : y;
    }
bigNum(3, 6);

//2
const bigNum2: (x: number, y: number) => void = (x: number, y: number) => {
    console.log(x > y ? x : y);
}
bigNum2(3, 6);

//3
function evenOrNot(num: number): string {
    return num % 2 === 0 ? "The number is even" : "The number is odd";
}
evenOrNot(3)

//4
function stringLength(str: string): number {
    return str.length
}
stringLength("aaaaaa");
//5
function numbersN(n: number): number[] {
    const arr: number[] = []
    for (let i = 1; i < n; i++) {
        arr.push(i)
    }
    return arr
}
numbersN(6);

//6
function bigNumArr(arr: number[]): number {
    let bigNum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > bigNum) bigNum = arr[i];
    }
    return bigNum
}
bigNumArr([1, 7, 4, 9, 5, 3, 8, 6])

//7
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}
const person: Person = { name: "meir", age: 26, isStudent: true }

//8
function printPerson(person: Person): void {
    console.log(`your name is ${person.name}, your age is ${person.age}, are you a student? ${person.isStudent}`);
}
printPerson({ name: "meir", age: 26, isStudent: true })

//9
function isMinor(person: Person): boolean {
    return person.age < 18 ? true : false;
};
isMinor({ name: "meir", age: 26, isStudent: true })

//10
interface Book {
    Title: string;
    Author: string;
    Year: number;
}

//11
type Reader = Person & {favoriteBook: Book}
const reader : Reader = {name: "meir", age: 26, isStudent: true, favoriteBook:{Title:"jjj", Author:"jkk", Year: 2023}}

//12
function adultReader(arr:Reader[]): Reader{
    let age: number = 0;
    let old: Reader = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > age) old = arr[i]
    }
    return old
}

//13
function oldBook (arr:Reader[]):Book{
    let year: number = 0;
    let oldBook: Book = arr[0].favoriteBook;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.Year < year) oldBook = arr[i].favoriteBook
    }
    return oldBook
}