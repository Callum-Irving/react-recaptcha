import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function RecaptchaOverlay(props) {
	return (
		<div
			className="fill-screen"
			style={props.enabled ? { opacity: 100 } : { opacity: 0 }}
		>
			<div className="container-box">
				<h1 className="welcome-message">Welcome to Chat App!</h1>
				<p>Please check this captcha to gain access to the site</p>
				<ReCAPTCHA
					sitekey="6LcAHXkaAAAAAGZ9FezjX8KLWSBiD5-fZHPqqQJe"
					onChange={props.captchaUpdate}
				/>
				<button onClick={props.captchaUpdate}>Press</button>
			</div>
		</div>
	);
}

export default RecaptchaOverlay;
