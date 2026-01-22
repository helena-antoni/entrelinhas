import React from 'react';
import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../utils/styeButtons'; 

interface CategoryButtonProps {
    name: string;
    icon: string;
    isActive: boolean; 
    onClick: () => void;
    isStandalone?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, isActive, onClick }) => {
    
    const buttonStyle = isActive ? PRIMARY_BUTTON_CLASSES : SECONDARY_BUTTON_CLASSES;

    return (
       <button
            onClick={onClick}
            type="button"
            className={buttonStyle}
        >
            <span className="material-symbols-rounded text-[20px]">
                {icon}
            </span>
            
            {/* Nome da categoria */}
            {name}
        </button>
    );
};

export default CategoryButton;