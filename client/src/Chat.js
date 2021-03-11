import React from 'react';
import socketIOClient from 'socket.io-client';

let socket;
const ENDPOINT = 'http://localhost:5000/';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			messageValue: '',
		};
	}

	componentDidMount() {
		socket = socketIOClient(ENDPOINT);

		socket.on('chat-message', (data) => {
			this.setState((prevState) => {
				const messages = prevState.messages.concat(data.message);
				return {
					messages,
				};
			});
		});
	}

	componentWillUnmount() {
		socket.disconnect();
	}

	handleChange = (e) => {
		this.setState({ messageValue: e.target.value });
	};

	sendMessage = (e) => {
		e.preventDefault();
		socket.emit('send-chat-message', {
			message: this.state.messageValue,
		});
		this.setState((prevState) => {
			const messages = prevState.messages.concat(this.state.messageValue);
			return {
				messages,
				messageValue: '',
			};
		});
	};

	render() {
		return (
			<div>
				<p>This is the chat window!</p>
				<div id="messages">
					{this.state.messages.map((value, index) => {
						return <p key={index}>{value}</p>;
					})}
				</div>
				<form onSubmit={this.sendMessage}>
					<label>
						Message:
						<input
							type="text"
							name="messageBox"
							onChange={this.handleChange}
							value={this.state.messageValue}
						/>
						<input type="submit" value="Send" />
					</label>
				</form>
			</div>
		);
	}
}

export default Chat;
