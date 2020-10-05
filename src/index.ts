import Stack from "./stack";
import DynamicStack from "./dynamic stack";
import Queue from "./queue";
import DynamicQueue from "./dynamic queue";

declare global {
  interface Window {
    numericStack: Stack<number>;
    stringStack: Stack<string>;
    dynamicStack: DynamicStack;
    queue: Queue<number>;
    dynamicQueue: DynamicQueue;
  }
}

const numericStack = new Stack<number>(2);
const stringStack = new Stack<string>();
const dynamicStack = new DynamicStack();
const queue = new Queue<number>();
const dynamicQueue = new DynamicQueue();

window.numericStack = numericStack;
window.stringStack = stringStack;
window.dynamicStack = dynamicStack;
window.queue = queue;
window.dynamicQueue = dynamicQueue;

console.log("Data Structures initialized...");
