let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "any", false];

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color {Red = 0, Blue = 1, Green = 2}
let backgroundColor = Color.Red;
console.log(backgroundColor);