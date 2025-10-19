import React, { useState } from 'react'; 

import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector'; 
import QuoteCard from '../QuoteCards'; // Corrigido para o nome do arquivo que aparece na sua pasta: QuoteCards.tsx

// Dados e Tipos - Vamos assumir que resolvemos os caminhos para tipos e dados!
import { quotes } from '../data/quotes'; // Sair de layout/ (../) -> Sair de components/ (../) -> Entrar em data/
import { Quote } from '../types/index'; // Assumindo que você está usando o apelido ou o caminho corrigido

 

const Main: React.FC = () => {
  
  // 1. ESTADO: Gerencia a categoria ativa para filtragem.
  const [selectedCategory, setSelectedCategory] = useState<string>('motivational');
  
  // 2. LÓGICA DE FILTRAGEM: Encontra a frase a ser exibida.
  const getFilteredQuote = (categorySlug: string): Quote | undefined => {
      // Se for "Aleatória", pega qualquer frase.
      if (categorySlug === 'random') {
          const randomIndex = Math.floor(Math.random() * quotes.length);
          return quotes[randomIndex];
      }
      // Pega a primeira frase que bate com o slug selecionado.
      return quotes.find(q => q.categorySlug === categorySlug);
  };
  
  // A frase que será exibida no Card
  const activeQuote = getFilteredQuote(selectedCategory);

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
        
          <CategorySelector 
            onSelect={setSelectedCategory} // Função que atualiza o estado
          />
          

          {/* 3. CARD DA FRASE */}
          <div className="w-full mt-12 mb-24 max-w-3xl"> 
            {activeQuote ? (
                // Renderiza o QuoteCard com a frase
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