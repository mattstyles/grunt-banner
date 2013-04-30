/*
 * grunt-banner
 * https://github.com/mattstyles/grunt-banner
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('banner', 'Adds a banner or a footer to a file', function() {
        // Set up defaults for the options hash
        var options = this.options({
            position: 'top',
            banner: ''
        });
        if ( options.position !== 'top' && options.position !== 'bottom' ) {
            options.position = 'top';
        }

        // Iterate over the list of files and add the banner or footer
        this.files.forEach( function( file ) {
            file.src.forEach( function( src ) {
                console.log( options.banner );
                grunt.file.write( src, options.banner + grunt.file.read( src ) );
            });
        });

    });

};
