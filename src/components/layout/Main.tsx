// src/components/layout/Main.tsx

import React, { useState } from 'react'; 
import WelcomeSection from '../ui/WelcomeSection';  

const Main: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-50 pt-1 w-full">  
        
        <WelcomeSection />
        
      </main>
    </>
  );
}

export default Main;