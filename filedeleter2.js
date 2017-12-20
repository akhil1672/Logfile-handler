var FileCleaner = require('cron-file-cleaner').FileCleaner;
var prompt=require('prompt');

prompt.get(['time'],function(err,result){
    if(err)
        throw err;
    console.log("TimeSet(milliseconds):"+result.time);
    var tmpWatcher = new FileCleaner(__dirname + '/LogFiles/',result.time, '00 */0 * * * *');
    tmpWatcher.cleanUp();
})
