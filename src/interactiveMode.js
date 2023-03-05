import { createInterface } from 'readline';
import { quadEquation } from './quadEquation.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = async (text) => {
  const question = (text) => new Promise((arg) => rl.question(text, arg));
  let num = NaN;
  while (true) {
    num = await question(text);
    if (isNaN(Number(num))) {
      console.log(`Error. Expected a valid real number, got ${num} instead`);
    } else {
      break;
    }
  }

  return Number(num);
};

const interactiveMode = async () => {
  let a = NaN;
  while (true) {
    a = await input('a = ');
    if (a === 0) {
      console.log('Error. a cannot be 0');
    } else {
      break;
    }
  }

  const b = await input('b = ');
  const c = await input('c = ');

  rl.close();
  quadEquation(a, b, c);
};

export { interactiveMode };
