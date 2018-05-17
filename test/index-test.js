  import { expect } from 'chai';
  import Trie from '../lib/Trie.js'
  import fs from 'fs';

  const text = "/usr/share/dict/words"
  const dictionary = fs.readFileSync(text).toString().trim().split('\n')

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
    console.log(JSON.stringify(trie, null, 4))
    expect(trie.count).to.equal(5);
  });

  it('should insert a new word', () => {

  })

  it('should insert multiple words', () => {

  })
});

describe('suggest', () => {
  it('shouild take a prefix', () => {
    trie.insert('dog');
    trie.insert('doggo');
    trie.insert('dogs');
    trie.insert('do');
    console.log(trie.suggest('d'));
    expect(true).to.equal(true);
  })
})

// describe('count', () => {
//   it('should return the number of words entered', () => {
//     trie.insert('cat');
//     trie.insert('hello');
//     trie.insert('cups');
//     trie.insert('pixel');
//     let ourCount = trie.wordcount();
//     expect(ourCount).to.equal(4);
//   })
// })

// describe('populate', () => {
//   it('should take an array', () => {
//     trie.populate(dictionary);
//     Dictionary.count = trie.count();
//     expect(DictionaryCount).to.equal(234371);
//   })

// })
});
