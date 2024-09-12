import React from 'react';

function Navbar({ setCurrentScene }) {
    return (
        <header className="bg-dark-blue-gradient text-light-text pt-6 sm:p-2 sm:pt-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center pl-5 sm:pl-14">
                    <img 
                        src="src/assets/icon.png" 
                        alt="CodeQuest Icon" 
                        className="w-10 h-10 sm:w-16 sm:h-16" 
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold ml-4">CodeQuest</h1>
                </div>
                <nav className="ml-auto pr-5 sm:pr-10 text-[12px] sm:text-[15px] md:text-[20px]">
                    <ul className="flex space-x-4 sm:space-x-6 md:space-x-12">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScene('level'); }} className="hover:text-gray-300">Level</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScene('howToPlay'); }} className="hover:text-gray-300">How to play</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScene('language'); }} className="hover:text-gray-300">Langage</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScene('language'); }} className="hover:text-gray-300">New game</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
