({	
    appDir: '../../',
    baseUrl: 'js',
    dir: '../../../boilerapp-build',
    mainConfigFile: '../main.js',
    paths: {
        jquery: 'libs/require-jquery',
        mustache: 'libs/mustache',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        bootstrap: 'libs/bootstrap',
        templates: '../templates'
    },
    optimize: 'uglify',
    modules: [
        {
            name: 'main',
			exclude: ["jquery"]
        }
    ]
})