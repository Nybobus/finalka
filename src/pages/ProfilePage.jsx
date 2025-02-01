// src/pages/Profile.js
import React, { useState } from 'react';


const Profile = () => {
  const [nickname, setNickname] = useState('User123'); // Начальный никнейм
  const [profilePic, setProfilePic] = useState(null); // Начальная фотография профиля
  const [newNickname, setNewNickname] = useState(nickname); // Используем новое состояние для никнейма
  const [newProfilePic, setNewProfilePic] = useState(null);

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value); // Обновляем новое значение никнейма
  };

  const handleNicknameSubmit = () => {
    setNickname(newNickname); // Применяем изменения
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file)); // Применяем новое изображение
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-pic">
          <img
            src={newProfilePic || profilePic || 'default-profile-pic.jpg'}
            alt="Profile"
          />
          <input
            type="file"
            onChange={handleProfilePicChange}
            accept="image/*"
            id="file-upload"
          />
        </div>
        <div className="profile-info">
          <div className="nickname">
            <h3>Nickname: {nickname}</h3>
            <input
              type="text"
              placeholder="Enter new nickname"
              value={newNickname}
              onChange={handleNicknameChange} // Сразу обновляем значение
            />
            <button onClick={handleNicknameSubmit}>Change Nickname</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
