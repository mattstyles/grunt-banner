/*
 * grunt-banner
 * https://github.com/mattstyles/grunt-banner
 *
 * Copyright (c) 2015 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require ( 'chalk' );

module.exports = function ( grunt ) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask( 'usebanner', 'Adds a banner or a footer to a file', function () {
        // Set up defaults for the options hash
        var options = this.options({
            position: 'top',
            banner: '',
            linebreak: true,
            process: false
        });

        if ( options.position !== 'top' && options.position !== 'bottom' && options.position !== 'replace') {
            options.position = 'top';
        }

        // Verify that if user wishes to replace content with a banner, that they have correctly
        // supplied the content they wish to replace.
        if ( options.position === 'replace' ) {
            if ( ! (('replaceContent' in options)) ) {
                grunt.util.error('Detected option `replace` without accompanying option `replaceContent`.');
            } else if ( typeof options.replaceContent !== 'string' || ! (options.replaceContent instanceof RegExp) ) {
                grunt.util.error('Detected option `replaceContent` with invalid type - type must be String or RegExp.');
            }
        }

        var re = null;

        if ( options.pattern ) {
            re = new RegExp(options.pattern);
        }

        var linebreak = options.linebreak ? grunt.util.linefeed : '';

        // Iterate over the list of files and add the banner or footer
        this.files.forEach( function ( file ) {
            file.src.forEach( function ( src ) {
                if ( grunt.file.isFile( src ) ) {

                    var fileContents = grunt.file.read( src );

                    if ( re && !re.test( fileContents ) ) {
                        return;
                    }

                    if ( typeof options.process === 'function' ) {
                        options.banner = options.process( src );
                    }

                    if ( options.position === 'replace' ) {
                        if ( ! (options.replaceContent instanceof RegExp) ) {
                            options.replaceContent = new RegExp(options.replaceContent);
                        }
                        fileContents = fileContents.replace(options.replaceContent, options.banner);
                        grunt.file.write( src, fileContents );
                    } else {
                        grunt.file.write( src,
                            options.position === 'top' ?
                            options.banner + linebreak + fileContents :
                            fileContents + linebreak + options.banner
                        );
                    }

                    grunt.verbose.writeln( 'Banner added to file ' + chalk.cyan( src ) );
                }

            });
        });

        grunt.log.writeln( chalk.green( '\u221A' ) + ' grunt-banner completed successfully' );

    });

};
