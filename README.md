# Hangman Game

This is a simple Hangman game built with Create React App. The game allows users to guess a word by suggesting letters within a certain number of attempts.

## Installation

To run this Hangman game on your local machine, please follow the instructions below:

1. Make sure you have Node.js installed on your computer. You can download it from the official website: [Node.js](https://nodejs.org).

2. Clone this repository or download the source code.

3. Open a terminal and navigate to the project's root directory.

4. Run the following command to install the project dependencies:

```shell
npm install
```

This will install all the necessary packages listed in the `package.json` file.

5. Once the installation is complete, you can start the development server by running the following command:

```shell
npm start
```

This will start the application and open it in your default web browser. If it doesn't open automatically, you can access it by visiting [http://localhost:3000](http://localhost:3000) in your browser.

## How to Play

1. Upon starting the Hangman game, you will see a "Start" button.

2. Click the "Start" button to begin the game.

3. The game will randomly select a word from a predefined list.

4. Guess the word by suggesting letters. You can input a letter by clicking on the respective letter buttons on the screen.

5. If the letter is present in the word, it will be revealed in the corresponding positions. If not, your number of remaining attempts will decrease.

6. Keep guessing letters until you successfully guess the word or run out of attempts.

7. If you guess the word correctly, you win the game. If you run out of attempts before guessing the word, you lose the game.

8. After the game ends, you can click the "Restart" button to start a new game.

## Dependencies

This project utilizes the following dependencies:

- **@reduxjs/toolkit**: A library for efficient Redux development.
- **@testing-library/jest-dom**: Custom jest matchers to test DOM elements.
- **@testing-library/react**: Testing utilities for React components.
- **@testing-library/user-event**: Simulates user events for testing purposes.
- **daisyui**: A CSS framework for styling the application.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point to the React DOM package.
- **react-redux**: Official Redux bindings for React.
- **react-scripts**: Configuration and scripts for Create React App.
- **web-vitals**: Library for measuring web performance.

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/hangman-game).

## License

This project is licensed under the [MIT License](LICENSE).