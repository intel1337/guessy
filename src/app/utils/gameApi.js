import { getAuthToken } from './auth';

export async function fetchRandomWord(difficulty = 'medium') {
  try {

    const token = getAuthToken();
    if (!token) {
      return { success: false, error: 'User not logged in' };
    }

    // 2eme étape: Demande a notre API un mot aléatoire
    const response = await fetch(`/api/database/words/random?difficulty=${difficulty}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // 3eme étape: Récupere les données de la réponse
    const data = await response.json();

    // 4eme étape: Vérifie si tout s'est bien passé
    if (!response.ok) {
      return { success: false, error: data.message || 'Server error' };
    }

    if (data.status !== 'success' || !data.data || !data.data.word) {
      return { success: false, error: 'Invalid response from server' };
    }

    
// 5eme étape: Retourne les données du mot
    return {
      success: true,
      word: data.data.word,
      length: data.data.length,
      difficulty: data.data.difficulty,
      fallback: data.data.fallback || false
    };

  } catch (error) {
    console.error('Error getting word:', error);
    return { success: false, error: error.message };
  }
}


export async function checkWordExists(word) {
  return word && word.length >= 3 && word.length <= 12;
} 