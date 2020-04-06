import React, { useState } from "react";
import "./App.scss";

import iconBrand from "./images/icon-brand-recognition.svg";
import iconRecords from "./images/icon-detailed-records.svg";
import iconCustom from "./images/icon-fully-customizable.svg";

import iconIG from "./images/icon-instagram.svg";
import iconFB from "./images/icon-facebook.svg";
import iconTW from "./images/icon-twitter.svg";
import iconPN from "./images/icon-pinterest.svg";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setCollapse(!collapse);
    console.log("Navbar collapse button clicked.");
  };

  const navbarClass = () => {
    const baseClass = "l-container c-navbar";
    if (collapse) {
      return clicked ? baseClass + " c-navbar--collapse" : baseClass;
    } else {
      return baseClass + " c-navbar--uncollapse c-navbar__uncollapsed";
    }
  };

  return (
    <nav className={navbarClass()}>
      <div className="c-navbar__logo">Shortly</div>
      <div className="c-navbar__nav">
        <ul className="c-navbar__nav-left">
          <li className="c-navbar__link c-navbar__link--left">
            <a href="#home">Features</a>
          </li>
          <li className="c-navbar__link c-navbar__link--left">
            <a href="#home">Pricing</a>
          </li>
          <li className="c-navbar__link c-navbar__link--left">
            <a href="#home">Resources</a>
          </li>
        </ul>
        <ul className="c-navbar__nav-right">
          <li className="c-navbar__link c-navbar__link--right">
            <a href="#home">Login</a>
          </li>
          <li className="c-navbar__link c-navbar__link--right">
            <a className="c-navbar__link--pill" href="#home">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <button className="c-navbar__btn-collapse" onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

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
        <a className="c-jumbotron__button--pill" href="#home">
          Get Started
        </a>
      </div>
      <div className="c-jumbotron__img"></div>
    </div>
  );
};

const Shortener = ({ handleURLShorten }) => {
  const [input, setInput] = useState("");
  const [errorEmptyString, setErrorEmptyString] = useState(false);

  const handleChange = e => {
    if (e.currentTarget !== "" && errorEmptyString) {
      setErrorEmptyString(false);
    }
    setInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
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

const Link = ({ link, index, handleCopy }) => {
  const { inputLink, shortenedLink, isCopied } = link;

  const handleClick = e => {
    navigator.clipboard.writeText(shortenedLink);
    handleCopy(index);
  };

  return (
    <div className="c-link">
      <div className="c-link__left">
        <p className="c-link__input-link">{inputLink}</p>
        <p className="c-link__shortened-link">{shortenedLink}</p>
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

const LinkBox = ({ links, handleCopy }) => {
  return (
    <section className="l-container c-linkbox">
      {links.map((link, i) => {
        return <Link link={link} key={i} index={i} handleCopy={handleCopy} />;
      })}
    </section>
  );
};

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

const Infographic = () => {
  const [links, setLinks] = useState([]);

  const createLink = inputLink => {
    const generatedString = Math.random()
      .toString(36)
      .substring(2, 8);
    const baseURL = "https://rel.ink/";

    const truncateText = text => {
      if (text.length > 60) {
        return text.substring(0, 60) + "...";
      }
      return text;
    };

    const link = {
      inputLink: truncateText(inputLink),
      shortenedLink: baseURL + generatedString,
      isCopied: false
    };
    setLinks([...links, link]);
  };

  const handleURLShorten = inputLink => {
    createLink(inputLink);
  };

  const handleCopy = index => {
    const newLinks = links.map((link, i) => {
      if (i === index) {
        return {
          ...link,
          isCopied: true
        };
      } else {
        return link;
      }
    });
    setLinks(newLinks);
  };

  return (
    <section className="c-infographic">
      <Shortener handleURLShorten={handleURLShorten} />
      {links.length > 0 && <LinkBox links={links} handleCopy={handleCopy} />}
      <header className="l-container c-infographic__header">
        <h2 className="c-infographic__title">Advanced Statistics</h2>
        <p className="c-infographic__desc">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <div className="l-container c-infographic__cards">
        <Card
          iconURL={iconBrand}
          title="Brand Recognition"
          desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your
      content."
        />
        <Card
          iconURL={iconRecords}
          title="Detailed Records"
          desc="Gain insights into who is clicking your links. Knowing
      when and where people engage with your content helps inform better
      decisions."
        />
        <Card
          iconURL={iconCustom}
          title="Fully Customizable"
          desc="Improve brand awareness and content discoverability
      through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
};

const CtaBanner = () => {
  return (
    <section className="c-cta-banner">
      <h2 className="c-cta-banner__title">Boost your links today</h2>
      <a className="c-cta-banner__btn" href="#home">
        Get Started
      </a>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="l-container c-footer__container">
        <div className="c-footer__logo">Shortly</div>
        <div className="c-footer__site-links">
          <div className="c-footer__site-links-col">
            <h2 className="c-footer__site-links-title">Features</h2>
            <a className="c-footer__site-link" href="#home">
              Link Shortening
            </a>
            <a className="c-footer__site-link" href="#home">
              Branded Links
            </a>
            <a className="c-footer__site-link" href="#home">
              Analytics
            </a>
          </div>
          <div className="c-footer__site-links-col">
            <h2 className="c-footer__site-links-title">Resources</h2>
            <a className="c-footer__site-link" href="#home">
              Blog
            </a>
            <a className="c-footer__site-link" href="#home">
              Developers
            </a>
            <a className="c-footer__site-link" href="#home">
              Support
            </a>
          </div>
          <div className="c-footer__site-links-col">
            <h2 className="c-footer__site-links-title">Company</h2>
            <a className="c-footer__site-link" href="#home">
              About
            </a>
            <a className="c-footer__site-link" href="#home">
              Our Team
            </a>
            <a className="c-footer__site-link" href="#home">
              Careers
            </a>
            <a className="c-footer__site-link" href="#home">
              Contact
            </a>
          </div>
        </div>
        <div className="c-footer__social-links">
          <a className="c-footer__social-link" href="#home">
            <img src={iconFB} alt="icon-facebook" />
          </a>
          <a className="c-footer__social-link" href="#home">
            <img src={iconTW} alt="icon-twitter" />
          </a>
          <a className="c-footer__social-link" href="#home">
            <img src={iconPN} alt="icon-pinterest" />
          </a>
          <a className="c-footer__social-link" href="#home">
            <img src={iconIG} alt="instagram" />
          </a>
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Infographic />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
