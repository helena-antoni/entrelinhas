import React from 'react';
import Image from 'next/image';
import heartfooter from 'heart-footer.svg';
import line from '../../assets/line-between-lines.svg';
  

const Footer: React.FC = () => {  
   return (
        <footer className="
            w-full 
            bg-[#FFE8CC] 
            border-t border-gray-200
            
            pt-[176px] pb-[176px]            
            md:pt-[104px] md:pb-[104px]       
            lg:pt-[44px] lg:pb-[44px]       
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
                <div className=" w-full lg:w-auto md:border-l md:border-gray-400/50 md:pl-8 lg:pl-10 lg:text-right text-[#4C2A00]  text-[16px] ">
                    
                    <p className=" font-indie font-normal text-xl md:text-2xl  leading-[-22%] mb-2 lg:mb-1 ">
                        "Entrelinhas – porque o que importa está no meio das linhas."
                    </p>

                    <p className={`leading-[150%] font-medium text-left`}>
                        &copy; 2026 Entrelinhas. Todos os direitos reservados.
                    </p>

                    <p className={` flex items-center justify-center lg:justify-start gap-1  
                        mt-3 text-xs sm:text-sm leading-[150%] text-left  font-inter font-normal
                        lg:text-left `}> 
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
                        className={"font-bold"}> <span className=' bg-[#FFAE4C] p-1.5 rounded-[12px] hover:bg-[#FFF3E5]'>Ester Pinheiro</span> </a> 
                        e
                        <a 
                        target="_blank"
                        href='https://github.com/helena-antoni'
                        className={"font-bold"}> <span className='bg-[#FFAE4C] p-1.5 rounded-[12px] hover:bg-[#FFF3E5]'>Helena Antoni</span> </a>
                    </p>
                </div>

            </div>
            
            <div className="mx-auto w-full max-w-[1440px]  md:pt-2.5 lg:pt-2.5 pt-2 flex-shrink-0">
                <Image  
                    src={line} 
                    alt="Linha laranja" 
                    width={1248}  
                    height={47}
                    className="w-full h-auto" 
                />
            </div>
        </footer>
    );
};

export default Footer;