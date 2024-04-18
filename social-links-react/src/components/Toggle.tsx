"use client";
import { useState } from "react";

let count = 0;

export default function Toggle() {
  const imgLight = "/images/sun-to-moon-loop.svg?" + count;
  const imgDark = "/images/moon-to-sun-loop.svg?" + count;
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    count++;
  };

  const style = {
    backgroundImage: dark ? `url(${imgDark})` : `url(${imgLight}) `,
  };

  return (
    <button
      aria-labelledby="toggle-label"
      style={style}
      className="absolute top-0 right-0 m-[-85px] w-[150px] h-[150px] rotate-45 bg-[length:25%] dark:bg-[length:30%] bg-[bottom_-12px_left_50%] dark:bg-[bottom_-21px_left_50%] hover:bg-[bottom_2px_left_50%] dark:hover:bg-[bottom_2px_left_50%] shadow-[0_0_0_1px_#607326] border-none bg-sky-950 dark:hover:bg-black/30 bg-no-repeat cursor-pointer hover:bg-black/90 dark:bg-black/70 transition"
      onClick={toggleTheme}
    >
      <span id="toggle-label" hidden>
        Toggle color mode
      </span>
    </button>
  );
}
