import React, { useState } from 'react';
import logo from '../../assets/logo.svg'; 
import LinkButton from '../ui/LinkButton'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  
    <header className="bg-[#F2F2F2] py-[16px]  shadow-sm">

      <div 
        className="
          flex justify-between items-center 
          px-[92px]             
          max-w-[1440px]        
          mx-auto               
        "
      > 
        
       
      <a href="/">
        <img 
          src={logo} 
          alt="Logo Entrelinhas" 
          className="h-8 md:h-9 w-auto" 
        />
      </a>
        

      <nav className="hidden md:flex space-x-4">
        <LinkButton href="#" variant="secondary">
          About Us
        </LinkButton>

        <LinkButton href="#" variant="secondary">
          Contact Us
        </LinkButton>
      </nav>
        
      </div>
    </header>
  );
};

export default Header;