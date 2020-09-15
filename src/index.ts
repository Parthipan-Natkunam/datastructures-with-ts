import Stack from "./stack";

declare global {
  interface Window {
    numericStack: Stack<number>;
    stringStack: Stack<string>;
  }
}

const numericStack = new Stack<number>(2);
const stringStack = new Stack<string>();

window.numericStack = numericStack;
window.stringStack = stringStack;

console.log("Stacks initialized...");
