import React from "react";
import { socialLinks } from "../data/socialLinks";

export default function Links() {
  return (
    <div className="w-full flex flex-col gap-5 m-4 text-center">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className={link.class + ` link`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
