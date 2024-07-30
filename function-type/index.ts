const myFunc = (a: string, b: string, c?: string, d:number = 10): string => {
    return (`Hello ${a} ${b} ${c} ${d}`);
}
console.log(myFunc('joy', 'das'));


