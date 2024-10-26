// 1. Написать по 2 примера создания примитивных значений
// (если есть несколько способов - использовать)
// (string, number, boolean, null, undefined, symbol, bigInt)

// String
const str1 = "Привет";
const str2 = 'Мир';
const str3 = new String(str1 + " " + str2);
const str4 = String(123);
const str5 = `${str1} Мир`;

// Number
const num1 = 42;
const num2 = 3.14;
const num3 = new Number(123);
const num4 = Number("42");
const num5 = Infinity;
const num6 = -Infinity;
const num7 = NaN;
const num8 = +'1';

// Boolean
const bool1 = true;
const bool2 = false;
const bool3 = new Boolean(true);
const bool4 = Boolean(1);
const bool5 = !1;
const bool6 = !!1;

// Null
const nullValue = null;

// Undefined
const undefined1 = undefined;
let undefined2; // объявление переменной без присваивания

// Symbol
const symbol1 = Symbol("so11me22symbo89ls");
const symbol2 = Symbol.for("global_symbol");

// BigInt
const bigInt1 = 9007199254740991n;
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt("9007199254740991");


// 2. Решить:

const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN

const res2 = (true && 3) + "d";
console.log(res2); // 3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); // trued