import React from 'react';
import LinkButton from './ui/LinkButton';

interface QuoteCardProps {
    quote: Quote; 
    onSurpriseMeClick: () => void;
    onCopyClick: () => void;
}
export interface Quote {
    text: string;
    author: string;
    categorySlug: string; 
}
const QuoteCards: React.FC<QuoteCardsProps> = ({ quote, onSurpriseMeClick }) => {
    
 
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
            
            {/* frase e autor */}
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
            </div>


            {/* botão copiar e surpreenda-me) */}
            <div className="
                w-full 
                flex justify-end items-center 
                border-t border-gray-300 pt-3 mt-2 
                gap-4
            ">
                
                <button 
                    className="
                        flex items-center gap-1 
                        text-sm font-semibold 
                        text-gray-600 hover:text-[#CC7000]
                        transition duration-200
                        p-2 rounded-lg 
                        flex-shrink-0                     
                        min-w-fit                         
                    "

                >
                    <span className="material-symbols-rounded text-base">content_copy</span>
                    Copiar
                </button>

                <LinkButton 
                    href="#" 
                    variant="primary" 
                    onClick={onSurpriseMeClick}
                >
                    <span className="material-symbols-rounded text-base">featured_seasonal_and_gifts</span>
                    Surpreenda-me
                </LinkButton>
                
            </div>
        </div>
    );
};

export default QuoteCards;