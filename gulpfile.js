'use strict';

const gulp = require( 'gulp' );

// Generate changelog for the current package.
gulp.task( 'changelog', () => {
	return require( '@ckeditor/ckeditor5-dev-env' ).generateChangelog();
} );
