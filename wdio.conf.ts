
export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        './features/**/*.feature'
    ],
    exclude: [],

    maxInstances: 10,
    capabilities: [{
        browserName: 'microsoftedge'  // You can change to 'chrome', 'firefox', etc.
    }],

    logLevel: 'info',  // Set log level to 'info' for general test information

    logLevels: {
        webdriver: 'debug',  // Logs detailed WebDriver commands
        '@wdio/sauce-service': 'warn',  // Logs warnings for specific services
    },

    baseUrl: 'https://automationexercise.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    services: ['visual'], // Additional services you want to use

    framework: 'cucumber',

    reporters: [['allure', { outputDir: 'allure-results' }]],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.ts'],
        backtrace: true,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        timeout: 100000,
        ignoreUndefinedDefinitions: false
    },

    // Hooks Implementation for Logging
    before: async () => {
        console.log('Running before all tests...');
        // Setup before all tests
    },

    after: async (result: number, capabilities: any, specs: string[]) => {
        console.log('Running after all tests...');
        // Cleanup after all tests
    },

    beforeFeature: (uri: string, feature: any) => {
        console.log(`About to run feature: ${feature.name}`);
    },

    afterFeature: (uri: string, feature: any) => {
        console.log(`Finished running feature: ${feature.name}`);
    },

    beforeScenario: (world: any, context: any) => {
        console.log(`About to run scenario: ${world.pickle.name}`);
    },

    afterScenario: (world: any, result: any, context: any) => {
        console.log(`Finished scenario: ${world.pickle.name}, passed: ${result.passed}`);
    },

    afterStep: (step: any, scenario: any, result: any, context: any) => {
        if (result.passed) {
            console.log(`Step "${step.text}" passed.`);
        } else {
            console.log(`Step "${step.text}" failed with error: ${result.error}`);
        }
    },

    onComplete: function(exitCode: number, config: any, capabilities: any, results: any) {
        if (results.failed > 0) {
            console.log(`Some tests failed, exiting with code ${exitCode}`);
        } else {
            console.log(`All tests passed successfully!`);
        }
    },
};
