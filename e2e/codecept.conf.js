exports.config = {
    tests: './src/specs/*.spec.ts',
    timeout: 30000,
    output: '../reports',
    helpers: {
        Puppeteer: {
            url: 'http://localhost:4200',
            show: true,
            waitForTimeout: 5000,
            chrome: {
              args: ['--start-fullscreen']
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
    name: 'contacts-crud-angular7-codeceptjs-ngapimock'
};
