import React, { useEffect } from "react";
import "./player.css";
import { motion } from "framer-motion";

import Vaccine from "./Vaccine";
const Player = ({ health, gameOver, attack }) => {
  useEffect(() => {
    if (health < 1) {
      gameOver();
    }
  }, [health, gameOver]);
  return (
    <div className="Player">
      <motion.p
        initial={{ height: health }}
        animate={{
          height: health + "%",
          backgroundColor:
            health < 60
              ? "#F56A00"
              : health < 50
              ? "#DC602E"
              : health < 30
              ? "#BC412B"
              : "#65B540",
        }}
      ></motion.p>
      <h2>
        <Vaccine attack={attack} />
      </h2>
    </div>
  );
};
export default Player;
