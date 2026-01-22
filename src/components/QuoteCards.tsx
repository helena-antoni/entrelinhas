import React from 'react'; 
import ActionButton from './ui/ActionButton';
import { Quote } from './types';

interface QuoteCardsProps {
    quote: Quote;  
    onCopyClick: () => void; 
    isLoading: boolean; 
}
 
const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center w-full min-h-[150px] text-[#4C2A00]">
        <span className="material-symbols-rounded text-3xl animate-spin">autorenew</span>
        <p className="mt-2 text-sm font-semibold">Gerando inspiração...</p>
    </div>
);

const QuoteCards: React.FC<QuoteCardsProps> = ({ quote, onCopyClick, isLoading }) => {    
 
    const cardClasses = ` 
        flex flex-col justify-between
        rounded-2xl 
        bg-[#FFE8CC]                 
        shadow-md           
        p-4 sm:p-6 lg:p-8 
        md:text-3xl  max-full   
        max-w-7xl 
         
    `;

    return (
        <div className={cardClasses}>
            
            {isLoading ? (
                <LoadingSpinner />
            ) : (
            
            <div className="w-full  text-[20px]">
            
                <p className="
                     md:text-xl font-normal 
                     pb-4
                    font-indie-flower     
                    text-[#4C2A00]
                    whitespace-pre-wrap 
                    
                    ">
                    "{quote.text}"
    
                    <span className="
                        w-full text-right 
                        text-[16px] font-inter-semibold 
                        text-[#4C2A00] italic 
                    ">
                    — {quote.author}
                    </span>
                </p>
            </div>)}


            {/* copiar */}
            <div className={`
                w-full 
                flex justify-end items-center 
                border-t border-[#4C2A00] pt-2
                gap-4
            ${isLoading ? 'opacity-50 pointer-events-none' : ''} 
            `}>
                
                <ActionButton 
                    name="Copiar"
                    icon="content_copy"
                    onClick={onCopyClick}
                    isPrimary={false}  
                    disabled={isLoading}
                /> 
            </div>
        </div>
    );
};

export default QuoteCards;