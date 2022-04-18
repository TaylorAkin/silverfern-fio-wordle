import wordBank from './words.txt';

export const boardDefault2 = [
  ["",""],
  ["",""],
  ["",""],
  ["",""],
  ["",""],
  ["",""]
];

export const boardDefault3 = [
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""]
];

export const boardDefault4 = [
  ["","","",""],
  ["","","",""],
  ["","","",""],
  ["","","",""],
  ["","","",""],
  ["","","",""]
];

export const boardDefault5 = [
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""]
];

export const boardDefault6 = [
  ["","","","","",""],
  ["","","","","",""],
  ["","","","","",""],
  ["","","","","",""],
  ["","","","","",""],
  ["","","","","",""]
];

export const boardDefault7 = [
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""],
  ["","","","","","",""]
];

export const generateWordSet = async() => {
 let wordSet;
 await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    const wordArr = result.split('\n');
    wordSet = new Set(wordArr);
  });

  return { wordSet }
}
