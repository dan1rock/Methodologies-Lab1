import { interactiveMode } from './src/interactiveMode.js';

if (process.argv.length < 3) {
  interactiveMode();
} else {
  console.log('use file');
}
