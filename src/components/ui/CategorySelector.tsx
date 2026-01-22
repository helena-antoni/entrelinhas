
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
        <div className="flex flex-wrap space-between text-1 pb-8  gap-9  ">
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
