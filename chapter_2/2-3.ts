interface Person { name : string };

// const alice: Person = { name : "Alice"};
// const bob = { name : "Bob" } as Person;

// const alice: Person = {};
// const bob = {} as Person;

const alice: Person = {
    name: 'Alice',
    occupation: 'TypeScript developer',
}

const bob = {
    name: 'Bob',
    occupation: 'JavaScript developer'
} as Person;