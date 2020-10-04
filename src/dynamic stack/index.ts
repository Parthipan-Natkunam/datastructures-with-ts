import { Data } from "../Node";
import LinkedList from "../linked list";

class DynamicStack {
  private DATA_HOLDER: LinkedList;

  public constructor() {
    this.DATA_HOLDER = new LinkedList();
  }

  public push(item: Data) {
    this.DATA_HOLDER.add(item);
  }

  public pop(): Data | null {
    if (this.DATA_HOLDER.getHead()) {
      return this.DATA_HOLDER.remove();
    }
    throw new Error(`Stack underflowed! Stack is empty.`);
  }

  public peek(): Data | null {
    const top = this.DATA_HOLDER.getHead();
    if (top) {
      return top.data;
    }
    throw new Error(`Operation peek not possible on an empty stack.`);
  }
}

export default DynamicStack;
