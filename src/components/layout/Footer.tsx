import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => { 
    const highlightText = "text-b"; 
    const copyrightStyle = "text-[#663800] text-[18px] leading-[150%] font-normal ";  

   return (
        <footer className="
            w-full 
            bg-[#F2F2F2] 
            border-t border-gray-200
            
            pt-[176px] pb-[176px]             /* Mobile (~474px total) */
            md:pt-[104px] md:pb-[104px]       /* Tablet (~291px total) */
            lg:pt-[44px] lg:pb-[44px]         /* Desktop (~148px total) */
        ">
            <div className=" 
                max-w-[1440px] mx-auto 
                px-6 text-center  sm:px-12 lg:px-24 
                flex flex-col  gap-8 md:gap-12 lg:gap-0                
                lg:flex-row lg:justify-between lg:items-center
                
               
            ">
                <div className="
                    w-full 
                    lg:w-auto 
                ">
                    <a href="/" className="flex justify-center lg:justify-start">
                        <Image  
                            src={'/logo.svg'}
                            alt="Logo Entrelinhas" 
                            width={120} 
                            height={30}
                            className="h-8 w-auto opacity-70" 
                        />
                    </a>
                </div>

                {/* info e crédito */}
                <div className="
                    w-full 
                    lg:w-auto
                    
                    // --- RISCO VERTICAL (Tablet e Desktop) ---
                    md:border-l md:border-gray-400/50 
                    md:pl-8 lg:pl-10 
                    
                    // Alinhamento do texto no desktop
                    lg:text-right
                ">
                    <p className="
                        font-indie font-normal 
                        text-xl md:text-2xl 
                        text-[#4C2A00] 
                        mb-2 
                        lg:mb-1
                    ">
                        "Entrelinhas – porque o que importa está no meio das linhas."
                    </p>

                    <p className={`mt-1 text-xs sm:text-sm leading-[150%]  
                        font-inter text-center text-[#663800] font-normal text-[18px] 
                         lg:text-right `}>
                        Designed by 
                        <a 
                        target="_blank"
                        href='https://github.com/estercopinheiro'
                        className={"font-bold"}> <span className='hover:bg-[#FFF3E5]'>Ester Pinheiro</span> </a> 
                        & Developed by 
                        <a 
                        target="_blank"
                        href='https://github.com/helena-antoni'
                        className={"font-bold"}> <span className='hover:bg-[#FFF3E5]'>Helena Antoni</span> </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;