import React, { useState } from 'react';
import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector';
import QuoteCards from '../QuoteCards';

import { Quote } from '../../types';
import { categories } from '../data/categories';


const initialQuote: Quote = {
    text: "Clique em uma categoria ou em 'Surpreenda-me' para gerar uma nova frase inspiradora!",
    author: "Entrelinhas AI",
};

const Main: React.FC = () => {
    const [activeCategorySlug, setActiveCategorySlug] = useState<string>(categories[0].slug);
    const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);
    // NOVO: Estado de carregamento
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    // [TEMPORÁRIO] Handler para Copiar
    const handleCopyClick = () => {
        console.log('Ação de copiar!');
        alert("Ação de copiar será implementada no Ponto 16!");
    };


    // FUNÇÃO ASSÍNCRONA DE SIMULAÇÃO (Ponto 13)
    const simulateQuoteGeneration = (slug: string) => {
        // 1. Inicia o Carregamento
        setIsLoading(true);
        console.log(`Buscando frase para a categoria: ${slug}`);
        
        // 2. Simula o atraso de 1.5s
        setTimeout(() => {
            // 3. Atualiza a frase e finaliza o carregamento
            setCurrentQuote({
                text: `Nova frase gerada para ${slug.toUpperCase()}. Status: PRONTO!`,
                author: "Gemini Simulado",
            });
            setIsLoading(false);
        }, 1500); 
    };


    // Handler de Seleção de Categoria
    const handleCategorySelect = (slug: string) => {
        setActiveCategorySlug(slug);
        simulateQuoteGeneration(slug);
    };

    // Handler para o botão "Surpreenda-me"
    const handleSurpriseMe = () => {
        simulateQuoteGeneration('random');
    };

  return (
    <>
       
      <main className="w-full min-h-screen flex flex-col bg-white items-center pt-1 max-w-7xl mx-auto
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