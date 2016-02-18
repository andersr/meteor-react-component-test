describe('SingleFieldSubmit Component', function () {

  it('should, on submit, return the value input into the form', function () {
    
    //SETUP
    let mockUserInput = 'Test input';
    let parentComponent = TestUtils.renderIntoDocument(
    	  React.createElement(MockParentComponent)
    	  );
    let node     = ReactDOM.findDOMNode(parentComponent);
    let $node    = $(node);
    expect(parentComponent.state.callbackValue).toBe(null);

    //TEST
    Simulate.change($node.find('input')[0], { target: { value: mockUserInput } });
    Simulate.submit($node.find('form')[0]);
    expect(parentComponent.state.callbackValue).toBe(mockUserInput);
  });

});