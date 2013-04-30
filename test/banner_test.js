'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.banner = {

    setUp: function( done ) {
        // setup here if necessary
        done();
    },

    tearDown: function( done ) {
        // tear down here if necessary
        var filePath = 'test/fixtures/some.js';

        // delete test file if it currently exists
        if ( grunt.file.exists( filePath ) ) {
            grunt.file.delete( filePath );
        }

        grunt.file.write( filePath, 'var variable = "this is a variable"' );
        done();
    },

    bannerTop: function( test ) {
        test.expect(1);

        var actual = grunt.file.read( 'test/fixtures/some.js' );
        var expected = grunt.file.read( 'test/expected/some-banner.js' );

        test.equal( actual, expected, 'should add a banner to the top of a file' );

        test.done();
    }
};
