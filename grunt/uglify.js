module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js'
        }]
    }
};