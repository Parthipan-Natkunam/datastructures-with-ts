import Node, { NodePointer, Data } from "../Node";

class LinkedList {
  private HEAD: NodePointer;
  private SIZE: number = 0;

  public constructor() {
    this.HEAD = null;
  }

  public add(data: Data): void {
    const node = new Node(data);
    ++this.SIZE;
    if (this.HEAD === null) {
      this.HEAD = node;
      return;
    }
    const tempNode = { ...this.HEAD };
    this.HEAD = node;
    node.next = tempNode;
  }

  public remove(): Data | null {
    if (this.HEAD === null) {
      return null;
    }
    --this.SIZE;
    const { data } = this.HEAD;
    this.HEAD = this.HEAD.next;
    return data;
  }

  public getHead(): NodePointer {
    return this.HEAD;
  }

  public addLast(item: Data): void {
    if (this.HEAD === null) {
      this.add(item);
      return;
    }
    const node = new Node(item);
    ++this.SIZE;
    let currentNode = this.HEAD;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  public removeLast(): Data | null {
    if (this.HEAD === null) {
      return null;
    }
    --this.SIZE;
    let previousNode = null;
    let currentNode = this.HEAD;
    if (currentNode.next === null) {
      const { data } = currentNode;
      this.HEAD = null;
      return data;
    }
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) previousNode.next = null;
    return currentNode.data;
  }

  public getSize(): number {
    return this.SIZE;
  }

  public print(): void {
    if (this.HEAD === null) return;
    let currentNode = this.HEAD;
    let resultString = `${currentNode.data} => `;
    while (currentNode.next) {
      currentNode = currentNode.next;
      resultString += `${currentNode.data} => `;
    }
    resultString += "null";
    console.log(resultString);
  }
}

export default LinkedList;
