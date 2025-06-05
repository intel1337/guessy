// fetch le leaderboard (top 100 scores
export const fetchLeaderboard = async () => {
  try {
    const response = await fetch('/api/database/leaderboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch leaderboard');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
};

// submit
export const submitScore = async (username, score) => {
  try {
    const response = await fetch('/api/database/leaderboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        score: score
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit score');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting score:', error);
    throw error;
  }
}; 