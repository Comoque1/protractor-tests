// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['grid-page-test.js'],
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': process.cwd() + '/'
                }
            }
        }
    }

}