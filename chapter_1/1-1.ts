// const states = [
//     {name: 'Alabama', capitol: "Montgomery"},
//     {name: 'Alaska', capitol: "Juneau"},
//     {name: 'Arizona', capitol: "Phoenix"},
// ];

// for (const state of states) {
//     console.log(state.capitol);
// }


// 명시적으로 states를 선언하여 의도를 분명하게 하는 것이 좋다 
// 이제 오류가 어디에서 발생했는지 찾을 수 있고, 의도를 명확히 해서 타입스크립트가 잠재적 문제점을 찾을 수 있게 수정함.

interface State {
    name: string;
    capital: string;
}

const states: State[] = [
    {name: 'Alabama', capital: "Montgomery"},
    {name: 'Alaska', capitol: "Juneau"},
    // 개체 리터럴은 알려진 속성만 지정할 수 있지만 'State' 형식에 'capitol'이(가) 없습니다. 'capital'을(를) 쓰려고 했습니까?
    {name: 'Arizona', capital: "Phoenix"},
]

for (const state of states) {
    console.log(state.capitol);
    // 'capitol' 속성이 'State' 형식에 없습니다. 'capital'을(를) 사용하시겠습니까?
}

