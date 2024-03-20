interface Person {
    first: string;
    last: string;
}

const p:Person = { first: "Seokjin", last: "So" };

function email(p:Person, subject:string, body:string): Response {};

type T1 = typeof p;
type T2 = typeof email;

const v1 = typeof p;
const v2 = typeof email;

type PersonEl = Person['first' | 'last'];
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];
