module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        // First application
        {
            name: 'blackboard',
            script: 'bin/www',
            env: {
                NODE_ENV: 'production'
            }
        }

    ]
};
