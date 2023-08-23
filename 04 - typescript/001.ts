const a: string = '2222';
// 类型推断,根据赋的值来推断出b的类型是string
let b = '2222';
// b = 2222;
let c: symbol = Symbol('222')

let d: number = Number(123123);
// 联合类型
let e: number | string = 213123 || 'safsa';

function highFn(func: (x: number, y: number) => number, x: number, y: number): number {
    return func(x, y);
}

function func(x: number, y:number): number {
    return x + y;
}

highFn(func, 1, 2);

const arr:<number>[]
