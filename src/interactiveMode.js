import { createInterface } from 'readline';
import { quadEquation } from './quadEquation.js';

const interactiveMode = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = text => new Promise(arg => rl.question(text, arg));

  let { a, b, c } = NaN;
  while (true) {
    const num = await input('a = ');
    a = Number(num);
    if (isNaN(a)) {
      console.log(`Error. Expected a valid real number, got ${num} instead`);
    } else if (a === 0) {
      console.log('Error. a cannot be 0');
    } else {
      break;
    }
  }

  while (true) {
    const num = await input('b = ');
    b = Number(num);
    if (isNaN(b)) {
      console.log(`Error. Expected a valid real number, got ${num} instead`);
    } else {
      break;
    }
  }

  while (true) {
    const num = await input('c = ');
    c = Number(num);
    if (isNaN(c)) {
      console.log(`Error. Expected a valid real number, got ${num} instead`);
    } else {
      break;
    }
  }

  rl.close();
  quadEquation(a, b, c);
};

export { interactiveMode };
