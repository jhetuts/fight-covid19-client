import React from "react";
import "./history.css";

const History = ({ history }) => {
  const backGroundColor = (status) => {
    if (status.toLowerCase() === "victory") {
      return "#16a22d";
    }
    if (status.toLowerCase() === "draw") {
      return "#6C3A5C";
    }
    if (status.toLowerCase() === "surrendered") {
      return "#352D39";
    }
    return "#CC4BC2";
  };

  return (
    <div className="History">
      {history &&
        history.map((list, key) => (
          <div
            key={key}
            style={{ backgroundColor: backGroundColor(list.status) }}
          >
            <p>{list.status}</p>
            <p>
              {`${new Date(list.createdAt).getMonth() + 1}/${new Date(
                list.createdAt
              ).getUTCDate()}/${new Date(
                list.createdAt
              ).getUTCFullYear()}`}{" "}
              <span>{`${
                new Date(list.createdAt).getHours() +
                ":" +
                new Date(list.createdAt).getMinutes() +
                ":" +
                new Date(list.createdAt).getSeconds()
              }`}</span>
            </p>
          </div>
        ))}
    </div>
  );
};
export default History;
