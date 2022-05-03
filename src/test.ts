const a = 4;
const b = 6;
const c = ('5' as unknown) as any;
const d = 'cat';

const add = (num1: number, num2: number) => {

    console.log(`${num1} + ${num2} = ${num1 + num2} `, num1 + num2)
}


add(a, c)