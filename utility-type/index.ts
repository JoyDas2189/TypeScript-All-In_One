
interface Person {
    name:string;
    age:number;
    gender?:string;
    city?:string;
    country?:string;
}


//Omit => Omit removes keys from an object type.

const joy1: Omit<Person, 'city' | 'country'> = {
    name: 'joy',
    age: 23,
    gender: 'male'
}
console.log(joy1);


// Pick removes all but the specified keys from an object type.

const joy2: Pick<Person, 'name' | 'age' | 'gender'> = {
    name: 'joy',
    age: 23,
    gender: 'male'
}
console.log(joy2);


const joy3: Partial<Person> = {
    name: 'joy',
    age: 23,
    gender: 'male',
}
console.log(joy3);

const joy4: Required<Person> = {
    name: 'joy',
    age: 23,
    gender: 'male',
    city: 'Dhaka',
    country: 'Bangladesh'
}
console.log(joy4);
