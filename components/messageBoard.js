var React = require('react');
var MessageList = require('../components/messageList.js');
var MessageForm = require('../components/messageForm.js');

var data = [{
	name: '小华',
	message: '你好'
}]; //模拟在数据库中的留言

var MessageBoard = React.createClass({
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() {
		//模范一个ajax请求数据回客户端的过程,在真实的应用场景中，此处放ajax请求

		this.setState({
			data: data
		})

	},
	handleMessageSubmit: function(message) {
		//模拟将数据保存到数据库的请求
		data.push(message);
		//模拟重新从数据库拉取数据的过程,改变state的值
		this.setState({
			data: data
		});
	},
	render: function() {
		return (
			<div className="messageBoard">
				<h3>{this.props.title}</h3>
				<MessageList data={this.state.data} />
				<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
			</div>
		)
	}
})

module.exports = MessageBoard;