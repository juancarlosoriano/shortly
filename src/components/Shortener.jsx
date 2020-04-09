import React, { useState } from "react";

const Shortener = ({ handleURLShorten }) => {
  const [input, setInput] = useState("");
  const [errorEmptyString, setErrorEmptyString] = useState(false);

  const handleChange = (e) => {
    if (e.currentTarget !== "" && errorEmptyString) {
      setErrorEmptyString(false);
    }
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setErrorEmptyString(true);
    } else {
      handleURLShorten(input);
      setInput("");
    }
  };

  const shortenerFormClass = () => {
    const baseClass = "c-shortener__form";
    return errorEmptyString ? `${baseClass} ${baseClass}--error` : baseClass;
  };

  return (
    <section className="l-container c-shortener">
      <form
        className={shortenerFormClass()}
        action="/"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Shorten It!" />
        {errorEmptyString && (
          <span className="c-shortener__form-error-msg">
            <em>Please add a link</em>
          </span>
        )}
      </form>
    </section>
  );
};

export default Shortener;
