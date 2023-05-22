export default class Node {
  data: Number | String;
  next: Node | null;

  public constructor(data: Number | String) {
    this.data = data;
    this.next = null;
  }
}
