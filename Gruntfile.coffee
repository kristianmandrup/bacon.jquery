module.exports = (grunt) ->
  grunt.initConfig
    clean:
      dist: ["dist/"]
      coffee: ["dist/*.coffee"]

    coffee:
      compile:
        files: ["dist/bacon.query.js": "src/*.coffee"]

    uglify:
      dist:
        src: "dist/*.js"
        dest: "dist/*.min.js"

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.registerTask "build", ["clean:dist", "coffee", "uglify", "clean:coffee"]
  grunt.registerTask "default", ["build"]
