import { createInterface } from 'readline';
import { quadEquation } from './quadEquation.js';

const input = async (text, rl) => {
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
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a = NaN;
  while (true) {
    a = await input('a = ', rl);
    if (a === 0) {
      console.log('Error. a cannot be 0');
    } else {
      break;
    }
  }

  const b = await input('b = ', rl);
  const c = await input('c = ', rl);

  rl.close();
  quadEquation(a, b, c);
};

export { interactiveMode };
