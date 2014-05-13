(function () {
    var optimist = require('optimist');

    var Kobito = require(__dirname + '/Kobito');

    var argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

    var kobito = new Kobito();
    kobito.execSQL('select ZTITLE from ZITEM', function (err, results) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(results);
    });
})();
