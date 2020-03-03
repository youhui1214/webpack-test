import {numToWord, wordToNum} from "fast-hu-test/src";

console.log('The print.js module has loaded! See the network tab in dev tools...');


export default () => {
    console.log('Button Clicked: Here\'s "some text"!');
    console.log(numToWord(5))
    console.log(wordToNum('Four'))
}

