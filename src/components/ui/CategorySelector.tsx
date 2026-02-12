
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
        <div className="
        /* Mobile */  
        grid grid-cols-2 gap-y-6 gap-x-2 
        
        pb-8 w-full 

        /* Tablet */
        md:flex md:justify-between md:flex-row md:flex-wrap 
        md:gap-x-12 md:gap-y-0 
    
        /* Desktop */
        lg:justify-start lg:gap-x-9 
        ">
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
        </div>
    );
};

export default CategorySelector;
