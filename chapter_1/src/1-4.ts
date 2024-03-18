let age:number;
age = '12';
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.
age = '12' as any; // OK

age += 1; // 런타임에 정상, age는 '121'

function calculateAge(birthDate: Date): number {
    return birthDate.getFullYear();
}

// 'string' 형식의 인수는 'Date' 형식의 매개 변수에 할당될 수 없습니다.
// let birthDate = '1998-09-09';
// calculateAge(birthDate);

let birthDate: any = '1998-09-09';
calculateAge(birthDate);

