SingleFieldSubmit = React.createClass({
  propTypes: {
    handleInput: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      inputValue:  ""  ,
      placeholder: "New..."
    };
  },
  getInitialState() {
    return {
      inputValue: this.props.inputValue
    };
  },
  updateInputValue(e){
    this.setState({inputValue: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.handleInput();
  },
  handleOnKeyPress(e) {
    // submit via return key for mobile safari
    if ( e.which === 13 ) {
       e.preventDefault();
      this.handleInput();
    };
  },
  handleInput(){
    this.props.handleInput(this.state.inputValue.trim());
  },
  render() {
    return (
      <form className="single-field-submit" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newNote"
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          autoFocus={this.state.autoFocus}
          onKeyPress={this.handleOnKeyPress}
          onBlur={this.handleOnBlur}
        />
         <input type="submit" style={{display:'none'}} />
      </form>
    )
  }
});
