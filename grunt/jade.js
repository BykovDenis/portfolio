module.exports = {
	options: {
	  processName: function(filename) {
		return filename.toUpperCase();
	  },
	  client: false,
	  runtime: true,
	  pretty: true,
	  compileDebug: false,
	  extension: false
	},
    all: {
        files: [{
            expand: true,
            cwd: 'src/jade',
            src: '**/*.jade',
            dest: 'src/',
            ext: '.html'
        }]
    }
};