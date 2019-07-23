const timerDecorator = require('../utils/timer');
const { anagramA, anagramB, anagramC } = require('./');

const a = timerDecorator(anagramA);
const b = timerDecorator(anagramB);
const c = timerDecorator(anagramC);

const strA = 'the Morse code';
const strB = 'Here come dots';

// b(strA, strB);
// c(strA, strB);
a(strA, strB);

