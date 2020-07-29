const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello World";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["JS", "Typescript"];

// Tuple - разные типы данных
const contact: [string, number] = ["Vlad", 1234567];

// Any - любой тип, для переопределения
let variable: any = 42;
// ...
variable = "New String";
variable = [];

// ==== void - функция ничего не возвращает
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Vlad");

// Never - ф-я возвращает ошибку, либо постоянно выполняется
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2 - ошибка

//2 типа
type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true - ошибка

type SomeType = string | null | undefined;
