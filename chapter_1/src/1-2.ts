// noImplicitAny는 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어합니다.

// function add (a,b) {
//     // 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
//     // 'b' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
//     return a + b;
// }

function add (a: number,b: number) {
    return a + b;
}

// strictNullChecks는 null과 undefined가 모든 타입에서 허용되는지 확인하는 설정입니다.

// strictNullChecks : false
// 정상, null은 유효한 값입니다.
// const x:number = null;

const x:number = null;
// 'null' 형식은 'number' 형식에 할당할 수 없습니다.

const y:number | null = null;