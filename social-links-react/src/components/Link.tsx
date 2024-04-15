import React from "react";

function Link(props: { linkUrl: any; linkName: any }) {
  const { linkUrl, linkName } = props;
  return (
    <a href={linkUrl} target="_blank" className="link">
      {linkName}
    </a>
  );
}

export default Link;
