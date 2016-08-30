/*
 * testing
 * https://github.com/sgtdoofey/testing
 *
 * Copyright (c) 2016 Sam Cox
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.testing = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.testing = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.testing.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.testing.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].testing = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
