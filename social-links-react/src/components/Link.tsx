import React from "react";

function Link(props: { linkUrl: string; linkName: string; linkClass: string }) {
  const { linkUrl, linkName, linkClass } = props;

  return (
    <a
      href={linkUrl}
      target="_blank"
      className={
        linkClass +
        ` link relative font-bold dark:font-normal bg-[#ffffff43] dark:bg-[#5459458f] border border-[#aeaeae25] py-3 px-4 rounded shadow-[0_1px_1px_rgba(9,30,66,0.25),0_0_1px_1px_rgba(9,30,66,0.13)] dark:shadow-none dark:hover:shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2)] hover:bg-no-repeat hover:bg-left dark:hover:border-[#c5f82a] hover:transition-all `
      }
    >
      {linkName}
    </a>
  );
}

export default Link;
