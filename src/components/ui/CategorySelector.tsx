
import React, { useState } from 'react';

import { categories } from '../data/categories';
import { Category } from '../types/index';
import CategoryButton from './CategoryButton'; 

interface CategorySelectorProps {
    onSelect: (slug: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
    
    const [activeSlug, setActiveSlug] = useState<string>('random');

    const handleSelect = (slug: string) => {
        setActiveSlug(slug);
        onSelect(slug);
    };

    return (
        <nav className="
            /* Mobile */  
            grid grid-cols-2 gap-y-6 gap-x-2  
            
            pb-8

            /* Tablet */
            md:flex md:justify-between flex-row  flex-wrap 
            
        
            /* Desktop */
            lg:justify-start lg:gap-x-9 " 
            >
                {categories.map((category: Category) => {
                    const isActive = category.slug === activeSlug;

                    return (
                        <CategoryButton 
                            key={category.slug}
                            name={category.name} 
                            icon={category.icon}
                            isActive={isActive}
                            onClick={() => handleSelect(category.slug)}
                        />
                    );
                })}
            </nav>
    );
};

export default CategorySelector;
