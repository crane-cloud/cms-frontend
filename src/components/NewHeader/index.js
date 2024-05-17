import React from // { useState, useEffect, useRef }
"react";
import {  withRouter } from "react-router-dom";
import NewLogo from "../NewLogo";
import "./NewHeader.css";
import { DOCS_URL, BLOG_URL, FRONTEND_URL } from "../../config";

const NewHeader = () => {

  return (
    <header className="NewHeader">
      <NewLogo />
      <div className="HeaderLinksWrap">
        <div className="HeaderLink bold">
          <a
            href={`${DOCS_URL}`}
            className="HeaderLinkDocs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href={`${BLOG_URL}`}
            className="HeaderLinkDocs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
          {/* <Link className="HeaderLinkDocs" to="/pricing">Pricing</Link> */}
          <a
            href={`${FRONTEND_URL}/login`}
            className="HeaderLinkDocs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default withRouter(NewHeader);
