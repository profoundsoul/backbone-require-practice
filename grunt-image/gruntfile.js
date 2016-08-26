module.exports = function(grunt){
	grunt.initConfig({
		imagemin:{
			static:{
				options:{},
				files:[{
					expand:true,
					cwd:'.',
					filter:'isFile',
					src:['**/*.{png,jpg,gif,jpeg}','!node_modules/**','!dist/**'],
					dest:'dist/'
				}]
			}
		},
		clean:{
			allimage: ["dist"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['clean','imagemin']);
};
