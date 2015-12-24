module.exports =  {
    // Development settings
 
    
  
  
    autoprefixer: {
      options: {
        browsers: ['last 30 versions']
      },
      files: {
        'src/css/style.css': 'src/css/style.css'
      }
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.{scss,sass}','src/scss/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }

    

};