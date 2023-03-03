/* eslint-disable no-unused-vars */
import { readFileSync, existsSync } from 'fs';
import { quadEquation } from './quadEquation.js';

const fileMode = path => {
  if (!existsSync(path)) {
    console.log('Invalid file path');
    return;
  }
  const data = readFileSync(path).toString();
  // eslint-disable-next-line max-len
  const format = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)(\r)?\n$/;
  if (!data.match(format)) {
    console.log('Error. Invalid data format');
    return;
  }
  const params = data.trim('\n').split(' ');
  for (const param of params) {
    if (isNaN(Number(param))) {
      console.log(`Error. Expected a valid real number, got ${param} instead`);
      return;
    }
  }
  if (params[0] === 0) {
    console.log('Error. a cannot be 0');
    return;
  }
  quadEquation(params[0], params[1], params[2]);
};

export { fileMode };
