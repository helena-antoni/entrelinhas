import React from 'react';
import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../utils/styleUtils';

interface LinkButtonProps {
  href: string;
  variant: 'primary' | 'secondary'; 
  children: React.ReactNode; 
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, variant, children }) => {

  const classes = variant === 'primary' 
    ? PRIMARY_BUTTON_CLASSES 
    : SECONDARY_BUTTON_CLASSES;

  return (
    <a 
      href={href} 
      className={classes}
    >
      {children}
    </a>
  );
};

export default LinkButton;