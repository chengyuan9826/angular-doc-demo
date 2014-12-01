module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        watch: {
            /*监测的文件目录*/
            files: ['docApp/{*,*/*,*/*/*}.*'],
            /*是否动态刷新*/
            options: {
                livereload: 20000
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
            }
        }
    });
    grunt.registerTask('demo', ['connect:server', 'watch']);
}
