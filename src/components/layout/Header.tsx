import React, { useState } from 'react';  
import Image from 'next/image';
import lightModeIcon from '../../assets/light-mode-icon.svg';
import darkModeIcon from '../../assets/dark-mode-icon.svg';
 
import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../utils/styeButtons';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function onCopyClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
  
    <header className="bg-[#FFE8CC] py-[16px] 
    relative z-10 
    shadow-[0_12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]
    ">

      <div 
        className="
          flex justify-between items-center 
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
        
        <div className="flex items-center gap-1 ">

          <div className="flex items-center bg-[#4C2A00] rounded-[12px]   ">
            <button 
              onClick={() => setTheme('light')}
              className="p-1.5   Shover:bg-stone-200 transition-colors, "
              title="Modo Claro"
            > 
              <Image 
                src={lightModeIcon} 
                alt="Ícone de um sol" 
                width={24} 
                height={24}  
                className="cursor-pointer"
              />
            </button>
          </div>
          
          <div className="w-[2px] h-9 bg-[#4C2A00]" aria-hidden="true"></div>

          <div className="flex items-center rounded-[12px]    ">
            <button className="p-1.5  hover:bg-stone-200 transition-colors"> 
              <Image 
                  src={darkModeIcon} 
                  alt="Ícone de uma lua" 
                  width={24} 
                  height={24}  
                  className="cursor-pointer"
                />
                </button>
          </div>  
  
        </div>
        
      </div>
    </header>
  );
};

export default Header;