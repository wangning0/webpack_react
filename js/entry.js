var React = require('react');
var ReactDOM = require('react-dom');
var MessageBoard = require('../components/MessageBoard.js');
require('../css/style.css');

ReactDOM.render(<MessageBoard title="留言板"/>,
	document.getElementById('container')
)