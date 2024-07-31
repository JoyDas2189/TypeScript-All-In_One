//Reusable Block of Code...


// function logAndReturn<T>(value: T) : T{
//     return value;
// }

// console.log(logAndReturn("Joy"));
// console.log(logAndReturn(23));
// console.log(logAndReturn(true));


function displayer<T, U>(a:T , b:U) {
    console.log(`${a} ${b}`);
    
}
displayer(10, 5);
displayer("Hello", "World");

