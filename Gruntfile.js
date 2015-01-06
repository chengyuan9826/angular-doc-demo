module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        watch: {
            app: {
                /*监测的文件目录*/
                files: ['docApp/{,*/,*/*/,*/*/*/,*/*/*/*/}*.*'],
                /*是否动态刷新*/
                options: {
                    livereload: 20000
                }
            },
            sen: {
                files: ['sen/{,*/,*/*/,}*.*'],
                options: {
                    livereload: 30000
                },
                tasks:['compass:sen']
            }
        },
        connect: {
            server: {
                options: {
                    base: '.',
                    port: 1111,
                    hostname: '*',
                    livereload: 20000,
                    open: {
                        target: 'http://127.0.0.1:1111/docApp'
                    }
                }
            },
            sen: {
                options: {
                    base: '.',
                    port: 2222,
                    hostname: '*',
                    livereload: 300000,
                    open: {
                        target: 'http://127.0.0.1:2222/sen'
                    }
                }
            }
        },
        compass: {
            options: {
                relativeAssets: false,
                assetCacheBuster: false,
                imagesPath: "docApp/images/icons",
                generatedImagesDir: "docApp/scss/icons"
            },
            demo: {
                options: {
                    sassDir: 'docApp/scss',
                    cssDir: 'docApp/css',
                    debugInfo: false,
                    sourcemap: true,
                    outputStyle: 'compressed'
                }
            },
            sen: {
                options: {
                    sassDir: 'sen/scss',
                    cssDir: 'sen/css',
                    debugInfo: false,
                    sourcemap: true,
                    outputStyle: 'expanded'
                }
            }
        }
    });
    grunt.registerTask('demo', ['connect:server', 'watch:app']);
    grunt.registerTask('sen', ['connect:sen', 'watch:sen']);
}
