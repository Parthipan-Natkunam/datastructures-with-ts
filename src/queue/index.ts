class Queue<T> {
  private MAX_SIZE: number = 5;
  private FRONT: number = -1;
  private DATA_HOLDER: T[] = [];

  public constructor(size?: number) {
    if (size) {
      this.MAX_SIZE = size;
    }
    this.DATA_HOLDER = new Array();
  }

  public enqueue(item: T): void {
    if (this.FRONT < this.MAX_SIZE - 1) {
      this.DATA_HOLDER.unshift(item);
      ++this.FRONT;
      return;
    }
    throw new Error("Queue is Full");
  }

  public dequeue(): T | undefined {
    if (this.FRONT < 0) {
      throw new Error("Queue is Empty");
    }
    --this.FRONT;
    return this.DATA_HOLDER.pop();
  }

  public peek(): T {
    if (this.FRONT < 0) {
      throw new Error("Queue is Empty");
    }
    return this.DATA_HOLDER[this.FRONT];
  }

  public poll(): T | undefined {
    return this.dequeue();
  }

  public size(): number {
    return this.FRONT + 1;
  }
}

export default Queue;
