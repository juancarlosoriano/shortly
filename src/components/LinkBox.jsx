import React from "react";
import Link from "./Link";

const LinkBox = ({ links, handleCopy }) => {
  return (
    <section className="l-container c-linkbox">
      {links.map((link, i) => {
        return <Link link={link} key={i} index={i} handleCopy={handleCopy} />;
      })}
    </section>
  );
};

export default LinkBox;
