import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, title, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
