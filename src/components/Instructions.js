import '../index.css'

function Instructions() {
  return (
    <>
        <div className="artboard artboard-horizontal phone-5 instructions-container">
            <h1>Instructions</h1>
            <p className='pb-2'>1. Start the Game: Begin by choosing one player to be the "wordsetter" and another player (or the computer) to be the "guesser."</p>
            <p className='pb-2'>2. Choose a Word: The wordsetter thinks of a word and determines the category or theme for the word. They keep the word secret from the guesser.</p>
            <p className='pb-2'>3. Set Up the Board: Draw an empty gallows on a piece of paper or visualize it in your mind. Leave enough space below the gallows to represent the blank letters of the word.</p>
            <p className='pb-2'>4. Guessing Process: The guesser starts by guessing a letter that they think might be in the word. If the guessed letter is correct, the wordsetter reveals all occurrences of that letter in the word. If the guessed letter is incorrect, the guesser receives a strike or body part on the gallows.</p>
            <p className='pb-2'>5. Keep Track of Strikes: Each time the guesser makes an incorrect guess, draw another part of the stick figure on the gallows. Commonly, the order of the body parts is head, body, left arm, right arm, left leg, right leg.</p>
            <p className='pb-2'>6. Word Completion or Game Over: The guesser continues guessing letters one at a time until they either guess the entire word correctly or the stick figure is completed on the gallows. If the guesser completes the word before the stick figure is fully drawn, they win the game. If the stick figure is fully drawn before the word is guessed, the wordsetter wins.</p>
            <p className='pb-2'>7. Switch Roles: After a game is completed, switch roles so that the guesser becomes the wordsetter and vice versa. Choose a new word and continue playing rounds.</p>
            <p className='pb-2'>Remember to have fun and enjoy the game of Hangman!</p>
        </div>
    </>
  )
}

export default Instructions