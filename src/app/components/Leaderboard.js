'use client'
import { useState, useEffect } from 'react';
import { fetchLeaderboard } from '../utils/leaderboard';
import styles from './Leaderboard.module.css';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      setLoading(true);
      const data = await fetchLeaderboard();
      setLeaderboard(data);
      setError('');
    } catch (err) {
      setError('Failed to load leaderboard');
      console.error('Leaderboard error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.leaderboard}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.leaderboard}>
        <p className={styles.error}>{error}</p>
        <button onClick={loadLeaderboard} className={styles.retryButton}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.leaderboard}>

      {leaderboard.length === 0 ? (
        <p>No scores yet. Be the first!</p>
      ) : (
        <div className={styles.scoreList}>
          {leaderboard.map((entry, index) => (
            <div key={entry.username} className={styles.scoreEntry}>
              <span className={styles.rank}>#{index + 1}</span>
              <span className={styles.username}>
                {entry.name || entry.username}
              </span>
              <span className={styles.score}>{entry.score} pts</span>
            </div>
          ))}
        </div>
      )}
      <button onClick={loadLeaderboard} className={styles.refreshButton}>
        🔄 Refresh
      </button>
    </div>
  );
} 