// The help page for users who need some help
import React from 'react';
import '../index.css';

function Help() {
  return (
    <>
      <div className="help-container px-3 pt-5">
        <h1><strong>Help</strong></h1>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider"></div> {/* Divider line */}
        </div>

        <h3><strong>Frequently Asked Questions (FAQ)</strong></h3>
        <p className='pb-3'>Q: Why is the hangman always hanging? Isn't that a bit extreme? A: We assure you, no hangmen were harmed in the making of this game. It's just a clever name for a classic word-guessing adventure!</p>
        <p className='pb-3'>Q: Can I bribe the hangman to give me some hints? A: Sorry, but the hangman has a strict no-bribery policy. However, we'll provide you with tips and tricks to outsmart him!</p>
        <p className='pb-3'>Q: Is it true that using funny words increases my chances of winning? A: Well, funny words might make you laugh, but they won't necessarily make you a hangman champion. Focus on guessing the right letters instead!</p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider"></div> {/* Divider line */}
        </div>

        <h3><strong>Troubleshooting</strong></h3>
        <p className='pb-3'>Problem: I can't figure out the word, and it's driving me bonkers! Solution: Take a break, grab a clown wig, and embrace the silliness. Laughter can sometimes unlock your brain's hidden word-guessing superpowers!</p>
        <p className='pb-3'>Problem: My hangman drawing skills are downright hilarious (in a bad way). Solution: Fear not, artistically challenged friend! Embrace the abstract hangman style and turn it into a masterpiece. Who said stick figures can't be fashionable?</p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider"></div> {/* Divider line */}
        </div>

        <h3><strong>Pro Tips</strong></h3>
        <p className='pb-3'>Start with the vowels. They're like the punchlines of words, revealing essential clues.</p>
        <p className='pb-3'>Don't be afraid to take risks! Guessing unusual letters might surprise the hangman and lead you to victory.</p>
        <p className='pb-3'>Keep a dictionary handy. You never know when an unexpected word will stump the hangman.</p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider"></div> {/* Divider line */}
        </div>

        <h3><strong>Contact Us</strong></h3>
        <p className='pb-3'>Got a funny hangman story or need a good laugh? Reach out to our hilarious hangman enthusiasts at chuckles@hangmanhelp.com. We love sharing laughter, wordplay, and mind-boggling puzzles!</p>
        <p className='pb-3'>Disclaimer: The Hilarious Hangman Help Hotline cannot be held liable for uncontrollable fits of laughter, excessive pun usage, or any sudden urges to start a game of hangman with friends or unsuspecting strangers. Play responsibly and keep the laughter flowing!</p>
        <p className='pb-3'>Remember, even in the face of a hangman, laughter is your secret weapon. Good luck, happy guessing, and may the puns be forever in your favor!</p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider"></div> {/* Divider line */}
        </div>

      </div>
    </>
  );
}

export default Help;
