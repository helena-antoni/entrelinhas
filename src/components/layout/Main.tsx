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

    // function copy
    const handleCopyClick = async () => {
        // citação + autor
        const textToCopy = `${currentQuote.text} — ${currentQuote.author}`;

        try {
            // Usa a API nativa do navegador para copiar o texto
            await navigator.clipboard.writeText(textToCopy);
            
            alert("Citação copiada para a área de transferência!");

        } catch (err) {
            console.error('Falha ao copiar o texto: ', err);
            alert("Falha ao copiar o texto. Tente novamente.");
        }
    };


    // chamada API 
    const generateQuote = async (category: string) => {
        setIsLoading(true);

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category }),
            });

            const data = await response.json();

            if (response.ok) {
                setCurrentQuote(data as Quote); 
            } else {
                setCurrentQuote({ 
                    text: data.error || 'Erro desconhecido ao buscar frase.', 
                    author: 'Sistema',
                    categorySlug: category
                });
                console.error('API Error:', data.error);
            }

        } catch (error) {
            console.error('Fetch Error:', error);
            setCurrentQuote({ 
                text: 'Erro de conexão com o servidor.', 
                author: 'Sistema',
                categorySlug: category
            });
        } finally {
            setIsLoading(false); 
        }
    };

    // função real
    const handleCategorySelect = (slug: string) => {
        setActiveCategorySlug(slug);
        generateQuote(slug);  
    };

    // surpreenda-me:
    const handleSurpriseMe = () => {
        generateQuote('Aleatório');  
    };

  return (
    <>       
      <main className="w-full min-h-screen flex flex-col bg-white  
       pt-1 max-w-7xl mx-auto
      px-4 sm:px-8  
      ">
        
        <WelcomeSection />
        
        {/*cards*/}
        <section className="container w-full items-left ">
          
          <p className="md:text-3xl max-full pt-8 pb-8 
          text-left font-indie font-normal text-[#211D23] 
                
                //Mobile
                text-[22px] leading-[120%] tracking-[-0.44px]  
                
                //Tablet
                md:text-[28px] md:leading-[130%] md:tracking-[-0.36px]  
                
                //Desktop (lg/1440px):
                lg:text-[28px] lg:leading-[120%] lg:tracking-[-0.52px] 
            
     ">
            Escolha uma categoria ou deixe o acaso falar por você.
          </p>
        
          {/* Seletor de Categorias */}
            <div className="w-full ">
                <CategorySelector 
                    onSelect={handleCategorySelect} 
                />
            </div>

            {/* Card da Frase */}
            <div className="w-full mt-8">
            <QuoteCards 
                    quote={currentQuote} 
                    onSurpriseMeClick={handleSurpriseMe} 
                    onCopyClick={handleCopyClick} // <--- FUNÇÃO DE CÓPIA IMPLEMENTADA AQUI
                    isLoading={isLoading} 
                />
            </div>
          
        </section>
      </main>
    </>
  );
};

export default Main;