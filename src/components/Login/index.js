import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  signInUser,
  signInWithGoogle,
  resetAllAuthForms,
} from './../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import AuthWrap from '../AuthWrap';
import FormInput from './../../components/Forms/FormInput';
import Button from './../../components/Forms/Button';
import '../../default.scss';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const Login = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push('/');
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const configAuthWrap = {
    headline: 'Login',
  };
  return (
    <AuthWrap {...configAuthWrap}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrap>
  );
};

export default withRouter(Login);