import { readFileSync, existsSync } from 'fs';
import { quadEquation } from './quadEquation.js';

const fileMode = (path) => {
  if (!existsSync(path)) {
    console.log(`Error. File ${path} does not exist`);
    process.exit(404);
  }
  const data = readFileSync(path).toString();
  const format = /^(.*)\s(.*)\s(.*)(\r)?\n$/;
  if (!data.match(format)) {
    console.log('Error. Invalid data format');
    process.exit(400);
  }
  let params = data.trim('\n').split(' ');
  for (const param of params) {
    if (isNaN(Number(param))) {
      console.log(`Error. Expected a valid real number, got ${param} instead`);
      process.exit(400);
    }
  }
  params = params.map((param) => Number(param));
  if (params[0] === 0) {
    console.log('Error. a cannot be 0');
    process.exit(400);
  }
  quadEquation(params[0], params[1], params[2]);
};

export { fileMode };
