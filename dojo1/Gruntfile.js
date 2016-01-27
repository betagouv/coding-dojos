'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: [
            "dist"
        ],
        
        config: {
            app: 'js',
            dist: 'www',
            bowerDir: 'public/libs'
        },

        injector: {
            options: {
                addRootSlash: false,
                ignorePath: '<%= config.app %>/',
                bowerPrefix: 'bower',
            },
            karmaDependencies: {
                options: {
                    ignorePath: '',
                    transform: function (filepath) {
                        return '\'' + filepath + '\',';
                    }
                },
                files: {
                    'karma.conf.js': [
                        'js/**/*.js'
                    ],
                }
            }
        },

        connect: {
            options: {
                port: 9100,
                hostname: 'localhost',
                livereload: 35729
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '<%= config.app %>'
                    ]
                }
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            unit: {
                singleRun: true
            },
            auto: {
                singleRun: false
            }
        },

    });

    grunt.registerTask('test', function (target) {
        grunt.task.run([
            'clean',
            'injector',
            'connect:test',
            target === 'auto' ? 'karma:auto' : 'karma:unit'
        ]);
    });

    grunt.registerTask('build', [
        'clean'
    ]);

    grunt.registerTask('default', function (target) {
        grunt.task.run(['build' + (target ? ":" + target : "")]);
    });


};