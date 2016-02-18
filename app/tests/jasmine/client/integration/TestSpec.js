describe('SingleFieldSubmit Component', function () {

  it('should, on submit, return the value input into the form', function () {
    
    //SETUP
    let callbackSpy = jasmine.createSpy('callbackSpy');
    let mockUserInput = 'Test input';
    let component = TestUtils.renderIntoDocument(
    	  React.createElement(SingleFieldSubmit, {handleInput: callbackSpy})
    	  );
    // let node     = ReactDOM.findDOMNode(parentComponent);
    // let $node    = $(node);
    let form = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
    let input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    // expect(parentComponent.state.callbackValue).toBe(null);

    //TEST
    Simulate.change(input, { target: { value: mockUserInput } });
    Simulate.submit(form);
    expect(callbackSpy).toHaveBeenCalledWith(mockUserInput);
    expect(callbackSpy.calls.count()).toEqual(1);
    // Simulate.change($node.find('input')[0], { target: { value: mockUserInput } });
    // Simulate.submit($node.find('form')[0]);
    // expect(parentComponent.state.callbackValue).toBe(mockUserInput);
  });

});