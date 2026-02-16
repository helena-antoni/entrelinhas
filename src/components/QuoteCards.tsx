import React from 'react'; 
import ActionButton from './ui/ActionButton';
import { Quote } from './types';
import Image from 'next/image';
import aspas from '../assets/aspas.svg';
interface QuoteCardsProps {
    quote: Quote;  
    onCopyClick: () => void; 
    isLoading: boolean; 
}
 
const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center w-full min-h-[16px] pb-[16px] text-[var(--text-primary)]">
        <span className="material-symbols-rounded text-1xl  animate-spin">autorenew</span>
        <p className=" text-sm font-bold">Gerando inspiração... </p>
    </div>
);

const QuoteCards: React.FC<QuoteCardsProps> = ({ quote, onCopyClick, isLoading }) => {    
 
    const cardClasses = ` 
        flex flex-col justify-between
        rounded-2xl  bg-[var(--bg-card)] shadow-md  py-4 px-6
        w-full max-w-full lg:max-w-[1256px] mx-auto
    `;

    return (
        <div className={cardClasses}>
            
            {isLoading ? (
                <LoadingSpinner />
            ) : (
            
                <figure className="flex flex-row items-start gap-2 w-full p-3">  
                    <div className="pt-1 flex-shrink-0">
                        <Image  
                            src={aspas} 
                            alt="Aspas laranja" 
                            width={16}  
                            height={18}
                            className="w-[16px] md:w-[18px] h-auto" 
                            aria-hidden="true"
                        />
                    </div>
                    
                    <div className="flex items-start w-full">
                        <blockquote className="font-normal text-[var(--text-primary)] text-[22px] leading-[150%] select-text"> 
                            <p aria-label={`Citação: ${quote.text}`}>
                                {quote.text}
                                <span aria-hidden="true">" </span>
                                <cite  className="text-[18px] font-inter italic mt-2 items-center">
                                    <span className="sr-only">Autor: </span>
                                    <span>— {quote.author}
                                        </span>
                                </cite>
                            </p>
                        </blockquote>
                    </div>
                </figure>
            )}
            {/* copiar */}
            <div className={`
                w-full  flex justify-end items-center 
                border-t border-[var(--text-primary)] pt-2 gap-4 
               
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