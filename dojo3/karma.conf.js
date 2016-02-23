'use strict';

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // Frameworks to use
        frameworks: ['jasmine'],

        preprocessors: {
            'js/**/*.es6': ['babel']
        },
        
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        
        // List of files / patterns to load in the browser
        files: [

            'node_modules/babel-polyfill/dist/polyfill.js',
            
            <!-- injector:es6 -->
            'js/test.es6',
            'js/test.map.spec.es6',
            'js/test.spec.es6',
            <!-- endinjector -->
            
        ],

        // Test results reporter to use
        // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],
        //reporters: ['progress', 'coverage'],

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'/*,'Chrome','Safari'*/],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // If true, it capture browsers, run tests and exit
        singleRun: false
    });
};