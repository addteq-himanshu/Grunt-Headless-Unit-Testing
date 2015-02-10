module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use

    /*
    taskName: { // internal task or name of a plugin (like "qunit")
      // options, etc (see the task/plugin for details)
    },
    ...
    */
    qunit: {
      all: ['tests/*.html']
    },

   watch: {
    files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
    tasks: ['qunit']
  }

  });
  /* load up your plugins
  grunt.loadNpmTasks('grunt-contrib-Addteq');
  // register one or more task lists (you should ALWAYS have a "default" task list)
  grunt.registerTask('default', ['taskToRun']);
  grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
  */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('default', ['qunit']);
};
