import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="w-full items-left font-indie font-normal  
    p-0 mt-16  ">
      
      <h1 className="
                // Mobile: 
                text-[44px] leading-[120%] tracking-[-0.44px] text-[#CC7000] 
                
                //Tablet 
                md:text-[52px] md:leading-[130%] md:tracking-[-0.36px] 
                md:text-[#CC7000]
                
                // Desktop
                lg:text-[52px] lg:leading-[120%] lg:tracking-[-0.52px] 
                lg:text-[#CC7000]
            ">
                Bem-vindo(a) ao Entrelinhas!
            </h1>
       <p className="
                // Mobile
                text-[28px] leading-[120%] tracking-[-0.44px]  
                
                // Tablet 
                md:text-[36px] md:leading-[130%] md:tracking-[-0.36px] 
                md:text-[#211D23]
                
                // Desktop: 
                 
                font-indie  text-3xl text-[#211D23] text-left">
                 
                 
         
                Um lugar onde as palavras encontram quem precisa ouvi-las.
            </p>

            
    </section>
  );
};

export default WelcomeSection;