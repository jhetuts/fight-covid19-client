import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setTimeLimit, resetGame } from "../../actions/gameAction";
import { getLogs } from "../../actions/logActions";

import History from "../../components/Common/History";

import "./arena.css";

const Arena = ({
  auth,
  gameConfig,
  setTimeLimit,
  history,
  logs,
  getLogs,
  resetGame,
}) => {
  const start = () => {
    history.push("/stage");
  };

  useEffect(() => {
    resetGame();
    getLogs(auth.user.id);
  }, [auth.user.id]);

  return (
    <div className="Arena">
      <div className="welcome">
        <h2>
          {auth.user.welcome ? auth.user.welcome : "Welcome to the Arena!"}
        </h2>
        <p>Where you will be fighting against evil viruses!</p>
        <div className="settings">
          <h3>
            <span>{auth.user.fullName}</span>
          </h3>
          <h4>Are you up for the challenge?</h4>
          <p>How long do you think can you last? </p>
          <p>
            <input
              type="number"
              name="time-limit"
              placeholder="Time Limit"
              value={gameConfig.timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
            />{" "}
            seconds
          </p>
        </div>
        <button onClick={start}>Start</button>
      </div>
      {logs.history[0] && logs.history[0].length !== 0 && (
        <div className="records">
          <h2>Your records</h2>
          <History history={logs.history[0]} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  gameConfig: state.gameConfig,
  logs: state.logs,
});
export default connect(mapStateToProps, {
  setTimeLimit,
  getLogs,
  resetGame,
})(withRouter(Arena));
