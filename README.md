# grunt-banner

> Adds a simple banner to files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-banner --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-banner');
```

## The "banner" task

### Overview
In your project's Gruntfile, add a section named `usebanner` to the data object passed into `grunt.initConfig()`.

The wildcard selector `*` is perfectly valid for selecting targets to add a banner to.

```js
grunt.initConfig({
  usebanner: {
    taskName: {
      options: {
        position: 'top' || 'bottom'
        banner: '// banner text <%= templates allowed %>'
      },
      files: {
        src: [ 'path/to/file.ext', 'path/to/another/*.ext' ]
      }
    }
  }
})
```

### Options

#### options.position
Type: `String`
Default value: `'top`
Value range: `'top'` or `'bottom'` only

The position to place the banner - _either_ the top or bottom (other values will default to top)

#### options.banner
Type: `String`
Default value: ``

The text to use as a banner.  Templated strings are perfectly acceptable and encouraged.

### Usage Examples

In this example an `appConfig` is read form a JSON file and used to populate a `banner` template which
is then used by `grunt-banner` to place at the top of minified javascript and css files.

```js
var appConfig = grunt.file.readJSON( 'app-config.json' ) || {};
grunt.initConfig({
  banner: '/* <%= appConfig.info.name %> - version <%= appConfig.info.version %> - ' +
          '<%= grunt.template.today("dd-mm-yyyy") %>\n' +
          '<%= appConfig.info.description %>\n ' +
          '&#169 <%= grunt.template.today("yyyy") %> <%= appConfig.info.author.name %> ' +
          '- <%= appConfig.info.author.email %> */\n',
  usebanner: {
    dist: {
      options: {
        position: 'top'
        banner: '<%= banner %>'
      },
      files: {
        src: [ 'scripts/main-min.js', 'stylesheets/main-min.css', 'more-scripts/*.js' ]
      }
    }
  }
})
```

### Notes

`grunt-banner` simply adds the banner to the head or foot of the files that are specified by
the array passed to `files.src`, it makes no attempt to see if a banner already exists and it
is up to the user to ensure that the file should already contain a banner.  To this end it is
strongly recommended to use the [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
task and only add banners to production-ready code.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 30.04.13 -- v0.1.0 -- Initial release of grunt-banner
