'use strict';

var grunt = require( 'grunt' );

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
    bannerTop: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/some.js' );
        var expected = grunt.file.read( 'test/expected/some-banner.js' );

        test.equal( actual, expected, 'should add a banner to the top of a file' );

        test.done();
    },

    bannerBottom: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/someBottom.js' );
        var expected = grunt.file.read( 'test/expected/some-bottom.js' );

        test.equal( actual, expected, 'should add a banner to the bottom of a file' );

        test.done();
    },

    bannerReplace: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/someReplace.js' );
        var expected = grunt.file.read( 'test/expected/someReplace.js' );

        test.equal( actual, expected, 'should add a banner to replace content in the middle of a file' );

        test.done();
    },

    bannerNoLineBreak: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/someNoLineBreak.js' );
        var expected = grunt.file.read( 'test/expected/someNoLineBreak.js' );

        test.equal( actual, expected, 'should add a banner without a linebreak' );

        test.done();
    },

    bannerProcess: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/someProcess.js' );
        var expected = grunt.file.read( 'test/expected/someProcess.js' );

        test.equal( actual, expected, 'should add a banner with a custom process task for creating the banner' );

        test.done();
    },

    bannerMatchPatternTop: function ( test ) {
        test.expect( 3 );

        var actualTop = grunt.file.read( 'test/tmp/someMatchingPatternTop.js' );
        var expectedTop = grunt.file.read( 'test/expected/someMatchingPatternTop.js' );

        test.equal( actualTop, expectedTop, 'should add a banner to the top of a file if matching pattern' );


        var actualNoMatch = grunt.file.read( 'test/tmp/someNotMatchingPattern.js' );
        var expectedNoMatch = grunt.file.read( 'test/expected/someNotMatchingPattern.js' );

        test.equal( actualNoMatch, expectedNoMatch, 'should not add a banner to the top of a file if not matching pattern' );


        var actualBottom = grunt.file.read( 'test/tmp/someMatchingPatternBottom.js' );
        var expectedBottom = grunt.file.read( 'test/expected/someMatchingPatternBottom.js' );

        test.equal( actualBottom, expectedBottom, 'should add a banner to the bottom of a file if matching pattern' );


        test.done();
    }
};
