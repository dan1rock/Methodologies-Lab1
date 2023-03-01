'use strict'

const quadEquation = (a, b, c) => {
    console.log(`\nEquation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const disc = b * b - 4 * a * c;
    if(disc === 0){
        const x = -b / (2 * a);
        console.log(`There are 1 root:\nx = ${x}`);
        return;
    }
    if(disc > 0){
        const x1 = (-b - Math.sqrt(disc)) / (2 * a);
        const x2 = (-b + Math.sqrt(disc)) / (2 * a);
        console.log(`There are 2 roots:\nx1 = ${x1}\nx2 = ${x2}`);
        return;
    }
    console.log(`There are no roots`);
};

quadEquation(2, 1, -3);
