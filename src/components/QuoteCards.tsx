import React from 'react';
import LinkButton from './ui/LinkButton';
import { Quote } from '../types'; 
import CategoryButton from './CategoryButton';
import ActionButton from './ui/ActionButton';

interface QuoteCardsProps {
    quote: Quote; 
    onSurpriseMeClick: () => void;
    onCopyClick: () => void; 
    isLoading: boolean; // NOVO: Propriedade para controlar o estado
}
export interface Quote {
    text: string;
    author: string;
    categorySlug: string; 
}

// Componente de carregamento (Spinner)
const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center w-full min-h-[150px] text-[#CC7000]">
        <span className="material-symbols-rounded text-4xl animate-spin">autorenew</span>
        <p className="mt-2 text-sm font-semibold">Gerando inspiração...</p>
    </div>
);

const QuoteCards: React.FC<QuoteCardsProps> = ({ quote, onSurpriseMeClick, onCopyClick, isLoading }) => {    
 
    const cardClasses = ` 
        flex flex-col justify-between
        rounded-2xl 
        bg-[#F2F2F2]                 
        shadow-md           
        p-4 sm:p-6 lg:p-8 
        md:text-3xl  max-full  
        w-[1280px]
        max-w-7xl 
         
    `;

    return (
        <div className={cardClasses}>
            
            {isLoading ? (
                <LoadingSpinner />
            ) : (
            
            <div className="w-full bg-[#F2F2F2] ">
                {/* Frase */}
                <p className="
                    text-lg md:text-xl font-normal 
                    font-indie-flower     
                    text-[#524F54]
                    whitespace-pre-wrap 
                    
                    ">
                    "{quote.text}"
    
                     {/* autor */}
                    <p className="
                        w-full text-right 
                        text-sm font-inter-semibold 
                        text-[#524F54] italic 
                    ">
                    — {quote.author}
                    </p>
                </p>
            </div>)}


            {/* botão copiar e surpreenda-me) */}
            <div className={`
                w-full 
                flex justify-end items-center 
                border-t border-gray-300 pt-3 mt-2 
                gap-4
            ${isLoading ? 'opacity-50 pointer-events-none' : ''} 
            `}>
                
                {/* BOTÃO COPIAR (Agora é um ActionButton Secundário) */}
                <ActionButton 
                    name="Copiar"
                    icon="content_copy"
                    onClick={onCopyClick}
                    isPrimary={false} // Estilo secundário (cinza)
                    disabled={isLoading}
                />

                {/* BOTÃO SURPREENDA-ME (Agora é um ActionButton Primário) */}
                <ActionButton 
                    name="Surpreenda-me"           
                    icon="casino"                  
                    onClick={onSurpriseMeClick}    
                    isPrimary={true} // Estilo primário (ocre)
                    disabled={isLoading}
                />
                
            </div>
        </div>
    );
};

export default QuoteCards;