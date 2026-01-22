"use client"; 
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main'; 

export default function HomePage() {
  return (
     <div className="flex flex-col min-h-screen bg-[#FFF3E5]"> 
            <Header />
            <main className="flex-grow">
            <Main /> 
            </main>
            <Footer />
        </div>
  );
}
