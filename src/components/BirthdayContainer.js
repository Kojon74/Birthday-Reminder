import React, { useState } from "react";
import BirthdayList from "./BirthdayList";
import { data } from "../data";
import "./BirthdayContainer.css";

function BirthdayContainer() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <div className="birthday-container">
      <h1>{birthdays.length} birthdays today</h1>
      <BirthdayList className="birthday-list" birthdays={birthdays} />
      <button
        className="btn"
        onClick={() => {
          setBirthdays([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default BirthdayContainer;
