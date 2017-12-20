var FileCleaner = require('cron-file-cleaner').FileCleaner;

var Logfinder = new FileCleaner(__dirname + '/LogFiles/', 86400000 , '00 */0 * * * *');

Logfinder.on('delete', function (file) {
    console.log('DELETE');
    console.log(file.name); 
    console.log(file.folder); 
    console.log(file.path); 
});

Logfinder.on('error', function (err) {
    console.log('ERROR');
    console.error(err);
});

Logfinder.on('stop', function (info) {
    console.log('STOP');
    console.log(info.path);
    console.log(info.cronTime);
});

Logfinder.on('start', function (info) {
    console.log('START');
    console.log(info.path);
    console.log(info.cronTime);
});

Logfinder.start();