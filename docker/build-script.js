const fs = require('fs');
const processEnvFile = require('./build-script/process-env-file');

const ANGULAR_PRODUCTION_ENV_FILE = './src/environments/environment.prod.ts';
const ENV_FILE = './docker/.env';

// Read variables from environment file
const env = processEnvFile(ENV_FILE);

// Set API address from environment file
const fileData = fs
  .readFileSync(ANGULAR_PRODUCTION_ENV_FILE)
  .toString()
  .replace(/apiUrl: '.*'/, `apiUrl: '${env.API_ADRESS}'`)

fs.writeFileSync(ANGULAR_PRODUCTION_ENV_FILE, fileData);
