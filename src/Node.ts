export type Data = number | string;
export type NodePointer = LinkNode | null;

class LinkNode {
  public data: Data;
  public next: NodePointer = null;

  public constructor(data: Data, next?: NodePointer) {
    this.data = data;
    if (next) {
      this.next = next;
    }
  }
}

export default LinkNode;
