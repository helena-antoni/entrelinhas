import React, { useState } from 'react';

import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector'; 

 
const Main: React.FC = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('motivational');

  return (
    <>
       
      <main className="min-h-screen bg-white pt-1 w-[1256px] mx-auto">
        
        <WelcomeSection />
        
        {/*cards*/}
        <section className="container flex flex-col ">
          
          <p className="md:text-3xl  max-full
           font-indie  text-3xl font-normal  text-[#211D23] text-left">
            Escolha uma categoria ou deixe o acaso falar por você.
          </p>
        
          <CategorySelector 
            onSelect={setSelectedCategory} // Função que atualiza o estado
          />
        
        
          
        </section>
      </main>
    </>
  );
};

export default Main;