import React, { useState } from 'react';  
import Image from 'next/image';
import { PRIMARY_BUTTON_CLASSES_HEADER, SECONDARY_BUTTON_CLASSES_HEADER} from '../../utils/styeButtons';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
  <header className="bg-[var(--bg-card)] py-[24px] relative z-10 shadow-[0_12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]">

    <div className="flex justify-between items-center mx-auto max-w-[1440px]
      px-6 md:px-12 lg:px-[92px]"> 
          
      <a href="/">
        <Image  
          src={theme === 'dark' ? 'logo-light-mode.svg' : 'logo-dark-mode.svg'}          alt="Logo Entrelinhas" 
          width={103}
          height={36}
          className="h-8 md:h-9 w-auto " 
        />
      </a> 
          
      <div className="flex items-center gap-1 p-0">
        <button 
          onClick={() => setTheme('light')}
          className={`${theme === 'light' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER} w-11 h-11 flex items-center justify-center`}
          title="Modo Claro"
        >
          <span className="material-symbols-rounded ">wb_sunny</span>
        </button>
          
        <div className="w-[2px] h-9 bg-[var(--button-pressed)]" aria-hidden="true"></div>

        <button 
          onClick={() => setTheme('dark')}
          className={`${theme === 'dark' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER} w-11 h-11 flex items-center justify-center`}
          title="Modo Escuro"
         >
          <span className="material-symbols-rounded ">moon_stars</span>
        </button>

      </div>
    </div>
  </header>
  );
};

export default Header;