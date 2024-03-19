// 'number' 형식은 'never' 형식에 할당할 수 없습니다.
const x:never = 12;

type A = 'A';
type B = 'B';
type Twelve = 12;

type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A'; // 정상, 'A'는 집합 {'A', 'B'}의 원소입니다.
const c: AB = 'C'; // 'C' 형식은 'AB' 형식에 할당할 수 없습니다.

// 정상, {'A', 'B'}는 {'A', 'B'}의 부분 집합입니다.
const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab; // 정상, {'A', 'B'}는 {'A', 'B', 12}의 부분 집합입니다.

declare let twelve: AB12;
const back: AB = twelve;
// 'AB12' 형식은 'AB' 형식에 할당할 수 없습니다.
// '12' 형식은 'AB' 형식에 할당할 수 없습니다.

interface Identified {
    id: string;
}

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps:PersonSpan = {
    name: "Alan Turning",
    birth: new Date("1912/06/23"),
    death: new Date("1954/06/07"),
};

type K = keyof (Person | Lifespan); // 타입이 never

keyof (A&B) = (keyof A) | (keyof B)
keyof (A|B) = (keyof A) & (keyof B)

interface Person {
    name: string;
}

interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}

function getKey<K extends string>(val: any, key:K){};


const list = [1, 2];
const tuple: [number, number] = list;

const triple:[number,number,number] = [1,2,3];
const double: [number,number] = triple;

function Identity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}

interface Point {
    x: number;
    y: number;
}
type PointKeys = keyof Point;

function sortBy<K extends keyof T, T>(vals: T[], key:K): T[]{};

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

interface GenericIdentityFn1<T> {(arg: T): T}

function logText<T>(text:T):T {
    return text;
}

let myString: GenericIdentityFn = logText;
let myString1: GenericIdentityFn1<string> = logText;

function getProperty<T, O extends keyof T>(obj:T, key:O) {
    return obj[key];
}

let obj = { a:1, b:2, c:3};
getProperty(obj,"a");
getProperty(obj,"z");



   