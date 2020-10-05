import { Data, NodePointer } from "../Node";
import LinkedList from "../linked list";

class DynamicQueue {
  private DATA_HOLDER: LinkedList;

  public constructor() {
    this.DATA_HOLDER = new LinkedList();
  }

  public isEmpty() {
    return this.DATA_HOLDER.getHead() === null;
  }

  public enqueue(item: Data): void {
    this.DATA_HOLDER.addLast(item);
  }

  public dequeue(): Data | null {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.DATA_HOLDER.remove();
  }

  public peek(): Data | null {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    const headNode: NodePointer = this.DATA_HOLDER.getHead();
    if (headNode) return headNode.data;
    return null;
  }

  public size(): number {
    return this.DATA_HOLDER.getSize();
  }

  public poll(): Data | null {
    return this.dequeue();
  }
}

export default DynamicQueue;
