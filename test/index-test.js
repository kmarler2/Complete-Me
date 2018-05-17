import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('Trie', () => {
  let trie = new Trie();

  beforeEach(() => {
    trie = new Trie();
  });

  it('should start with a word count of zero', () => {
    expect(trie.count).to.equal(0);
  });

describe('insert', () => {
  it('should be able to add a word to Trie', () => {
    trie.insert('cat');
    trie.insert('hello');
    trie.insert('cups');
    trie.insert('pixel');
    trie.insert('cat');
    // console.log(JSON.stringify(trie, null, 4));
    expect(trie.count).to.equal(5);
  });

  it('should insert a new word', () => {
    expect(trie.count).to.equal(0);
    trie.insert('cat');
    expect(trie.count).to.equal(1);
  });

  it('should insert multiple words', () => {
    expect(trie.count).to.equal(0);
    trie.insert('cat');
    trie.insert('hello');
    trie.insert('cups');
    trie.insert('pixel');
    trie.insert('cat');
    expect(trie.count).to.equal(5);
  });

  it('should keep count of how many words are entered in the tree', () => {
    trie.insert('cat');
    trie.insert('hello');
    trie.insert('cups');
    expect(trie.count).to.equal(3);
  });

});

describe('suggest', () => {
  it('shouild take a prefix', () => {
    trie.insert('dog');
    trie.insert('doggo');
    trie.insert('dogs');
    trie.insert('do');
    expect(trie.suggest('DO')).to.deep.equal(['do', 'dog', 'doggo', 'dogs']);
  })
})

describe('count', () => {
  it('should return the number of words entered', () => {
    trie.insert('cat');
    trie.insert('hello');
    trie.insert('cups');
    trie.insert('pixel');
    expect(trie.wordCount()).to.equal(4);
  })
})

describe('populate', () => {
  it('should take an array', () => {
    trie.populate(dictionary);
    expect(trie.wordCount()).to.equal(235886);
  })
})
});
