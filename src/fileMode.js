import { readFileSync, existsSync } from 'fs';
import { quadEquation } from './quadEquation.js';

const fileMode = path => {
  if (!existsSync(path)) {
    console.log('Invalid file path');
    return;
  }
  const data = readFileSync(path).toString();
  const format = /^(.*)\s(.*)\s(.*)(\r)?\n$/;
  if (!data.match(format)) {
    console.log('Error. Invalid data format');
    return;
  }
  let params = data.trim('\n').split(' ');
  for (const param of params) {
    if (isNaN(Number(param))) {
      console.log(`Error. Expected a valid real number, got ${param} instead`);
      return;
    }
  }
  params = params.map(param => Number(param));
  if (params[0] === 0) {
    console.log('Error. a cannot be 0');
    return;
  }
  quadEquation(params[0], params[1], params[2]);
};

export { fileMode };
