import React from "react";

import "./MemberCard.css";

const MemberCard = (props) => {
  const { name, title, image } = props;
  return (
    <div className="MemberCard">
      <div
        className="MemberImageDiv"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="BottomContainer">
        <div className="MemberCardName">{name}</div>
        <div className="MemberCardDesc">{title}</div>
      </div>
    </div>
  );
};

export default MemberCard;
