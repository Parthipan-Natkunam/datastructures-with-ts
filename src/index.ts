import Stack from "./stack";
import DynamicStack from "./dynamic stack";
import Queue from "./queue";

declare global {
  interface Window {
    numericStack: Stack<number>;
    stringStack: Stack<string>;
    dynamicStack: DynamicStack;
    queue: Queue<number>;
  }
}

const numericStack = new Stack<number>(2);
const stringStack = new Stack<string>();
const dynamicStack = new DynamicStack();
const queue = new Queue<number>();

window.numericStack = numericStack;
window.stringStack = stringStack;
window.dynamicStack = dynamicStack;
window.queue = queue;

console.log("Data Structures initialized...");
