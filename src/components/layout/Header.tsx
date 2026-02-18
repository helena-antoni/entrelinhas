import Image from 'next/image';
import { PRIMARY_BUTTON_CLASSES_HEADER, SECONDARY_BUTTON_CLASSES_HEADER} from '../../utils/styeButtons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
  <header className="bg-[var(--bg-card)] py-6 relative z-10 shadow-[0_12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]">

    <div className="flex justify-between items-center mx-auto max-w-[1440px]   
      px-6 md:px-12 lg:px-[92px] select-none"> 
          
      <a href="#">
        <Image  
          src={theme === 'light' ? 'logo-light-mode.svg' : 'logo-dark-mode.svg'}   
          alt="Logotipo Entrelinhas escrito em caligrafia cursiva na cor marrom"
          width={103}
          height={36}
          className="h-8 md:h-9 w-auto "  
          priority
        />
      </a> 


      <nav aria-label="Botões de configuração de aparência " 
        className="flex items-center gap-1 h-[36px]"
        >   
        <button 
          onClick={() => setTheme('light')}
          className={`${theme === 'light' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER} w-9 h-9 flex items-center justify-center`}
          aria-hidden="true"
          aria-label={theme === 'light' ? "Modo claro ativado": "Modo claro"}
          >
          

        <span className="material-symbols-rounded" aria-hidden="true">wb_sunny</span>
        </button>
          
        <div className="w-[2px] h-9 bg-[var(--button-pressed)]"></div>

        <button 
            onClick={() => setTheme('dark')}
            className={`${theme === 'dark' ? PRIMARY_BUTTON_CLASSES_HEADER : SECONDARY_BUTTON_CLASSES_HEADER} w-11 h-11 flex items-center justify-center`}
            aria-hidden="true"
            aria-label={theme === 'dark' ? "Modo escuro ativado": "Modo escuro"}
           >

            <span className="material-symbols-rounded" aria-hidden="true">moon_stars</span>
        </button>
      
       </nav>
    </div>
  </header>
  );
};

export default Header;