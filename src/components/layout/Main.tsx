import React, { useState } from 'react';
import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector';
import QuoteCards from '../QuoteCards';
 
import { categories } from '../data/categories';
import { Quote } from '../types';

const initialQuote: Quote = {
  text: "Clique em uma categoria ou em 'Surpreenda-me' para gerar uma nova frase inspiradora!",
  author: "Entrelinhas AI",
  categorySlug: ''
};

const Main: React.FC = () => {
    const [activeCategorySlug, setActiveCategorySlug] = useState<string>(categories[0].slug);
    const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);
    
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const handleCopyClick = () => {
        console.log('Ação de copiar!');
        alert("Ação de copiar será implementada no Ponto 16!");
    };

    const simulateQuoteGeneration = (slug: string) => {
        
        setIsLoading(true);
        console.log(`Buscando frase para a categoria: ${slug}`);
        
        setTimeout(() => {

            setCurrentQuote({
                text: `Nova frase gerada para ${slug.toUpperCase()}. Status: PRONTO!`,
                author: "Gemini Simulado",
                categorySlug: slug
            });
            setIsLoading(false);
        }, 1500); 
    };

    // categoria
    const handleCategorySelect = (slug: string) => {
        setActiveCategorySlug(slug);
        simulateQuoteGeneration(slug);
    };

    // surpreenda-me
    const handleSurpriseMe = () => {
        simulateQuoteGeneration('random');
    };

  return (
    <>       
      <main className="w-full min-h-screen flex flex-col bg-white  
       pt-1 max-w-7xl mx-auto
      px-4 sm:px-6 md:px-8 pb-16
      ">
        
        <WelcomeSection />
        
        {/*cards*/}
        <section className="container flex flex-col ">
          
          <p className="md:text-3xl  max-full
           font-indie  text-3xl font-normal  text-[#211D23] text-left">
            Escolha uma categoria ou deixe o acaso falar por você.
          </p>
        
          {/* Seletor de Categorias */}
            <div className="w-full mt-8 sm:mt-10 md:mt-12">
                <CategorySelector 
                    onSelect={handleCategorySelect} 
                />
            </div>
          

          {/* Card da Frase */}
            <div className="w-full mt-8">
                <QuoteCards 
                    quote={currentQuote} 
                    onSurpriseMeClick={handleSurpriseMe} 
                    onCopyClick={handleCopyClick}
                    isLoading={isLoading} // PASSANDO O ESTADO DE CARREGAMENTO
                />
            </div>
          
        </section>
      </main>
    </>
  );
};

export default Main;