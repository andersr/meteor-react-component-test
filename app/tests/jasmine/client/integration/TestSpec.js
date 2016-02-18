describe('SingleFieldSubmit Component', function () {

  it('should, on submit, return the value input into the form', function () {
    
    //SETUP
    let callbackSpy = jasmine.createSpy('callbackSpy');
    let mockUserInput = 'Test input';
    let component = TestUtils.renderIntoDocument(
    	  React.createElement(SingleFieldSubmit, {handleInput: callbackSpy})
    	  );
    let form = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
    let input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');


    //TEST
    Simulate.change(input, { target: { value: mockUserInput } });
    Simulate.submit(form);
    expect(callbackSpy).toHaveBeenCalledWith(mockUserInput);
    expect(callbackSpy.calls.count()).toEqual(1);
  });

});