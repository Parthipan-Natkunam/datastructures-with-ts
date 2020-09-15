class Stack<T> {
  private MAX_SIZE: number = 5;
  private TOP: number = -1;
  private DATA_HOLDER: T[] = [];

  constructor(size?: number) {
    if (size) {
      this.MAX_SIZE = size;
    }
    this.DATA_HOLDER = new Array(this.MAX_SIZE);
  }

  public push(item: T) {
    if (this.TOP === this.MAX_SIZE - 1) {
      throw new Error(`Stack overflowed! Max stack size was ${this.MAX_SIZE}`);
    } else {
      ++this.TOP;
      this.DATA_HOLDER[this.TOP] = item;
    }
  }

  public pop(): T | undefined {
    if (this.TOP < 0) {
      throw new Error(`Stack underflowed! Stack is empty.`);
    } else {
      --this.TOP;
      return this.DATA_HOLDER.pop();
    }
  }

  public peek(): T {
    if (this.TOP < 0) {
      throw new Error(`Operation peek not possible on an empty stack.`);
    } else {
      return this.DATA_HOLDER[this.TOP];
    }
  }
}

export default Stack;
