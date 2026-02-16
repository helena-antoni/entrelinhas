import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="w-full text-left font-indie font-normal p-0" >
      
      <h1 className=" text-[var(--text-h1)] 
        // Mobile 
        text-[44px] leading-[110%] tracking-[-0.44px]
                
        //Tablet 
        // md:text-[52px] md:leading-[130%] md:tracking-[-0.36px]
                
        // Desktop
        lg:text-[52px] lg:leading-[120%] lg:tracking-[-0.52px]">

        Bem-vindo(a) ao Entrelinhas!
      </h1>
      <p className=" text-[var(--text-primary)] 
          // Mobile
          text-[28px] leading-[140%] tracking-[-0.44px]  
                
          // Tablet 
          md:text-[36px] md:leading-[130%] md:tracking-[-0.36px] 
         
                
          // Desktop:        
          font-indie  text-3xl text-left">

          Um lugar onde as palavras encontram quem precisa ouvi-las.
        </p>

            
    </section>
  );
};

export default WelcomeSection;