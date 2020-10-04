import Stack from "./stack";
import LinkedList from "./linked list";

declare global {
  interface Window {
    numericStack: Stack<number>;
    stringStack: Stack<string>;
    linkedList: LinkedList;
  }
}

const numericStack = new Stack<number>(2);
const stringStack = new Stack<string>();
const list = new LinkedList();

window.numericStack = numericStack;
window.stringStack = stringStack;
window.linkedList = list;

console.log("Stacks initialized...");
