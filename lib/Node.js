export default class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.end = null;
  }
}