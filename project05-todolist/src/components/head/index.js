import React from "react";
import "./head.scss";

class Head extends React.Component {
  render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date();
    const currentDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="head">
        <div className="title">To Do List</div>
        <div className="subtitle">{currentDate}</div>
      </div>
    );
  }
}
export default Head;
