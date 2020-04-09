import React from "react";
import {
  SITE_LINK_COLUMN_TITLES,
  SITE_LINK_LABELS,
  SOCIAL_LABELS,
} from "../constants";

const SiteLink = ({ label }) => {
  return (
    <a className="c-footer__site-link" href="#home">
      {label}
    </a>
  );
};

const SiteLinkColumn = ({ title, labels }) => {
  return (
    <div className="c-footer__site-links-col">
      <h2 className="c-footer__site-links-title">{title}</h2>
      {labels.map((label, i) => (
        <SiteLink label={label} key={i} />
      ))}
    </div>
  );
};

const SocialLink = ({ title, icon }) => {
  return (
    <a className="c-footer__social-link" href="#home">
      <img src={icon} alt={`icon-${title}`} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="l-container c-footer__container">
        <div className="c-footer__logo">Shortly</div>
        <div className="c-footer__site-links">
          {SITE_LINK_COLUMN_TITLES.map((title, i) => (
            <SiteLinkColumn
              title={title}
              labels={SITE_LINK_LABELS[title]}
              key={i}
            />
          ))}
        </div>
        <div className="c-footer__social-links">
          {SOCIAL_LABELS.map(({ title, icon }, i) => {
            return <SocialLink title={title} icon={icon} key={i} />;
          })}
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . &nbsp;Coded by <a href="#home">JC Soriano</a>.
        <p>
          Check out the{" "}
          <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">
            Original Challenge
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
