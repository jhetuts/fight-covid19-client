import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { registerPlayer, clearRegister } from "../../actions/authAction";
import store from "../../store";

import "./register.css";

const Register = ({ auth, errors, registerPlayer, history }) => {
  const { register, handleSubmit } = useForm();
  const [registered, setRegistered] = useState("");
  const [imgSrc, setRandomImgSrc] = useState("");
  const onSubmit = (data) => {
    registerPlayer(data);
  };

  const randDomAvatar = () => {
    const url = "https://api.adorable.io/avatars/285/";
    const randomNum = Math.floor(Math.random() * 100 + 1);
    setRandomImgSrc(`${url}${randomNum}`);
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/arena");
    }
    if (auth.registered) {
      setRegistered("Registered successfully");
      setTimeout(() => {
        store.dispatch(clearRegister());
        history.push("/login");
      }, 1000);
    }
  }, [auth.isAuthenticated, auth.registered, history]);

  return (
    <div className="Register">
      <h2>Be a hero!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          ref={register}
          required
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          ref={register}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          ref={register}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
          autoComplete="current-password"
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          name="confirmpassword"
          type="password"
          placeholder="Confirm password"
          autoComplete="current-password"
          ref={register}
          required
        />
        {errors.confirmpassword && (
          <p className="error">{errors.confirmpassword}</p>
        )}
        <button type="button" onClick={randDomAvatar}>
          Pick your avatar
        </button>
        <img className="avatar" src={imgSrc} alt="" required />
        <input
          type="hidden"
          value={imgSrc}
          name="avatar"
          ref={register}
          required
        />
        <button>Register</button>
      </form>
      {errors.error && <p className="error">{errors.error}</p>}
      <p>
        Already have an account? Login <Link to="/login">here</Link>.
      </p>
      {auth.registered && <p>{registered}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerPlayer })(
  withRouter(Register)
);
