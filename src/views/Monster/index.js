import React, { useEffect } from "react";
import "./monster.css";
import { motion } from "framer-motion";
import Virus from "./Virus";

const Monster = ({ health, gameOver, attack }) => {
  useEffect(() => {
    if (health < 1) {
      gameOver();
    }
  }, [health, gameOver]);
  return (
    <div className="Monster">
      <motion.p
        initial={{ height: health }}
        animate={{
          height: health + "%",
          backgroundColor:
            health < 60 ? "#DD03A7" : health < 40 ? "#FD72DA" : "#820263",
        }}
      ></motion.p>
      <h2>
        <Virus attack={attack} />
      </h2>
    </div>
  );
};
export default Monster;
