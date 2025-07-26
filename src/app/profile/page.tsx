'use client';

import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) {
    return <p className="p-8 text-center text-gray-600">No user data found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <p><strong>Name:</strong> {userData.name || 'N/A'}</p>
      <p><strong>Email:</strong> {userData.email || 'N/A'}</p>
      <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p>
    </div>
  );
};

export default Profile;
