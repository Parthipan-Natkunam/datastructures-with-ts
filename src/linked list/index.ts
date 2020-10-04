import Node, { NodePointer, Data } from "../Node";

class LinkedList {
  private HEAD: NodePointer;

  public constructor() {
    this.HEAD = null;
  }

  public add(data: Data): void {
    const node = new Node(data);
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
    const { data } = this.HEAD;
    this.HEAD = this.HEAD.next;
    return data;
  }

  public getHead(): NodePointer {
    return this.HEAD;
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
