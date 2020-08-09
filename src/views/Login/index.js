import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { loginPlayer, clearRegister } from "../../actions/authAction";
import { getLogs } from "../../actions/logActions";
import store from "../../store";

import "./login.css";

const Login = ({ auth, errors, loginPlayer, getLogs, history }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginPlayer(data);
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      getLogs(auth.user.id);
      history.push("/arena");
    }
    if (auth.registered) {
      store.dispatch(clearRegister());
    }
  }, [auth.isAuthenticated, auth.registered, auth.user.id, getLogs, history]);

  return (
    <div className="Login">
      <h2>Hero, hello hero!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          ref={register}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
          autoComplete="current-password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button>Login</button>
      </form>
      <p>
        Doesn't have account yet? Register <Link to="/register">here</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  loginPlayer,
  clearRegister,
  getLogs,
})(withRouter(Login));
