/* eslint-disable @typescript-eslint/no-unused-expressions */

// interface Square {
//     width: number;
// }
// interface Rectangle extends Square {
//     height: number;
// }
// type Shape = Square | Rectangle;

// // function calculateArea(shape: Shape) {
// //     if(shape instanceof Rectangle) {
// //         // 'Rectangle'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
// //         return shape.width * shape.height;
// //         // 'Shape' 형식에 'height' 속성이 없습니다.
// //     } else {
// //         return shape.width * shape.width;
// //     }
// // }

// function calculateArea(shape: Shape) {
//     if("height" in shape) {
//         shape; // 타입이 Rectangle
//         return shape.width * shape.height;
//     } else {
//         shape; // 타입이 Square
//         return shape.width * shape.width;
//     }
// }

// interface Square {
//     kind: 'square';
//     width: number;
// }
// interface Rectangle {
//     kind: 'rectangle';
//     width: number;
//     height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     if(shape.kind === 'rectangle') {
//         shape; // 타입이 Rectangle
//         return shape.width * shape.height;
//     } else {
//         shape; // 타입이 Square
//         return shape.width * shape.width;
//     }
// }

class Square {
    constructor(public width: number) {}
}
class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if(shape instanceof Rectangle) {
        shape;
        return shape.width * shape.height;
    } else {
        shape;
        return shape.width * shape.width;
    }
}