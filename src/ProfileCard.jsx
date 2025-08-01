import React, { useState } from 'react';

const UserProfileCard = ({ name, bio, email, avatar }) => {
  const [showBio, setShowBio] = useState(true);

  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
      <img
        src={avatar}
        alt="User Avatar"
        className="w-30 h-30 mx-auto border-gray-300"
      />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-500 mb-2 font-semibold">{email}</p>

      {showBio && <p className="text-gray-500 font-semibold mb-4">{bio}</p>}

      <button
        onClick={toggleBio}
        className="px-4 py-2 bg-cyan-700 text-white rounded transition duration-200 font-semibold"
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
    </div>
  );
};

export default UserProfileCard;
