import React from 'react'; 
import ActionButton from './ui/ActionButton';
import { Quote } from './types';

interface QuoteCardsProps {
    quote: Quote; 
    onSurpriseMeClick: () => void;
    onCopyClick: () => void; 
    isLoading: boolean; 
}
 
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
        max-w-7xl 
         
    `;

    return (
        <div className={cardClasses}>
            
            {isLoading ? (
                <LoadingSpinner />
            ) : (
            
            <div className="w-full bg-[#F2F2F2] text-[20px]">
            
                <p className="
                     md:text-xl font-normal 
                    font-indie-flower     
                    text-[#524F54]
                    whitespace-pre-wrap 
                    
                    ">
                    "{quote.text}"
    
                    <span className="
                        w-full text-right 
                        text-[16px] font-inter-semibold 
                        text-[#524F54] italic 
                    ">
                    — {quote.author}
                    </span>
                </p>
            </div>)}


            {/* copiar e surpreenda-me */}
            <div className={`
                w-full 
                flex justify-end items-center 
                border-t text-[#524F54] pt-3 mt-2 
                gap-4
            ${isLoading ? 'opacity-50 pointer-events-none' : ''} 
            `}>
                
                {/*copiar */}
                <ActionButton 
                    name="Copiar"
                    icon="content_copy"
                    onClick={onCopyClick}
                    isPrimary={false} // cinza
                    disabled={isLoading}
                />

                {/* surpreenda-me*/}
                <ActionButton 
                    name="Surpreenda-me"           
                    icon="featured_seasonal_and_gifts"                  
                    onClick={onSurpriseMeClick}    
                    isPrimary={true}  
                    disabled={isLoading}
                />
                
            </div>
        </div>
    );
};

export default QuoteCards;