import React from "react";

const Card = ({ iconURL, title, desc }) => {
  return (
    <div className="c-card">
      <div
        className="c-card__icon"
        style={{ backgroundImage: `url(${iconURL})` }}
      ></div>
      <h3 className="c-card__title">{title}</h3>
      <p className="c-card__desc">{desc}</p>
    </div>
  );
};

export default Card;
