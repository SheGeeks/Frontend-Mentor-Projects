import React from "react";
import Link from "./Link";

const socialLinks = [
  {
    linkUrl: "https://github.com/shegeeks",
    linkName: "Github",
    linkClass: "git",
  },
  {
    linkUrl: "https://www.frontendmentor.io/profile/SheGeeks",
    linkName: "Frontend Mentor",
    linkClass: "fem",
  },
  {
    linkUrl: "https://linkedin.com/in/corvida",
    linkName: "LinkedIn",
    linkClass: "lin",
  },
  {
    linkUrl: "https://twitter.com/corvida",
    linkName: "X (Twitter)",
    linkClass: "twit",
  },
  {
    linkUrl: "https://instagram.com/birdingwhileblack",
    linkName: "Instagram",
    linkClass: "ig",
  },
];

export default function Links() {
  return (
    <div className="w-full flex flex-col gap-5 m-4 text-center">
      {socialLinks.map((link) => (
        // eslint-disable-next-line react/jsx-key
        <Link
          linkUrl={link.linkUrl}
          linkName={link.linkName}
          linkClass={link.linkClass}
        />
      ))}
    </div>
  );
}
