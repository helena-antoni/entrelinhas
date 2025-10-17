// src/components/Header.jsx
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-md mt-3 max-w-[1256] h-[68px] border border-red-600 p-4">      
          
    <div className="border border-red-600 p-4">         
      <a href="/">
        <img 
          src={logo}
          alt="Logo Entrelinhas" 
          className="h-8 md:h-9 w-auto" 
        />
      </a>
      </div>

    </header>
  );
};

export default Header;