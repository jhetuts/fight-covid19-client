import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import Player from "../Player";
import Monster from "../Monster";
import CountDown from "../../components/Others/CountDown";

import {
  setPlayerHealth,
  setMonsterHealth,
  setSurrendered,
  resetGame,
  setCountDown,
  wasWon,
  gameOver,
} from "../../actions/gameAction";
import { addNewLog } from "../../actions/logActions";

import "./stage.css";

const Stage = ({
  auth,
  gameConfig,
  setCountDown,
  gameOver,
  resetGame,
  setMonsterHealth,
  setPlayerHealth,
  setSurrendered,
  wasWon,
  addNewLog,
}) => {
  const [listLogs, setListLogs] = useState([]);
  const [timerDisable, setTimerDisable] = useState(false);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [timeOuts, setTimeouts] = useState([]);
  const [willAttackMonster, setWillAttackMonster] = useState(false);
  const [willAttackPlayer, setWillAttackPlayer] = useState(false);

  const attackMonster = () => {
    const damage = randomDamageOrAmount();
    let newHealth = gameConfig.monsterHealth - damage;
    if (newHealth < 1) {
      newHealth = 0;
    }
    setMonsterHealth(newHealth);

    setWillAttackMonster(false);
    setWillAttackPlayer(true);

    toLog("Attack Monster", `You damage the monster by ${damage}.`, "Ongoing");
    debounce(attackPlayer);
  };

  const attackPlayer = () => {
    const damage = randomDamageOrAmount();
    let newHealth = gameConfig.playerHealth - damage;
    if (newHealth < 1) {
      newHealth = 0;
    }
    setPlayerHealth(newHealth);

    setWillAttackPlayer(false);
    setWillAttackMonster(true);

    toLog(
      "Attack Player",
      `Monster attack you with damage of ${damage}`,
      "Ongoing"
    );
  };

  const powerAttack = () => {
    const damage = randomDamageOrAmount();
    let newHealth = gameConfig.monsterHealth - damage;
    if (newHealth < 1) {
      newHealth = 0;
    }
    setMonsterHealth(newHealth);

    setWillAttackMonster(false);
    setWillAttackPlayer(true);

    toLog(
      "Power Attack",
      `Launched a power attack damage amounting ${damage}`,
      "Ongoing"
    );

    debounce(attackPlayer);
  };

  const healthRegen = () => {
    const health = randomDamageOrAmount();
    let newHealth = gameConfig.playerHealth + health;
    if (newHealth > 100) {
      newHealth = 100;
    }
    setPlayerHealth(newHealth);

    toLog(
      "Health Potion",
      `Health potions used, increased life by ${health}`,
      "Ongoing"
    );

    debounce(attackPlayer);
  };

  const randomDamageOrAmount = () => Math.floor(Math.random() * 10 + 1);

  const surrender = () => {
    setSurrendered();
    gameOver(false);
    toLog("Surrender", "You surrendered, what a shame!", "Defeat");
  };

  const reachedLimit = () => {
    gameOver(true);
    setTimerDisable(true);
  };

  const resetG = () => {
    resetGame();
    setListLogs([]);
    setCountDown(0);
    setTimerDisable(false);
    setDisabled(false);
  };

  const debounce = (callback) => {
    setDisabled(true);
    let run = setTimeout(() => {
      if (!gameConfig.gameOver) {
        callback();
        setDisabled(false);
      }
    }, 1000);

    setTimeouts((tos) => [run, ...tos]);

    if (typeof callback !== "function") {
      if (timeOuts.length !== 0) {
        timeOuts.map((tmo) => window.clearTimeout(tmo));
      }
      setTimeouts([]);
    }
  };

  const toLog = (action, description, conclusion) => {
    const newLog = {
      action,
      description,
      conclusion,
    };

    setListLogs((logs) => {
      const log = [newLog, ...logs];
      return log;
    });
  };

  const checkWinner = () => {
    debounce(false);
    let status;
    if (gameConfig.surrendered) {
      toLog("Surrendered", "You surrendered, what a shame!", "Defeat");
      setMessage("You surrendered, what a shame!");
      status = "Surrendered";
    } else {
      if (
        gameConfig.playerHealth > 0 &&
        gameConfig.playerHealth > gameConfig.monsterHealth
      ) {
        toLog(
          "Victory",
          `You won! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`,
          "Victory"
        );
        setMessage(
          `You won! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`
        );
        status = "Victory";
      }

      if (
        gameConfig.monsterHealth > 0 &&
        gameConfig.monsterHealth > gameConfig.playerHealth
      ) {
        toLog(
          "Defeat",
          `You lose! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`,
          "Defeat"
        );
        setMessage(
          `You lose! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`
        );

        status = "Defeat";
      }

      if (gameConfig.monsterHealth === gameConfig.playerHealth) {
        toLog(
          "Draw",
          `Draw! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`,
          "Draw"
        );
        setMessage(
          `Draw! Health ${gameConfig.playerHealth} vs ${gameConfig.monsterHealth} health of monster`
        );

        status = "Draw";
      }
    }

    addNewLog({
      playerId: auth.user.id,
      logs: listLogs,
      status,
    });

    return setListLogs([]);
  };

  useEffect(() => {
    if (gameConfig.gameOver) {
      checkWinner();
    }
  }, [gameConfig.gameOver]);

  return (
    <div className="Stage">
      <div className="leftCon">
        {!timerDisable && (
          <CountDown
            timeLimit={gameConfig.timeLimit}
            countDown={gameConfig.countDown}
            setCountDown={setCountDown}
            reachedLimit={reachedLimit}
            gameOver={gameConfig.gameOver}
          />
        )}
        <Monster
          wasWon={wasWon}
          gameOver={gameOver}
          health={gameConfig.monsterHealth}
          attack={willAttackMonster}
        />
        <Player
          wasWon={wasWon}
          gameOver={gameOver}
          health={gameConfig.playerHealth}
          attack={willAttackPlayer}
        />
        {disabled ? (
          <div className="Controls">
            <button disabled onClick={attackMonster}>
              Attack
            </button>
            <button disabled onClick={powerAttack}>
              Power Attack
            </button>
            <button disabled onClick={healthRegen}>
              Health Potion
            </button>
            <button disabled onClick={surrender}>
              Surrender
            </button>
          </div>
        ) : (
          <div className="Controls">
            <button onClick={attackMonster}>Attack</button>
            <button onClick={powerAttack}>Power Attack</button>
            {gameConfig.playerHealth !== 100 ? (
              <button onClick={healthRegen}>Health Potion</button>
            ) : (
              <button disabled onClick={healthRegen}>
                Health Potion
              </button>
            )}
            <button onClick={surrender}>Surrender</button>
          </div>
        )}
      </div>
      <div className="rightCon">
        <div className="logs">
          {listLogs.length !== 0 &&
            listLogs.map((logs, key) => <p key={key}>{logs.description}</p>)}
        </div>
      </div>
      {gameConfig.gameOver && (
        <div className="Popup">
          <p>{message}</p>
          <div className="ResetControls">
            <Link to="/arena">Menu</Link>
            <button onClick={resetG}>Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  gameConfig: state.gameConfig,
  auth: state.auth,
  logs: state.logs,
});

export default connect(mapStateToProps, {
  setPlayerHealth,
  setMonsterHealth,
  setCountDown,
  setSurrendered,
  resetGame,
  gameOver,
  addNewLog,
  wasWon,
})(withRouter(Stage));
