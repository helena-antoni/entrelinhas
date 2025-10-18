import React from 'react';

import { PRIMARY_BUTTON_CLASSES } from '../../utils/styleUtils'; 

interface CategoryButtonProps {
    name: string;
    icon: string;
    isActive: boolean; 
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, isActive, onClick }) => {
    
    const baseClasses = PRIMARY_BUTTON_CLASSES;

    const stateClasses = isActive 
        ?'bg-warm-ochre text-white shadow-md' 
        : 'border border-warm-ochre bg-white text-warm-ochre'; 

    return (
        <button
            onClick={onClick}
            type="button"
            className={`
                ${baseClasses} 
                ${stateClasses}
                flex items-center gap-2 
            `}
        >
            {/* material symbols */}
            <span 
                className="
                    material-symbols-rounded 
                    text-base
                "
            >
                {icon}
            </span>
            
            {/* categoria */}
            {name}
        </button>
    );
};

export default CategoryButton;