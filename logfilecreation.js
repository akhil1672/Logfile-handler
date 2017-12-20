const fs = require('fs');

for (i = 0; i < 10; i++) {
    fs.createWriteStream('./LogFiles/log' + i + '.txt', { 'flags': 'w' })
}
