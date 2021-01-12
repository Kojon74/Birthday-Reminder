import React from "react";
import "./BirthdayList.css";

const Birthday = ({ img, name, age }) => {
  return (
    <div className="birthday">
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <h4>{age} years</h4>
      </div>
    </div>
  );
};

function BirthdayList({ birthdays }) {
  return (
    <div className="birthday-list">
      {birthdays.map((birthday) => {
        return <Birthday {...birthday} />;
      })}
    </div>
  );
}

export default BirthdayList;
