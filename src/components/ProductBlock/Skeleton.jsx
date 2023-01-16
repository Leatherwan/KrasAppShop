import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={580}
    viewBox="0 0 280 580"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="260" height="310" />
    <rect x="-18" y="338" rx="0" ry="0" width="280" height="27" />
    <rect x="-8" y="375" rx="0" ry="0" width="270" height="79" />
    <rect x="3" y="478" rx="0" ry="0" width="126" height="28" />
    <rect x="134" y="470" rx="0" ry="0" width="130" height="45" />
    <rect x="68" y="529" rx="0" ry="0" width="130" height="45" />
  </ContentLoader>
);

export default Sceleton;
