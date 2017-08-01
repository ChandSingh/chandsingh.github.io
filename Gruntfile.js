module.exports = function(grunt) {

    grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),

	pug: {
	    compile: {
		options: {
		    data: {
			debug: true
		    }
		},
		files: {
		    'index.html': ['src/pug/index.pug']
		}
	    }
	},

	less: {
	    production: {
		options: {
		    paths: ['assets/css']
		},
		files: {
		    'assets/css/BzFTMxc.css': ['src/less/*.less',
					       'Bootstrap-3.0-Grid-Only/*.less']
		}
	    }
	},

	cssmin: {
	    target: {
		files: [{
		    expand: true,
		    cwd: 'assets/css',
		    src: ['*.css', '!*.min.css'],
		    dest: 'assets/css',
		    ext: '.min.css'
		}]
	    }
	},

	uglify: {
	    options: {
		mangle: false,
		sourceMap: true,
		sourceMapName: 'assets/js/BzFTMxc.min.map'
	    },
	    production: {
		files: {
		    'assets/js/BzFTMxc.min.js': ['src/js/BzFTMxc.js']
		}
	    }
	},

	imagemin: {
	    production: {
		options: {
		    optimizationLevel: 3,
		    svgoPlugins: [{removeViewBox: false}]
		},
		files: [{
		    expand: true,
		    cwd: 'src/images/',
		    src: ['**/*.{png,jpg,gif}'],
		    dest: 'assets/images/'
		}]
	    }
	},

	watch: {
	    pug: {
		files: ['src/pug/**.pug'],
		tasks: ['pug'],
		options: {
		    spawn: false,
		},
	    },
	    less: {
		files: ['src/less/**.less'],
		tasks: ['less', 'cssmin'],
		options: {
		    spawn: false,
		},
	    },
	    uglify: {
		files: ['src/js/**.js'],
		tasks: ['uglify'],
		options: {
		    spawn: false,
		},
	    },
	    imagemin: {
		files: ['src/images/**.{png,jpg,gif}'],
		tasks: ['imagemin'],
		options: {
		    spawn: false,
		},
	    }
	}
	
    });
    
    grunt.registerTask('default', ['pug', 'less', 'cssmin', 'uglify', 'imagemin', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
