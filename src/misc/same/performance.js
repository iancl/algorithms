const timerDecorator = require('../utils/timer');
const { sameA, sameB } = require('./');
const arrA = [1,2,3,4,5,6,7,8,9,10];
const arrB = [1,4,9,16,25,36,49,64,81,100];

const decoratedSameA = timerDecorator(sameA);
const decoratedSameB = timerDecorator(sameB);

decoratedSameA(arrA, arrB);
decoratedSameB(arrA, arrB);
