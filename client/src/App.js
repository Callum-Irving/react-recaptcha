import './App.css';
import React from 'react';
import RecaptchaOverlay from './RecaptchaOverlay';
import Chat from './Chat';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlay: {
				overlay: true,
				content: false,
				overlayEnabled: true,
			},
		};
	}

	overlayOff() {
		this.setState({
			overlay: {
				overlay: true,
				content: true,
				overlayEnabled: false,
			},
		});
		// Wait for animation
		sleep(1000).then(() => {
			this.setState({
				overlay: {
					overlay: false,
					content: true,
				},
			});
		});
	}

	captchaUpdate = (value) => {
		// Send captcha to be verified
		// If verified, hide fill-screen
		this.overlayOff();
	};

	render() {
		return (
			<div>
				{this.state.overlay.overlay && (
					<RecaptchaOverlay
						enabled={this.state.overlay.overlayEnabled}
						captchaUpdate={this.captchaUpdate}
					/>
				)}
				{this.state.overlay.content && (
					<div className="content">
						<Chat />
					</div>
				)}
			</div>
		);
	}
}

export default App;
