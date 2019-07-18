const timeDecorator = require('../utils/timer');
const {
  addUpToSlow,
  addUpToFast
} = require('./');

const n = 1000000000;

const timedAddUpToSlow = timeDecorator(addUpToSlow);
timedAddUpToSlow(n);

const timedAddUpToFast = timeDecorator(addUpToFast);
timedAddUpToFast(n);


