'use strict';

var grunt = require( 'grunt' );

// make sure the files are loaded in a platform-agnostic way: we don't care about their
// line endings being CR, LF or CRLF: we all transform them to be UNIX LF-only.
function readFile( path ) {
    var content = grunt.file.read( path );
    return content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

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

        var actual = readFile( 'test/tmp/some.js' );
        var expected = readFile( 'test/expected/some.js' );

        test.equal( actual, expected, 'should add a banner to the top of a file' );

        test.done();
    },

    bannerBottom: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someBottom.js' );
        var expected = readFile( 'test/expected/someBottom.js' );

        test.equal( actual, expected, 'should add a banner to the bottom of a file' );

        test.done();
    },

    bannerReplace: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someReplace.js' );
        var expected = readFile( 'test/expected/someReplace.js' );

        test.equal( actual, expected, 'should add a banner to replace content in the middle of a file' );

        test.done();
    },

    bannerReplaceMultiple: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someReplaceMultiple.js' );
        var expected = readFile( 'test/expected/someReplaceMultiple.js' );

        test.equal( actual, expected, 'should replace every banner in the file' );

        test.done();
    },

    bannerReplaceToTop: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someReplaceToTop.js' );
        var expected = readFile( 'test/expected/someReplaceToTop.js' );

        test.equal( actual, expected, 'should add a new banner at the top to replace the old banner in the middle of a file' );

        test.done();
    },

    bannerReplaceSmart: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someReplaceSmart.js' );
        var expected = readFile( 'test/expected/someReplaceSmart.js' );

        test.equal( actual, expected, 'should auto-detect and replace the banner in the middle of a file' );

        test.done();
    },

    bannerReplaceSmartMore: function ( test ) {
        test.expect( 1 );

        var actualNoMatch = readFile( 'test/tmp/someMoreReplaceSmarts.js' );
        var expectedNoMatch = readFile( 'test/expected/someMoreReplaceSmarts.js' );

        test.equal( actualNoMatch, expectedNoMatch, 'should replace any comment that matches the specified banner string' );

        test.done();
    },

    bannerReplaceSmartMore2: function ( test ) {
        test.expect( 1 );

        var actualNoMatch = readFile( 'test/tmp/someMoreReplaceSmarts2.js' );
        var expectedNoMatch = readFile( 'test/expected/someMoreReplaceSmarts2.js' );

        test.equal( actualNoMatch, expectedNoMatch, 'should not replace comments which look like banners but do not span entire lines, hence are NOT banners' );

        test.done();
    },

    bannerReplaceSmartToBottom: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someReplaceSmartToBottom.js' );
        var expected = readFile( 'test/expected/someReplaceSmartToBottom.js' );

        test.equal( actual, expected, 'should auto-detect and replace the banner in the middle of a file with a fresh one at the bottom' );

        test.done();
    },

    bannerNoLineBreak: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someNoLineBreak.js' );
        var expected = readFile( 'test/expected/someNoLineBreak.js' );

        test.equal( actual, expected, 'should add a banner without a linebreak' );

        test.done();
    },

    bannerLineBreak: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someLineBreakTrue.js' );
        var expected = readFile( 'test/expected/someLineBreakTrue.js' );

        test.equal( actual, expected, 'should add a banner with a linebreak' );

        test.done();
    },

    bannerProcess: function ( test ) {
        test.expect( 1 );

        var actual = readFile( 'test/tmp/someProcess.js' );
        var expected = readFile( 'test/expected/someProcess.js' );

        test.equal( actual, expected, 'should add a banner with a custom process task for creating the banner' );

        test.done();
    },

    bannerMatchPatternTop: function ( test ) {
        test.expect( 3 );

        var actualTop = readFile( 'test/tmp/someMatchingPatternTop.js' );
        var expectedTop = readFile( 'test/expected/someMatchingPatternTop.js' );

        test.equal( actualTop, expectedTop, 'should add a banner to the top of a file if matching pattern' );


        var actualNoMatch = readFile( 'test/tmp/someNotMatchingPattern.js' );
        var expectedNoMatch = readFile( 'test/expected/someNotMatchingPattern.js' );

        test.equal( actualNoMatch, expectedNoMatch, 'should not add a banner to the top of a file if not matching pattern' );


        var actualBottom = readFile( 'test/tmp/someMatchingPatternBottom.js' );
        var expectedBottom = readFile( 'test/expected/someMatchingPatternBottom.js' );

        test.equal( actualBottom, expectedBottom, 'should add a banner to the bottom of a file if matching pattern' );


        test.done();
    }
};
