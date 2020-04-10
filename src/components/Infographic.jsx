import React, { useState } from "react";
import Card from "./Card";
import Shortener from "./Shortener";
import LinkBox from "./LinkBox";

import { CARD_LABELS } from "../constants";

const Infographic = () => {
  const [links, setLinks] = useState([]);

  const handleLinkSubmission = (inputLink, shortenedLink) => {
    const link = {
      inputLink: inputLink,
      shortenedLink: shortenedLink,
      isCopied: false,
    };
    setLinks([...links, link]);
  };

  const handleCopy = (index) => {
    const newLinks = links.map((link, i) => {
      if (i === index) {
        return {
          ...link,
          isCopied: true,
        };
      } else {
        return link;
      }
    });
    setLinks(newLinks);
  };

  return (
    <section className="c-infographic">
      <Shortener handleLinkSubmission={handleLinkSubmission} />
      {links.length > 0 && <LinkBox links={links} handleCopy={handleCopy} />}
      <header className="l-container c-infographic__header">
        <h2 className="c-infographic__title">Advanced Statistics</h2>
        <p className="c-infographic__desc">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <div className="l-container c-infographic__cards">
        {CARD_LABELS.map(({ title, desc, iconURL }, i) => {
          return <Card title={title} desc={desc} iconURL={iconURL} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Infographic;
