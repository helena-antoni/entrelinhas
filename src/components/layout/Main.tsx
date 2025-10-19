import React, { useState } from 'react'; 

import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector'; 
import QuoteCard from '../QuoteCards';


import { quotes } from '../data/quotes'; 
import { Quote } from '../types/index'; 

 

const Main: React.FC = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('motivational');
  

  const getFilteredQuote = (categorySlug: string): Quote | undefined => {

    if (categorySlug === 'random') {
          const randomIndex = Math.floor(Math.random() * quotes.length);
          return quotes[randomIndex];
      }

      return quotes.find(q => q.categorySlug === categorySlug);
  };
  

  const activeQuote = getFilteredQuote(selectedCategory);

  return (
    <>
       
      <main className="w-full min-h-screen flex flex-col bg-white items-left pt-1  
        max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pb-16
      ">
        
        <WelcomeSection />
    
        <section className="container flex flex-col  max-w-7xl ">
          
          <p className="md:text-3xl  max-full
           font-indie  text-3xl font-normal  text-[#211D23] text-left">
            Escolha uma categoria ou deixe o acaso falar por você.
          </p>
        
          <CategorySelector 
            onSelect={setSelectedCategory} 
          />
          
          <div className="w-full mt-12 mb-24 max-w-3xl"> 
            {activeQuote ? (
                <QuoteCard quote={activeQuote} /> 
            ) : (
                <p className="text-center text-lg text-gray-500">
                    Selecione uma categoria ou adicione mais frases.
                </p>
            )}
          </div>
          
        </section>
      </main>
    </>
  );
};

export default Main;