import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="Page">
      <Header />
      <div className="ErrorPageConent">
        <div className="ErrorPageDigit">404</div>
        <div className="ErrorPageText">
          <div className="ErrorPageTextFirst">PAGE NOT FOUND</div>
          <div className="ErrorPageTextSecond">
            Sorry, the page you are looking for does not exist.
          </div>
          <div className="ErrorPageButton">
            <Link to="/">
              <button className="Primary-Btn">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
