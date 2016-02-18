MockParentComponent = React.createClass({
	 getDefaultProps() {
    return {
      componentBeingTested: null
    };
  },
  getInitialState: function() {
    return {
      callbackValue: null
    };
  },
  handleCallback: function(value) {
    this.setState({callbackValue: value});
  },
  render: function() {
    return (
      <div className="container">
        <SingleFieldSubmit handleInput={this.handleCallback} />
      </div>
    )
  }
});