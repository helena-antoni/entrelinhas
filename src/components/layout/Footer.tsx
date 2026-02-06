import React from 'react';
import Image from 'next/image';
import heartfooter from 'heart-footer.svg'; 

import lineDesktop from '../../assets/between-lines-dektop.svg';
import lineTablet from '../../assets/between-lines-tablet.svg';
import lineMobile from '../../assets/between-lines-mobile.svg';
  

const Footer: React.FC = () => {  
   return (
    <footer className="w-full bg-[#FFE8CC] mt-[133px] md:mt-52 lg:mt-40
        relative z-20 overflow-hidden
        shadow-[0_-12px_16px_-4px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.03)]
        pt-8 pb-4 md:pt-12 md:pb-6 
            px-6 md:px-[48px] lg:px-[96px]">

        <div className="  mx-auto lg:m-auto  max-w-[1248px]
            flex flex-col md:flex-row items-start md:items-start gap-8  lg:gap-0">
                
            <div className=" flex justify-start lg:px-12 lg:py-6 ">
                <a href="/" className=" ">
                    <Image  
                        src={'/logo.svg'}
                        alt="Logo Entrelinhas" 
                        width={102} 
                        height={24} 
                    />
                </a>
            </div>

            {/* info e crédito */}
            <div className="w-full md:w-auto lg:m-auto md:m-auto md:border-l lg:border-l  border-[#4C2A00] 
                flex flex-col items-start  text-start   md:text-start
                md:pl-10 text-[#4C2A00]">
                    
                <p className=" font-indie font-normal text-[22px] pb-6
                    md:text-2xl  leading-[-22%]  tracking-[140%]   ">
                    "Entrelinhas – porque o que importa está no meio das linhas."
                </p>

                <p className={`leading-[150%] font-medium text-left pb-2 `}>
                    &copy; 2026 Entrelinhas. All rights reserved.
                </p>

                <p className={` flex flex-wrap items-center justify-start lg:justify-end   text-sm 
                    font-medium text-[16px]  leading-[200%]  gap-1
                    `}> 
                        Feito com 
                        <Image 
                            src={"/heart-footer.svg"}
                            alt="Ícone do coração" 
                            width={20} 
                            height={18.35}  
                            className='w-[20px] h-[18.35]'
                        />
                        por 
                        <a 
                        target="_blank"
                        href='https://github.com/estercopinheiro'
                        className={" "}> <span className=' bg-[#FFAE4C] p-1.5 rounded-[12px] hover:bg-[#FFF3E5]'>Ester Pinheiro</span> </a> 
                        &
                        <a 
                        target="_blank"
                        href='https://github.com/helena-antoni'
                        className={" "}> <span className='bg-[#FFAE4C] p-1.5 rounded-[12px] hover:bg-[#FFF3E5]'>Helena Antoni</span> </a>
                    </p>
                </div>

            </div>
            

        <div className="lg:w-[1248px] m-auto mt-auto  ">
            <picture className="   pt-2 pb-8 px-6 ">
                <source media="(min-width: 1024px)" srcSet={lineDesktop.src} />
                
                <source media="(min-width: 768px)" srcSet={lineTablet.src} />
                
                <img 
                    src={lineMobile.src} 
                    alt="Linha decorativa" 
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '100px' }}
                />
            </picture>
        </div>
        </footer>
    );
}

export default Footer;