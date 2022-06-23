import React from 'react';
import avatar from "../../assets/images/avatar.jpg";
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="bg-gray-300 p-4">
        <img src={avatar} alt="avatar" className="h-8 block rounded-full ml-auto cursor-pointer"/>
      </div>
    </div>
  );
};

export default Header;