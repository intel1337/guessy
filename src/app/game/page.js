'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./game.module.css";
import ParticlesBackground from '../components/particle';
import Link from "next/link";
// Import our utility functions
import { requireAuth, removeAuthToken, getAuthToken } from "../utils/auth";
import { fetchRandomWord } from "../utils/gameApi";
import { submitScore } from "../utils/leaderboard";
import { 
  createEmptyBoard, 
  checkGuess, 
  isGameWon, 
  isGameLost, 
  validateGuess,
  calculateScore,
  TENTATIVES_MAX,
  LONGUEUR_MIN,
  LONGUEUR_MAX
} from "../utils/gameLogic";


function getUsernameFromToken() {
  const token = getAuthToken();
  if (!token) return null;
  
  try {

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.username || payload.login || payload.user || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

export default function GamePage() {
//  difficulty list
const difficulties = ['easy', 'medium', 'hard', 'impossible'];

//  game state
  const [board, setBoard] = useState(createEmptyBoard()); // grille
  const [results, setResults] = useState([]); // couleur for result
  const [currentRow, setCurrentRow] = useState(0); // current ligne
  const [input, setInput] = useState(""); // input user
  const [gameStatus, setGameStatus] = useState('loading'); // loading, playing, won, lost
  const [solution, setSolution] = useState(""); //  mot correct
  const [error, setError] = useState(""); // error handlng
  const [isSubmitting, setIsSubmitting] = useState(false); // anti multi requete
  const [difficulty, setDifficulty] = useState('medium'); // diff
  const [currentWordLength, setCurrentWordLength] = useState(5); // How long the current word is
  const [scoreSubmitted, setScoreSubmitted] = useState(false); // Track if score was submitted

  //  onMount  svelte
  useEffect(() => {
    if (!requireAuth('/game')) {
      return; 
    }
    loadNewWord();
  }, []);

//  word loading
  async function loadNewWord() {
    setGameStatus('loading');
    setError("");
    setScoreSubmitted(false);

    try {
      const wordData = await fetchRandomWord(difficulty);
      
      if (!wordData.success) {
        setError(`Could not get word: ${wordData.error}`);
        setGameStatus('playing');
        return;
      }

      const word = wordData.word.toLowerCase().trim();
      const wordLength = word.length;

      //  word length check
          if (wordLength < LONGUEUR_MIN || wordLength > LONGUEUR_MAX) {
        await loadNewWord(); // Try again
        return;
      }

      //  setup
      setCurrentWordLength(wordLength);
      setBoard(createEmptyBoard(wordLength));
      setSolution(word);
      setGameStatus('playing');
      
    } catch (err) {
      setError('Could not load word.');
      setGameStatus('playing');
    }
  }

//  difficulty change
  async function handleDifficultyChange(newDifficulty) {
    //  reset
    setDifficulty(newDifficulty);
    setResults([]);
    setCurrentRow(0);
    setInput("");
    setError("");
    setSolution("");
    setScoreSubmitted(false);
    
    // Get new word
    await loadNewWord();
  }

//  input handling
  function handleInput(e) {
    if (gameStatus !== 'playing') return;
    
    const value = e.target.value.toLowerCase().replace(/[^a-z]/g, '').slice(0, currentWordLength);
    setInput(value);
    setError("");
  }

// ubmit score to leaderboard
  async function handleScoreSubmission(attempts, gameWon = true) {
    if (scoreSubmitted) return; 
    
    const username = getUsernameFromToken();
    if (!username) {
      console.error('Could not get username for score submission');
      return;
    }
    
    const score = calculateScore(difficulty, attempts, TENTATIVES_MAX, gameWon);
    
    try {
      await submitScore(username, score);
      setScoreSubmitted(true);
      console.log(`Score submitted: ${score} points for ${username}`);
    } catch (error) {
      console.error('Failed to submit score:', error);
    }
  }

//  submit handling
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (gameStatus !== 'playing' || isSubmitting) return;

    const validation = validateGuess(input, currentWordLength);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setIsSubmitting(true);
    
    try {
      //  board update
      const newBoard = [...board];
      newBoard[currentRow] = input.split('');
      
      const guessResult = checkGuess(input, solution);
      
      //  state update
      setBoard(newBoard);
      setResults([...results, guessResult]);

      //  win/lose check
      if (isGameWon(input, solution)) {
        setGameStatus('won');
        // Submit full score when game  won
        await handleScoreSubmission(currentRow + 1, true);
      } else if (isGameLost(currentRow + 1)) {
        setGameStatus('lost');
        // Submit 10% score when game  lost
        await handleScoreSubmission(TENTATIVES_MAX, false);
      } else {
        setCurrentRow(currentRow + 1);
      }

      setInput("");
      
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setIsSubmitting(false)
    }
  }

//   new game
  function handleNewGame() {
    setBoard(createEmptyBoard(currentWordLength));
    setResults([]);
    setCurrentRow(0);
    setInput("");
    setError("");
    setScoreSubmitted(false);
    loadNewWord()
  }

//  logout
  function handleLogout() {
    removeAuthToken();
    window.location.href = '/';
  }

  //  loading
  if (gameStatus === 'loading') {
    const messages = [
      'Getting a new word...',
      'Loading...',
      'Just a moment...',
      'Almost there...'
    ]
    return (
      <div style={{ position: 'relative', zIndex: 3 }}>
        <ParticlesBackground />
        <div className={styles.page}>
          <div className={styles.container}>
            <Link href="/">
            <Image
              className={styles.bigLogo}
              src="/guessylogo.png"
              alt="Guessy Logo"
              width={120}
              height={32}
              priority
            /></Link>
            <h2 className={styles.title}>Loading..</h2>
            <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)' }}>
              {messages[Math.floor(Math.random() * messages.length)]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', zIndex: 3 }}>
      <ParticlesBackground />
      
      {/* Header with logo, navigation and logout */}
      <div className={styles.header}>
        <Link href="/game">
          <Image
            className={styles.miniLogo}
            src="/guessylogo.png"
            alt="Guessy Logo"
            width={120}
            height={32}
            priority
          />
        </Link>
        
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/game">Game</Link>
          <Link className={styles.navLink} href="/how-to-play">Rules</Link>
          <Link className={styles.navLink} href="/leaderboard">Leaderboard</Link>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div className={styles.page}>
        <div className={styles.container}>
          <h2 className={styles.title}>Guessy?</h2>
          
          {/*  difficulty selector */}
          <div className={styles.difficultySection}>
            <label className={styles.difficultyLabel}>Difficulty:</label>
            <div className={styles.difficultyButtons}>
              {difficulties.map(level => (
                <button
                  key={level}
                  onClick={() => handleDifficultyChange(level)}
                  className={`${styles.difficultyButton} ${
                    difficulty === level ? styles.difficultyButtonActive : ''
                  }`}
                  disabled={gameStatus === 'loading'}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/*  error */}
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          {/*  input */}
          <div className={styles.inputSection}>
            <form onSubmit={handleSubmit}>
              <input
                className={styles.input}
                value={input}
                onChange={handleInput}
                maxLength={currentWordLength}
                placeholder={`Enter a ${currentWordLength}-letter word...`}
                disabled={gameStatus !== 'playing' || isSubmitting}
                autoComplete="off"
              />
              <button 
                type="submit"
                className={styles.input} 
                disabled={input.length !== currentWordLength || gameStatus !== 'playing' || isSubmitting}
              >
                {isSubmitting ? 'Checking...' : 'Submit Guess'}
              </button>
            </form>
          </div>

          {/*  game board */}
          <div className={styles.outputSection}>
            {board.map((row, i) => (
              <div key={i} className={styles.wordRow}>
                {row.map((letter, j) => (
                  <span
                    key={j}
                    className={`${styles.letterBox} ${
                      results[i] && results[i][j] ? styles[results[i][j]] : ''
                    }`}
                  >
                    {letter.toUpperCase()}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/*  win message */}
          {gameStatus === 'won' && (
            <div className={styles.gameMessage}>
              <h3>🎉 Congratulations!</h3>
              <p>You guessed the word in {currentRow + 1} attempts!</p>
              <p><strong>Score: {calculateScore(difficulty, currentRow + 1, TENTATIVES_MAX)} points</strong></p>
              {scoreSubmitted && <p style={{ color: '#90EE90' }}>✓ Score submitted to leaderboard!</p>}
              <button className={styles.newGameButton} onClick={handleNewGame}>
                Play Again
              </button>
            </div>
          )}

          {/*  lose message */}
          {gameStatus === 'lost' && (
            <div className={styles.gameMessage}>
              <h3>😔 Game Over!</h3>
              <p>The word was: <strong>{solution.toUpperCase()}</strong></p>
              <p><strong>Score: {calculateScore(difficulty, TENTATIVES_MAX, TENTATIVES_MAX, false)} points</strong></p>
              {scoreSubmitted && <p style={{ color: '#90EE90' }}>✓ Score submitted to leaderboard!</p>}
              <button className={styles.newGameButton} onClick={handleNewGame}>
                Try Again
              </button>
            </div>
          )}

          {/*  game info */}
          <div className={styles.gameInfo}>
            <p>Attempt {currentRow + 1} of {TENTATIVES_MAX}</p>
            <p>Word length: {currentWordLength} letters</p>
            <p>Difficulty: <strong>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
