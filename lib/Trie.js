import Node from './Node.js'
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }

    wordCount() {
      return this.count;
    }

    populate(wordArray) {
      while(wordArray.length) {
        let str = wordArray.shift()
        this.insert(str);
      }
    }

    insert(data) {
      let letterArray = [...data]
      let currNode = this.root;
      this.count++;
      while (letterArray.length) {
        let letter = letterArray.shift();
        if (!currNode.children[letter]) {
          currNode.children[letter] = new Node(letter);
        }
        currNode = currNode.children[letter];  
      }
      this.end = data
    }

    suggest(prefix) {
      let suggestions = [];
      let currentNode = this.root;
      prefix = [...prefix.toLowerCase()];

      prefix.forEach(letter => {
        currentNode = currentNode.children[letter];
      })
      const search = (node => {
        if(node.completedWord) {
          suggestions.push(node.completedWord)
      }
      let nodeKeys = Object.keys(node.children);
      nodeKeys.forEach(key => {
      search(node.children[key])
      })
    })
    search(currentNode);
    return suggestions;
  }
}
