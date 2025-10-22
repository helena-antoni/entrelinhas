import React from 'react';
import { SECONDARY_BUTTON_CLASSES } from '../../utils/styleUtils';

interface ActionButtonProps {
    name: string;
    icon: string;
    onClick: () => void;
    isPrimary?: boolean; 
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
    name, 
    icon, 
    onClick, 
    isPrimary = false, 
    disabled = false
}) => {
    
    const baseClasses = isPrimary 
        ? SECONDARY_BUTTON_CLASSES 
        : `
            flex items-center gap-1 
            text-sm font-semibold 
            text-[#663800] hover:text-[#CC7000]
            transition duration-200
            p-2 rounded-lg 
           
        `;

    return (
        <button 
            onClick={onClick}
            type="button"
            className={` 
                ${baseClasses}
                flex-shrink-0 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={disabled}
        >
            <span className="material-symbols-rounded text-base">{icon}</span>
            {name}
        </button>
    );
};

export default ActionButton;