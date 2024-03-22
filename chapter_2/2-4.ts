const s:String = "primitive";
const n:Number = 12;
const b:Boolean = true;
function getStingLen(foo: String) {
    return foo.length;
}

console.log(getStingLen("hello"));
console.log(new String("hello"));

function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase);
    // 'String' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
    // string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다. 가능한 경우 'string'을(를) 사용하세요.
}

interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

const r : Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elepahant: 'present',
    // 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Room' 형식에 'elepahant'이(가) 없습니다.
}

const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
}

const r2 : Room = obj;

interface Options {
    title: string;
    darkMode?: boolean;
}

function createWindow(options: Options) {
    if(options.darkMode) {
        setDarkMode();
    }
}

createWindow({
    title: "Cat Queen",
    darkmode: true
    // 개체 리터럴은 알려진 속성만 지정할 수 있지만 'Options' 형식에 'darkmode'이(가) 없습니다. 'darkMode'을(를) 쓰려고 했습니까?
})

const o1: Options = document;
const o2: Options = new HTMLAnchorElement;

const o: Options = { darkmode: true, title: 'Ski Free' };
// 개체 리터럴은 알려진 속성만 지정할 수 있지만 'Options' 형식에 'darkmode'이(가) 없습니다. 'darkMode'을(를) 쓰려고 했습니까?

const intermediate = { dakrmode: true, title: 'Ski Free' };
const o4: Options = intermediate;

const o5 = { dakrmode: true, title: 'Ski Free' } as Options; // 정상

interface Options1 {
    darkMode?: boolean;
    [otherOptions: string]: unknown;
}
const o6: Options1 = { darkmode: true }; // 정상
interface LineChartOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean;
}
const opts = { logScale: true };
const o7: LineChartOptions = opts;
// '{ logScale: boolean; }' 유형에 'LineChartOptions' 유형과 공통적인 속성이 없습니다.