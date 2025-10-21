import React, { useState } from 'react'; 
import LinkButton from '../ui/LinkButton'; 
import Image from 'next/image';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  
    <header className="bg-[#F2F2F2] py-[16px]  
    shadow-[0_12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]
    ">

      <div 
        className="
          flex justify-center items-center 
          px-[92px]             
          max-w-[1440px]        
          mx-auto               
        "
      > 
        
      <a href="/">
        <Image  
          src={'logo.svg'} 
          alt="Logo Entrelinhas" 
          width={100}
          height={50}
          className="h-8 md:h-9 w-auto" 
        />
      </a>
        
      {/* <nav className="hidden md:flex space-x-4">
        <LinkButton href="#" variant="secondary">
          About Us
        </LinkButton>

        <LinkButton href="#" variant="secondary">
          Contact Us
        </LinkButton>
      </nav> */}
        
      </div>
    </header>
  );
};

export default Header;