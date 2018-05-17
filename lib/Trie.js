import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }

  wordCount() {
    return this.count;
  }

  populate(wordArray) {
    wordArray.forEach(word => this.insert(word));
    }

  insert(data) {
    let letterArray = [...data.toLowerCase()];
    let currNode = this.root;

    this.count++;
    while (letterArray.length) {
      let letter = letterArray.shift();

      if (!currNode.children[letter]) {
        currNode.children[letter] = new Node(letter);
      }
      currNode = currNode.children[letter];  
    }
    currNode.completedWord = data.toLowerCase();
  }

  suggest(word) {
    let suggestions = [];
    let currentNode = this.root;

    word = [...word.toLowerCase()];

    word.forEach(letter => {
      currentNode = currentNode.children[letter];
    });

    const search = (node => {
      if (node.completedWord) {
        suggestions.push(node.completedWord);
      }

      let nodeKeys = Object.keys(node.children);

      nodeKeys.forEach(key => {
        search(node.children[key]);
      });
    });
    search(currentNode);
    return suggestions;
  }
}