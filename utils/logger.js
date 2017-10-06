const log4js = require('log4js');
log4js.configure({
    appenders: {
        creds: {
            type: 'file',
            filename: 'logs/creds.log'
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'trace'
        },
        creds: {
            appenders: ['creds', 'console'],
            level: 'all'
        }
    }
});


const notificationLog = log4js.getLogger('creds');
notificationLog.level = 'debug';

module.exports = notificationLog;