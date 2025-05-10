const fs = require('fs');
const path = require('path');
const logAssumptions = (dish, assumptions) => {
    const logPath = path.join(__dirname, '../../debug-log.txt');
    const entry = `\n[${dish}]\n` + assumptions.map(a => '- ' + a).join('\n') + '\n';
    fs.appendFileSync(logPath, entry);
};
module.exports = { logAssumptions };