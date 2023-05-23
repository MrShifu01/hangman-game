import '../index.css'

function Instructions() {
  return (
    <>
        <div className="instructions-container px-3 pt-5">
            <h1><strong>Instructions</strong></h1>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
            </div>
            <p className='pb-3'>1. <em>Start the Game</em>: Begin by choosing one player to be the "wordsetter" and another player (or the computer) to be the "guesser."</p>
            <p className='pb-3'>2. <em>Choose a Word</em>: The wordsetter thinks of a word and determines the category or theme for the word. They keep the word secret from the guesser.</p>
            <p className='pb-3'>3. <em>Set Up the Board</em>: Draw an empty gallows on a piece of paper or visualize it in your mind. Leave enough space below the gallows to represent the blank letters of the word.</p>
            <p className='pb-3'>4. <em>Guessing Process</em>: The guesser starts by guessing a letter that they think might be in the word. If the guessed letter is correct, the wordsetter reveals all occurrences of that letter in the word. If the guessed letter is incorrect, the guesser receives a strike or body part on the gallows.</p>
            <p className='pb-3'>5. <em>Keep Track of Strikes</em>: Each time the guesser makes an incorrect guess, draw another part of the stick figure on the gallows. Commonly, the order of the body parts is head, body, left arm, right arm, left leg, right leg.</p>
            <p className='pb-3'>6. <em>Word Completion or Game Over</em>: The guesser continues guessing letters one at a time until they either guess the entire word correctly or the stick figure is completed on the gallows. If the guesser completes the word before the stick figure is fully drawn, they win the game. If the stick figure is fully drawn before the word is guessed, the wordsetter wins.</p>
            <p className='pb-3'>7. <em>Switch Roles</em>: After a game is completed, switch roles so that the guesser becomes the wordsetter and vice versa. Choose a new word and continue playing rounds.</p>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
            </div>
            <p className='pb-3'><strong>Remember to have fun and enjoy the game of Hangman!</strong></p>
        </div>
    </>
  )
}

export default Instructions