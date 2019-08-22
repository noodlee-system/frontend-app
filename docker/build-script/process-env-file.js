const fs = require('fs');
const FILE_LINE_REGEX = /^.+$/gm;
const ENV_FILE_LINE_REGEX = /([A-Z_]*):(.*)/;

function processEnvFile(ENV_FILE) {
    const environmentFile = fs.readFileSync(ENV_FILE, 'utf-8').toString();
    const envFileLines = environmentFile.toString().match(FILE_LINE_REGEX);
    const envObject = {};

    envFileLines.forEach((line) => {
        const envLineMatch = line.match(ENV_FILE_LINE_REGEX);
        if (envLineMatch.length === 3) {
            envObject[envLineMatch[1]] = envLineMatch[2];
        }
    });

    return envObject;
}

module.exports = processEnvFile;
