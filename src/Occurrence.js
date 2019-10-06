import React from "react";
import { format } from "timeago.js";
import Emoji from "./Emoji";

const Occurrence = ({ country, eventDate, locality, species }) => {
  const eventDateShort = eventDate.slice(0, 10);

  return (
    <div>
      {species === "Canis lupus" && (
        <h2 className="animal_wrapper">
          A wolf <Emoji symbol="🐺" label="Wolf" /> ({species}) has been spotted
          {locality && locality.length > 0 && (
            <span> near {locality}</span>
          )} in {country}.{" "}
          <span className="event_date">{format(eventDateShort, "en_US")}.</span>
        </h2>
      )}
      {species === "Vulpes vulpes" && (
        <h2 className="animal_wrapper">
          {" "}
          We have a fox <Emoji symbol="🦊" label="Fox" /> ({species})
          {locality && locality.length > 0 && <span> near {locality}</span>} in{" "}
          {country}.{" "}
          <span className="event_date">{format(eventDateShort, "en_US")}.</span>
        </h2>
      )}
      {species === "Lepus europaeus" && (
        <h2 className="animal_wrapper">
          <Emoji symbol="🐰" label="Hare" />
          An european hare ({species}) has been seen
          {locality && locality.length > 0 && (
            <span> near {locality} </span>
          )} in {country}.{" "}
          <span className="event_date">{format(eventDateShort, "en_US")}.</span>
        </h2>
      )}
    </div>
  );
};

export default Occurrence;
