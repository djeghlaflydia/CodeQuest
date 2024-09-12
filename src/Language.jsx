import React from 'react';
import './Language.css';

function Language({ setCurrentScene }) {
  return (
    <div>
      <h2 className="text-center mb-4 font-bold text-white text-[15px] sm:text-[20px] md:text-[30px] leading-[10em] sm:leading-[8em] md:leading-[5em]">
        Choose Your Language to Embark on a Journey of Discovery!
      </h2>

      <div className="md:text-[8px] sm:text-[7px] text-[6px] w-[40em] h-[40em] relative flex items-center justify-center mx-auto mt-[12vw] md:mt-[9vw] sm:mt-[16vw]">

        {/* Cercle d'orbite pour chaque planète */}
        <div className="orbit orbit-html"></div>
        <div className="orbit orbit-css"></div>
        <div className="orbit orbit-js"></div>
        <div className="orbit orbit-python"></div>

        <div className="flex items-center justify-center absolute w-[15em] h-[15em] rounded-full">
          <img src="src/assets/sun.png" alt="Sun" className="anim" />
        </div>

        {/* HTML Button (Pluto) */}
        <button
          className="htmlButton w-[50px] h-[50px] text-[15px] sm:w-[70px] sm:h-[70px] sm:text-[20px]"
          onClick={() => setCurrentScene('newGame')}
        >
          HTML
        </button>

        {/* CSS Button (Moon) */}
        <button
          className="cssButton w-[50px] h-[50px] text-[15px] sm:w-[70px] sm:h-[70px] sm:text-[20px]"
          onClick={() => setCurrentScene('level')}
        >
          CSS
        </button>

        {/* JS Button (Uranus) */}
        <button
          className="jsButton w-[50px] h-[50px] text-[15px] sm:w-[70px] sm:h-[70px] sm:text-[20px]"
          onClick={() => setCurrentScene('howToPlay')}
        >
          JS
        </button>

        {/* Python Button (Saturn) */}
        <button
          className="pythonButton w-[50px] h-[50px] text-[15px] sm:w-[70px] sm:h-[70px] sm:text-[20px]"
          onClick={() => setCurrentScene('')}
        >
          Python
        </button>
      </div>
    </div>
  );
}

export default Language;
