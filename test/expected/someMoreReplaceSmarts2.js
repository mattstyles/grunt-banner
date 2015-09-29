// These next comments MAY look like matches but they really are NOT: they either
// don't *start* a line or *end* a line (yes, one in here is nasty as we only appended
// a single non-whitespace character at the end of that comment line!
//
// However, when specifying a simple *string* as `replace` value the plugin will consider
// that string to be a sufficient regex to pick only the banners you are looking for.
//
// Here we have constructed a case which exhibits the limitations of grunt-banner.
//
// NOT INTENEDED AS A BUG SCENARIO: THIS IS INTENDED (BACKWARD-COMPATIBLE) BEHAVIOUR. 
//
// WHEN YOU WANT 'SMARTER' BEHAVIOUR EITHER SPECIFY `replace: true` TO LET THE DEFAULT
// LOCATE-AND-MARK FUNCTION HANDLE IT ALL or SPECIFY OUR OWN LOCATE-AND-MARK FUNCTION
// INSTEAD: `replace: myOwnCustomLocateAndMarkFunction`.
 
var variable1 = "this is a variable";
// replace-this-comment!
var variable2 = "this is another variable";
var no_dont; // replace-this-comment
var variable3 = "this is another variable";
/* replace-this-comment */
var variable4 = "this is another variable";
// whitespace before the comment IS acceptable, however.
//
// Hence *DO REPLACE* the next comment:

                         // replace-this-comment
var variable5 = "this is another variable";

                         // Copyright some poor bugger
var variable5 = "this is another variable";

// the banner
var variable5 = "this is another variable";
