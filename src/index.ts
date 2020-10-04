import Stack from "./stack";
import DynamicStack from "./dynamic stack";

declare global {
  interface Window {
    numericStack: Stack<number>;
    stringStack: Stack<string>;
    dynamicStack: DynamicStack;
  }
}

const numericStack = new Stack<number>(2);
const stringStack = new Stack<string>();
const dynamicStack = new DynamicStack();

window.numericStack = numericStack;
window.stringStack = stringStack;
window.dynamicStack = dynamicStack;

console.log("Stacks initialized...");
