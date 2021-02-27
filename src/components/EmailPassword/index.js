import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetAllAuthForms, resetPassword } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrap from './../AuthWrap';
import FormInput from './../../components/Forms/FormInput';
import Button from './../../components/Forms/Button';

const mapState = ({ user }) => ({
	resetPasswordSuccess: user.resetPasswordSuccess,
	resetPasswordError: user.resetPasswordError
});

const EmailPassword = (props) => {
	const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
	const dispatch = useDispatch();
	const [ email, setEmail ] = useState('');
	const [ errors, setErrors ] = useState([]);

	useEffect(
		() => {
			if (resetPasswordSuccess) {
				dispatch(resetAllAuthForms());
				props.history.push('/login');
			}
		},
		[ resetPasswordSuccess ]
	);

	useEffect(
		() => {
			if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
				setErrors(resetPasswordError);
			}
		},
		[ resetPasswordError ]
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ email }));
	};

	const configAuthWrap = {
		headline: 'Email Password'
	};
	return (
		<AuthWrap {...configAuthWrap}>
			<div className="formWrap">
				{errors.length > 0 && (
					<ul>
						{errors.map((e, index) => {
							return <li key={index}>{e}</li>;
						})}
					</ul>
				)}
				<form onSubmit={handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						placeholder="Email"
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<Button type="submit">Email Password</Button>
				</form>
			</div>
		</AuthWrap>
	);
};

export default withRouter(EmailPassword);