SingleFieldSubmit = React.createClass({
  propTypes: {
    handleInput: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      inputValue:  ""
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
  handleInput(){
    this.props.handleInput(this.state.inputValue.trim());
  },
  render() {
    return (
      <form className="single-field-submit" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
      </form>
    )
  }
});
