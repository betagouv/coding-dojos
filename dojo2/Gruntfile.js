'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: [
            "dist"
        ],
        
        config: {
            app: 'app',
            temp: 'temp',
            dist: 'www',
            bowerDir: 'public/libs'
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                //files: {
                //    'dist/': 'js/**/*.es6'
                //}
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: ['**/**.es6'],
                        dest: 'dist',
                        ext: '-compiled.js',
                        extDot: 'last'
                    }
                ]
            }
        },

        injector: {
            options: {
                addRootSlash: false,
                ignorePath: '<%= config.app %>/',
                bowerPrefix: 'bower',
            },
            /*bowerDependencies: {
                options: {
                	addRootSlash: true,
                    relative: false
                },
                files: {
                    'app/views/main.html': ['bower.json']
                }
            },*/
            karmaDependencies: {
                options: {
                    ignorePath: '',
                    transform: function (filepath) {
                        return '\'' + filepath + '\',';
                    }
                },
                files: {
                    'karma.conf.js': [
                        'bower.json',
                        'js/**/*.js',
                        'testjs/**/*.js'
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
            /*livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },*/
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
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
            //'babel',
            'injector',
            'connect:test',
            target === 'auto' ? 'karma:auto' : 'karma:unit'
        ]);
    });

    grunt.registerTask('build', [
        'clean',
        //'babel'
        //'injector'
 ]);

    grunt.registerTask('default', function (target) {
        grunt.task.run(['build' + (target ? ":" + target : "")]);
    });


};