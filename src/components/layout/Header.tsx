import React, { useState } from 'react';  
import Image from 'next/image';
import { PRIMARY_BUTTON_CLASSES_HEADER, SECONDARY_BUTTON_CLASSES_HEADER} from '../../utils/styeButtons';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
  <header className="bg-[#FFE8CC] py-[16px] relative z-10 shadow-[0_12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]">

    <div className="flex justify-between items-center px-[92px] max-w-[1440px] mx-auto"> 
          
      <a href="/">
        <Image  
          src={'logo.svg'} 
          alt="Logo Entrelinhas" 
          width={100}
          height={50}
          className="h-8 md:h-9 w-auto" 
        />
      </a> 
          
      <div className="flex items-center gap-1 p-0">
        <button 
          onClick={() => setTheme('light')}
          className={theme === 'light' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER}
          title="Modo Claro"
        >
          <span className="material-symbols-rounded ">light_mode</span>
        </button>
          
        <div className="w-[2px] h-9 bg-[#4C2A00]" aria-hidden="true"></div>

        <button 
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER}
          title="Modo Escuro"
         >
          <span className="material-symbols-rounded ">dark_mode</span>
        </button>

      </div>
    </div>
  </header>
  );
};

export default Header;