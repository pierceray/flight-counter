define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(counter);

  /**
   * Module function
   */

  function counter() {

    this.defaultAttrs({
      'counterDisplay': '.js-count',
      'incrementButton': '.js-increment',
      'decrementButton': '.js-decrement'
    });

    this.after('initialize', function () {
      this.on('click', {
        'incrementButton': this.increment,
        'decrementButton': this.decrement
      });
      this.on('counterChange', this.change);
    });

    this.increment = function(event){
      event.preventDefault();

      var $display = this.select('counterDisplay'),
        currentValue = $display.text() - 0;

      this.trigger('counterChange', {
        value: currentValue + 1
      });
    };

    this.decrement = function(event){
      event.preventDefault();

      var $display = this.select('counterDisplay'),
          currentValue = $display.text() - 0;

      this.trigger('counterChange', {
        value: currentValue - 1
      });
    };

    this.change = function(event, data){
      this.select('counterDisplay').text(data.value);
    };
  }

});
