exports.config = {
    tests: './src/specs/*.spec.ts',
    timeout: 30000,
    output: '../reports',
    helpers: {
        Protractor: {
            url: 'http://localhost:4200',
            driver: 'direct',
            directConnect: true,
            show: true,
            browser: 'chrome',
            chromeDriver: './chromedriver.exe',
            waitForTimeout: 5000,
            getPageTimeout: 5000,
            capabilities: {
                chromeOptions: {
                    useAutomationExtension: false,
                    args: ['--start-fullscreen']
                }
            }
        },
        MockHelper: {
            require: './src/util/mockHelper.js'
        }
    },
    plugins: {},
    mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    verbose: false,
                    steps: true
                }
            }
        }
    },
    require: [
        'ts-node/register'
    ],
    bootstrap: false,
    hooks: [],
    multiple: {
        parallel: {
            chunks: 2,
            browsers: ['chrome']
        }
    },
    name: 'contacts-crud-angular7-codeceptjs-ngapimock'
};
