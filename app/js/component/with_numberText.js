define(function (require) {

  'use strict';

  /**
   * Module exports
   */

  return withNumbertext;

  /**
   * Module function
   */

  function withNumbertext() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });

    this.getNumberValue = function(selector){
      return this.select(selector).text() - 0;
    }
  }

});
