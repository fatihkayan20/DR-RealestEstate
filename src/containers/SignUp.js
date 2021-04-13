import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { setAlert } from "../actions/alert";
import { signup } from "../actions/auth";
import PropTypes from "prop-types";

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2)
      setAlert("Passwords do not match", "error");
      
    else 
      signup({ name, email, password, password2 });
  };
  if (isAuthenticated) 
    return <Redirect to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>Realest Estate - Sign Up</title>

        <meta name="description" content="sign up page" />
      </Helmet>
      <h1 className="auth__title">Sign Up</h1>
      <p className="auth__lead">Create your Account</p>
      <form className="auth__form" action="" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
            className="auth__form__input"
          />
        </div>
        <div className="auth__form__group">
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            className="auth__form__input"
          />
        </div>

        <div className="auth__form__group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            className="auth__form__input"
          />
        </div>

        <div className="auth__form__group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
            className="auth__form__input"
          />
        </div>

        <button className="auth__form__button">Register</button>
      </form>

      <p className="auth_authtext">
        Alredy have an account?
        <Link className="auth__authtext__link" to="/login">
          Login Now
        </Link>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  setAlert:PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps , {setAlert, signup}) (SignUp);
