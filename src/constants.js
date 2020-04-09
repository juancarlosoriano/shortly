import iconBrand from "./images/icon-brand-recognition.svg";
import iconRecords from "./images/icon-detailed-records.svg";
import iconCustom from "./images/icon-fully-customizable.svg";

import iconIG from "./images/icon-instagram.svg";
import iconFB from "./images/icon-facebook.svg";
import iconTW from "./images/icon-twitter.svg";
import iconPN from "./images/icon-pinterest.svg";

export const LEFT_LABELS = ["Features", "Pricing", "Resources"];

export const RIGHT_LABELS = ["Login"];

export const CARD_LABELS = [
  {
    title: "Brand Recognition",
    desc:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    iconURL: iconBrand,
  },
  {
    title: "Detailed Records",
    desc:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    iconURL: iconRecords,
  },
  {
    title: "Fully Customizable",
    desc:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    iconURL: iconCustom,
  },
];

export const SITE_LINK_COLUMN_TITLES = ["Feature", "Resources", "Company"];

export const SITE_LINK_LABELS = {
  Feature: ["Link Shortening", "Branded Links", "Analytics"],
  Resources: ["Blog", "Developers", "Support"],
  Company: ["About", "Our Team", "Careers", "Contact"],
};

export const SOCIAL_LABELS = [
  { title: "facebook", icon: iconFB },
  { title: "twitter", icon: iconTW },
  { title: "pinterest", icon: iconPN },
  { title: "instagram", icon: iconIG },
];
