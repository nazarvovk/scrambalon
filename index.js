const { map } = require('lodash');

// @ts-check
const args = require('minimist')(process.argv.slice(2));
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const MIN_LENGTH = args.min || 5;
const MAX_LENGTH = args.max || 5;
const OUTPUT_FILE = args.output || 'output.txt';

/**
 * @param {number} length
 * @returns {string[]}
 */
const generateStrings = (length) => {
  if (length === 1) return ALPHABET;

  const prevStrList = generateStrings(length - 1);
  return ALPHABET.reduce((prev, char) => {
    return [...prev, ...prevStrList.map((str) => `${str}${char}`)];
  }, []);
};

let output = [];
for (let length = MIN_LENGTH; length <= MAX_LENGTH; length++) {
  output = [...output, ...generateStrings(length)];
}

console.log('output: ', output);
