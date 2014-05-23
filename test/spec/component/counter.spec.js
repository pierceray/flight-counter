'use strict';

describeComponent('component/counter', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent('<div class="js-counter"><div class="js-count"></div><div class="js-increment"></div><div class="js-decrement"></div></div>');
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should fire a counterChange with 1 when the increment button is clicked', function(){
    //creates a spy for the 'counterChange' function
    var eventSpy = spyOnEvent(document, 'counterChange');
    //clicks the increment button
    this.component.select('incrementButton').click();
    //checks that the counterChange event made it up the DOM
    expect(eventSpy).toHaveBeenTriggeredOn(document);
    //checks the data sent with the counterChange event
    expect(eventSpy.mostRecentCall.data).toEqual({
        value: 1
    });
    //checks the html to see that it was updated
    expect(this.component.$node.find(this.component.attr.counterDisplay).html()).toEqual('1');
  });

  it('should fire a counterChange with -1 when the decrement button is clicked', function(){
    var eventSpy = spyOnEvent(document, 'counterChange');

    this.component.select('decrementButton').click();

    expect(eventSpy).toHaveBeenTriggeredOn(document);

    expect(eventSpy.mostRecentCall.data).toEqual({
        value: -1
    });
    expect(this.component.$node.find(this.component.attr.counterDisplay).html()).toEqual('-1');
  });

});
