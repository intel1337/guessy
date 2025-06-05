// Constantes du jeu
export const LONGUEUR_MIN = 3;
export const LONGUEUR_MAX = 12;
export const TENTATIVES_MAX = 6;


export const MIN_WORD_LENGTH = LONGUEUR_MIN;
export const MAX_WORD_LENGTH = LONGUEUR_MAX;
export const MAX_ATTEMPTS = TENTATIVES_MAX;


export function calculateScore(difficulty, attempts, maxAttempts, gameWon = true) {
  // base scores for different difficulties
  const baseScores = {
    'easy': 100,
    'medium': 200, 
    'hard': 500,
    'impossible': 1000
  };
  
  const baseScore = baseScores[difficulty] || 200;
  
  // if game  not won give 10% of base score
  if (!gameWon) {
    return Math.floor(baseScore * 0.1);
  }
  
  // bonus for completing with fewer attempts
  const attemptsBonus = Math.max(0, (maxAttempts - attempts) * 50);
  
  return baseScore + attemptsBonus;
}

// crée un array vide pour le jeu
export function createEmptyBoard(wordLength = 5) {
  const tab = [];
  
  // crée 6 rows 
  for (let row = 0; row < TENTATIVES_MAX; row++) {
    const currentRow = [];
    
    // crée les colonnes en fonction de la longueur du mot
    for (let col = 0; col < wordLength; col++) {
      currentRow.push(''); // empty lettre
    }
    
    tab.push(currentRow);
  }
  
  return tab;
}


export function checkGuess(guess, solution) {
  // Vérifie si les mots sont de la mm longueur
  if (guess.length !== solution.length) {
    throw new Error(`Words must be same length: guess=${guess.length}, solution=${solution.length}`);
  }

  const wordLength = solution.length;
  const result = [];
  
  // on compare en minuscule
  const guessLower = guess.toLowerCase();
  const solutionLower = solution.toLowerCase();
  
  // 1ere étape: Trouver les lettres exactes (position correcte)
  for (let i = 0; i < wordLength; i++) {
    if (guessLower[i] === solutionLower[i]) {
      result[i] = 'correct'; // vert correct
    } else {
      result[i] = 'absent'; // gris - lettre incorrecte
    }
  }
  
  // 2eme étape: Trouver les lettres dans la mauvaise position (jaune)
  for (let i = 0; i < wordLength; i++) {
    // Passer si déjà correct
    if (result[i] === 'correct') continue;
    
    // Vérifier si cette lettre existe ailleurs dans la solution
    const currentLetter = guessLower[i];
    let foundInSolution = false;
    
    for (let j = 0; j < wordLength; j++) {
      // Ne pas compter les lettres que nous avons déjà marquées comme correctes
      if (result[j] === 'correct' && solutionLower[j] === currentLetter) continue;
      
      // Si la lettre existe dans la solution, marquer comme présent
      if (solutionLower[j] === currentLetter) {
        foundInSolution = true;
        break;
      }
    }
    
    if (foundInSolution) {
      result[i] = 'present'; // jaune - lettre correcte, mauvaise position
    }
  }

  return result;
}


export function isGameWon(guess, solution) {
  return guess.toLowerCase() === solution.toLowerCase();
}


export function isGameLost(currentAttempt) {
  return currentAttempt >= TENTATIVES_MAX;
}


export function validateGuess(guess, expectedLength) {

  if (!guess || guess.trim() === '') {
    return { valid: false, error: 'Please enter a word' };
  }
  
  // check length
  if (guess.length !== expectedLength) {
    return { valid: false, error: `Word must be ${expectedLength} letters long` };
  }
  
  // check if only letters regex s/o Enpro goat de next
  const hasOnlyLetters = /^[a-zA-Z]+$/.test(guess);
  if (!hasOnlyLetters) {
    return { valid: false, error: 'Only letters allowed' };
  }

  return { valid: true, error: null };
}


export function getGridDimensions(wordLength) {
  return {
    columns: Math.max(LONGUEUR_MIN, Math.min(LONGUEUR_MAX, wordLength)),
    rows: TENTATIVES_MAX
  };
} 