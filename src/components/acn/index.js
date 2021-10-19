import React from "react";

function ACN() {
  return (
    <div>
      <div className="ImageDivACN"></div>
      <h1 className="cloudNative">Cloud Native Africa</h1>
      <div
        style={{
          width: "100%",
          height: "0",
          paddingBottom: "10%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/EIiJp9cQ3GeEU"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ACN;
