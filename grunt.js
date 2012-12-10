module.exports = function(grunt) {

	grunt.initConfig({
		lint: {
			all: ['grunt.js']
		},
	    stylus: {
	      compile: {
	        files: {
	          'style.css': 'stylus/style.styl'
	        }
	      },
		  dev: {
			files: {
	          'dev/t.css': 'dev/t.styl'
	        },
			options: {
				// firebug: true
			}
		  }
	    },
		mincss : {
			'style.css' : ['style.css']
		},
		compress: {
			zip : {
				files : {
					'style.gz': 'style.css'
				}
			}
		},
		watch: {
			stylus: {
				files: [
					'stylus/style.styl',
					'stylus/module/*.styl'
				],
				tasks: 'stylus:compile'
			},
			dev: {
				files: ['dev/t.styl'],
				tasks: 'stylus:dev'
			}
		}
	});

	// loadNpm
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-compress');

	// task
	grunt.registerTask('default', 'watch:stylus');
	grunt.registerTask('dev', 'watch:dev');
	grunt.registerTask('mins', 'mincss compress');

};
