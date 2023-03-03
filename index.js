import { interactiveMode } from './src/interactiveMode.js';
import { fileMode } from './src/fileMode.js';

if (process.argv.length < 3) {
  interactiveMode();
} else {
  fileMode(process.argv[2]);
}
