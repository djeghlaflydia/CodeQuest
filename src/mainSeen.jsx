import React from 'react';

function MainSeen({ setCurrentScene }) {
    return (
        <div className="text-center py-16  pt-20 flex flex-col justify-center items-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-8">Welcome to CodeQuest</h1>
            <p className="text-1xl sm:text-2xl text-gray-200 max-w-lg mb-12 leading-relaxed pl-10 pr-10">
                Begin your adventure into the world of programming! Solve exciting challenges,
                improve your coding skills, and reach the top of the leaderboard.
            </p>
            <div className="space-y-6">
                <button className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-800 transition transform hover:scale-105"
                    onClick={() => setCurrentScene('language')}>
                    Start New Game
                </button>
                &nbsp; &nbsp;
                <button className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
                    onClick={() => setCurrentScene('howToPlay')}>
                    How to Play
                </button>
            </div>
        </div>
    );
}

export default MainSeen;
