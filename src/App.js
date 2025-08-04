import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

import profileImage from "./profileDefault.jpg";

const profileData = [
  {
    name: "Kamogelo Bambo",
    title: "Data Scientist",
    image: profileImage,
    bio: "Kamo is a the best on the team. Contact him at kb@gmail.com.",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: profileImage,
    bio: "John is the companys new software engineer. Contact him at jd@gmail.com.",
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The A Team</h1>
      </header>
      <div className="profile-cards-container">
        {profileData.map((person, index) => (
          <ProfileCard
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            bio={person.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
