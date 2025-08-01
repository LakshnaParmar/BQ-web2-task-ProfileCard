import React from 'react';
import UserProfileCard from './ProfileCard';

function App() {
  const userData = {
    name: 'Lakshna Vinoo',
    email: 'lashkna@example.com',
    bio: 'Frontend developer with experience in HTML, CSS, JavaScript, React, Tailwind, Bootstrap and building interactive UIs.',
    avatar: 'https://tse2.mm.bing.net/th/id/OIP.tMvUrmrmrWgys3KcDg9AXQHaHa?pid=Api&P=0&h=220'
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
      <UserProfileCard {...userData} />
    </div>
  );
}

export default App;
