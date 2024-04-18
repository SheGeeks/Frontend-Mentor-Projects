/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

let avatar = require("../../public/images/av.jpg");

export default function UserInfo() {
  return (
    <div className="text-center flex flex-col align-center ">
      <a
        href="https://dev.shegeeks.net"
        id="folio_link"
        aria-label="Corvida's portfolio (opens in a new window)"
      >
        <Image
          src={avatar}
          alt="Frontend Developer, Corvida"
          width="75"
          height="75"
          className="user_img rounded-full shadow-md m-auto"
        />
      </a>
      <div className="user_info font-semibold my-4">
        <h1 className="name text-2xl">Corvida Raven</h1>
        <p className="loc text-lprimary dark:text-accent">
          Atlanta, Georgia, USA
        </p>
      </div>
      <div className="bio">
        <p>
          Frontend dev <span>&amp;</span> avid birder
        </p>
      </div>
    </div>
  );
}
