import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logOutPlayer } from "../../actions/authAction";
import isEmpty from "../../validations/isEmpty";

import "./nav.css";

const Nav = ({ auth, logOutPlayer }) => {
  return auth.isAuthenticated ? (
    <div className="Nav">
      <p className="profile">
        {isEmpty(auth.user.avatar) ? (
          auth.user.fullName
        ) : (
          <img src={auth.user.avatar} alt={auth.user.fullName} />
        )}
      </p>
      <button onClick={logOutPlayer}>Quit</button>
    </div>
  ) : (
    <div></div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOutPlayer })(withRouter(Nav));
