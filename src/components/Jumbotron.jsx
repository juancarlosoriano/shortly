import React from "react";

const Jumbotron = () => {
  return (
    <div className="l-container c-jumbotron">
      <div className="c-jumbotron__left-pane">
        <h1 className="c-jumbotron__title">More than just shorter links</h1>
        <span className="c-jumbotron__subtitle">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </span>
        <br />
        <a className="c-jumbotron__button--pill" href="javascript:void(0)">
          Get Started
        </a>
      </div>
      <div className="c-jumbotron__img"></div>
    </div>
  );
};

export default Jumbotron;
