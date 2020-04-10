import React, { useState } from "react";
import { EMPTY_STRING_ERROR, INVALID_URL_ERROR } from "../constants";

const Shortener = ({ handleLinkSubmission }) => {
  const [input, setInput] = useState("");
  const [errorString, setErrorString] = useState("");

  const handleChange = (e) => {
    if (e.currentTarget !== "" && errorString) {
      setErrorString("");
    }
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("RED");
      setErrorString(EMPTY_STRING_ERROR);
    } else {
      console.log("GREEN");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("url", input);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("https://rel.ink/api/links/", requestOptions)
        .then((data) => data.json())
        .then((res) => {
          if (res.hashid) {
            const baseURL = "https://rel.ink/";
            handleLinkSubmission(input, baseURL + res.hashid);
            setInput("");
          } else if (res.url) {
            setErrorString(INVALID_URL_ERROR);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const shortenerFormClass = () => {
    const baseClass = "c-shortener__form";
    return errorString ? `${baseClass} ${baseClass}--error` : baseClass;
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
          title="URL Text Input"
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Shorten It!" />
        {errorString && (
          <span className="c-shortener__form-error-msg">
            <em>{errorString}</em>
          </span>
        )}
      </form>
    </section>
  );
};

export default Shortener;
