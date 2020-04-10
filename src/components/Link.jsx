import React from "react";

const Link = ({ link, index, handleCopy }) => {
  const { inputLink, shortenedLink, isCopied } = link;

  const handleClick = (e) => {
    navigator.clipboard.writeText(shortenedLink);
    handleCopy(index);
  };

  const truncateText = (text) => {
    if (text.length > 60) {
      return text.substring(0, 60) + "...";
    }
    return text;
  };

  return (
    <div className="c-link">
      <div className="c-link__left">
        <p className="c-link__input-link" title={inputLink}>
          {truncateText(inputLink)}
        </p>
        <p className="c-link__shortened-link" title={shortenedLink}>
          {shortenedLink}
        </p>
      </div>
      {isCopied ? (
        <button
          className="c-link__btn c-link__btn--copied"
          onClick={() => handleCopy(index)}
        >
          Copied!
        </button>
      ) : (
        <button className="c-link__btn" onClick={handleClick}>
          Copy
        </button>
      )}
    </div>
  );
};

export default Link;
