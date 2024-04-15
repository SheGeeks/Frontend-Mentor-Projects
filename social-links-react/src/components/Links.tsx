import React from "react";
import Link from "./Link";
// import LinkStyles from "../styles/Link.module.css";

export default function Links() {
  const socialLinks = [
    { linkUrl: "https://github.com/shegeeks", linkName: "Github" },
    {
      linkUrl: "https://www.frontendmentor.io/profile/SheGeeks",
      linkName: "Frontend Mentor",
    },
    { linkUrl: "https://linkedin.com/in/corvida", linkName: "LinkedIn" },
    { linkUrl: "https://twitter.com/corvida", linkName: "X (Twitter)" },
    {
      linkUrl: "https://instagram.com/birdingwhileblack",
      linkName: "Instagram",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 m-4 text-center">
      {socialLinks.map((link) => (
        // eslint-disable-next-line react/jsx-key
        <Link linkUrl={link.linkUrl} linkName={link.linkName} />
      ))}
    </div>
  );
}
