define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Counter = require('component/counter');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Counter.attachTo('.js-counter');
  }

});
