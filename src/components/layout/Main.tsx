import React, { useState } from 'react';
import WelcomeSection from '../ui/WelcomeSection'; 
import CategorySelector from '../ui/CategorySelector';
import QuoteCards from '../QuoteCards';


import { categories } from '../data/categories';
import { Quote } from '../types';


const initialQuote: Quote = {
    text: "Uma merda bem feita ainda continua sendo uma merda.", 
    author: "Soares, Horácio",
    categorySlug: 'random,'
};

const Main: React.FC = () => {
    const [activeCategorySlug, setActiveCategorySlug] = useState<string>(categories[0].slug);
    const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    // function copy
    const handleCopyClick = async () => {
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
            }

        } catch (error) {
        } finally {
            setIsLoading(false); 
        }
    };

    // função  
     const handleCategorySelect = (slug: string) => {
        setActiveCategorySlug(slug);
        generateQuote(slug);  
    };

    return (
    <>  
    <main className="w-full bg-[var(--bg-site)]">
        <div className="flex flex-col mx-auto w-full max-w-[1440px]
            px-6 pt-10 md:pt-16 md:px-12 lg:px-[92px] lg:pt-20 ">
         
            <WelcomeSection />
            
            <section className="container w-full items-left ">
                
                <p className="md:text-3xl max-full pt-8 pb-8 
                    text-left font-indie font-normal text-[var(--text-primary)] 
                        
                    //Mobile
                    text-[22px] leading-[140%] tracking-[-0.22px]  
                        
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
                    <div className="w-full ">
                    <QuoteCards 
                        quote={currentQuote}  
                        onCopyClick={handleCopyClick}  
                        isLoading={isLoading} 
                    />
                </div>
            </section>
        </div>
    </main>
    </>
 );
};

export default Main;