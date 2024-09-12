import React from 'react';

const Use = () => {
  return (
    <div className="text-center py-16 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-8">How to Play CodeQuest</h1>
      <p className="text-lg sm:text-xl max-w-2xl mb-20 leading-relaxed px-5">
        Welcome to CodeQuest! Follow this quick guide to get the most out of your adventure and sharpen your coding skills:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-6xl">
        <div>
          <h2 className="text-3xl font-semibold mb-5">🚀 Starting a New Game</h2>
          <p className="mb-16">
            Begin your journey by clicking 'New Game' in the navbar. You'll face a variety of programming challenges that are designed to enhance your skills and take your coding abilities to new heights.
          </p>

          <h2 className="text-3xl font-semibold mb-5">🎮 Navigating the Challenges</h2>
          <p className="mb-16">
            Each challenge presents a problem statement and a coding environment. Depending on the type of question, you can either write your solution in the provided editor or choose the correct answer in the quiz format.
          </p>

          <h2 className="text-3xl font-semibold mb-5">⚙ Submitting Your Solution</h2>
          <p className="mb-16">
            After solving the challenge, submit your answer for evaluation. If your solution is correct, you'll receive feedback, earn points, and advance to the next level.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-5">🎖 Tracking Your Progress</h2>
          <p className="mb-16">
            Keep an eye on your progress by clicking on the 'Level' tab. This section shows your journey from beginner to advanced stages, allowing you to test your skills at different levels.
          </p>

          <h2 className="text-3xl font-semibold mb-5">💡 Seeking Help</h2>
          <p className="mb-16">
            Stuck on a challenge? You can access hints and tips that include video tutorials or helpful insights based on the difficulty of the challenge, making it easier to learn and move forward.
          </p>
          
          <h2 className="text-3xl font-semibold mb-5">🎉 Enjoy the Experience!</h2>
          <p>
            CodeQuest is all about having fun while improving your coding skills. Challenge yourself, learn something new, and climb the leaderboard as you advance through each challenge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Use;
