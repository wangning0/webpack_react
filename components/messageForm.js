var React = require('react');

var MessageForm = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			message: ''
		};
	},
	handleNameChange: function(e) {
		this.setState({
			name: e.target.value
		})
	},
	handleMessageChange: function(e) {
		this.setState({
			message: e.target.value
		})
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var message = this.state.message.trim();
		if (!name || !message) {
			return;
		}
		this.props.onMessageSubmit({
			name: name,
			message: message
		});
		this.setState({
			name: '',
			message: ''
		});
	},
	componentDidMount: function() {

	},
	render: function() {
		return (
			<div className="row">
                    <form className="messageForm"
                          onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id="textName"
                        className="form-control"/>
                        <input
	                        type="text"
	                        placeholder="Say something..."
	                        value={this.state.message}
	                        onChange={this.handleMessageChange}
	                        id="textMessage"
	                        className="form-control"/>
                        <input
	                        type="submit"
	                        className="btn btn-default"
	                        value="Leave a message"/>
                    </form>
                </div>
		)
	}
});


module.exports = MessageForm;