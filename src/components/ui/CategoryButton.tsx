import React, { useState, useEffect } from 'react';
import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../utils/styeButtons'; 

interface CategoryButtonProps {
    name: string;
    icon: string;
    isActive: boolean; 
    onClick: () => void;
    isStandalone?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, isActive, onClick }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); 
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const buttonStyle = isActive ? PRIMARY_BUTTON_CLASSES : SECONDARY_BUTTON_CLASSES;

    return (
        <button
            onClick={onClick}
            type="button"
            className={`${buttonStyle} flex items-center justify-center`}
        >
            {!isMobile && (
                <span className="material-symbols-rounded text-[20px]">
                    {icon}
                </span>
            )}
            
            <span>{name}</span>
        </button>
    );
};

export default CategoryButton;