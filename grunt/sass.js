module.exports = {
    // Development settings
    
 
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['*.scss'],
            dest: 'src/css',
            ext: '.css'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',            
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['*.scss'],
            dest: 'src/css',
            ext: '.css'
        }]
    }
    
};