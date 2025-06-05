'use client'
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './rulepage.module.css';
import { requireAuth, removeAuthToken } from "../utils/auth";

export default function HowToPlayPage() {
  useEffect(() => {
    requireAuth('/how-to-play');
  }, []);

  function handleLogout() {
    removeAuthToken();
    window.location.href = '/';
  }

  return (
    <div style={{ position: 'relative', zIndex: 3 }}>
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
          <Link className={`${styles.navLink} ${styles.navLinkActive}`} href="/how-to-play">Rules</Link>
          <Link className={styles.navLink} href="/leaderboard">Leaderboard</Link>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>How to Play Guessy</h1>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🎯 Objective</h2>
            <p className={styles.text}>Guess the Secret word with 6 attempts. </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>📊 Difficulty Levels & Scoring</h2>
            <div className={styles.difficultyGrid}>
              <div className={styles.difficultyCard}>
                <h3>Easy</h3>
                <p>3-4 letter words</p>
                <p><strong>Base Score: 100 points</strong></p>
                <p>+50 bonus per remaining attempt</p>
              </div>
              <div className={styles.difficultyCard}>
                <h3>Medium</h3>
                <p>5-6 letter words</p>
                <p><strong>Base Score: 200 points</strong></p>
                <p>+50 bonus per remaining attempt</p>
              </div>
              <div className={styles.difficultyCard}>
                <h3>Hard</h3>
                <p>7-8 letter words</p>
                <p><strong>Base Score: 500 points</strong></p>
                <p>+50 bonus per remaining attempt</p>
              </div>
              <div className={styles.difficultyCard}>
                <h3>Impossible</h3>
                <p>9+ letter words</p>
                <p><strong>Base Score: 1000 points</strong></p>
                <p>+50 bonus per remaining attempt</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🎮 How to Play</h2>
            <ol className={styles.rulesList}>
              <li>Choose your difficulty level</li>
              <li>Type a word matching the required length</li>
              <li>Press &ldquo;Submit Guess&rdquo; to check your word</li>
              <li>Use the color feedback to guide your next guess</li>
              <li>You have 6 attempts to find the correct word</li>
              <li>Win to earn points and get on the leaderboard!</li>
            </ol>
          </div>



          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🎨 Color Logic</h2>
            <div className={styles.exampleSection}>
                 <div className={styles.example}>
                <div className={styles.exampleRow}>
                  <span className={styles.letterBox + ' ' + styles.correct}>G</span>
                   <span className={styles.letterBox}>U</span>
                  <span className={styles.letterBox}>E</span>
                    <span className={styles.letterBox}>S</span>
                  <span className={styles.letterBox}>S</span>
                  <span className={styles.letterBox}>Y</span>
                </div>
                <p className={styles.exampleText}>
                  <span className={styles.colorIndicator + ' ' + styles.correct}>Green</span>
                  = Letter is correct and in the right position
                </p>
              </div>

              <div className={styles.example}>
                  <div className={styles.exampleRow}>
                  <span className={styles.letterBox}>G</span>
                  <span className={styles.letterBox + ' ' + styles.present}>U</span>
                  <span className={styles.letterBox}>E</span>
                    <span className={styles.letterBox}>S</span>
                  <span className={styles.letterBox}>S</span>
                    <span className={styles.letterBox}>Y</span>
                </div>
                <p className={styles.exampleText}>
                  <span className={styles.colorIndicator + ' ' + styles.present}>Yellow</span>
                  = Letter is in the word but wrong position
                </p>
                </div>


            
            
              <div className={styles.example}>
                <div className={styles.exampleRow}>
                  <span className={styles.letterBox}>G</span>
                  <span className={styles.letterBox}>U</span>
                  <span className={styles.letterBox + ' ' + styles.absent}>E</span>
                    <span className={styles.letterBox}>S</span>
                  <span className={styles.letterBox}>S</span>
                  <span className={styles.letterBox}>Y</span>
                </div>
                <p className={styles.exampleText}>
                  <span className={styles.colorIndicator + ' ' + styles.absent}>Gray</span>
                  = Letter is not in the word at all
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actionSection}>
       <Link href="/game" className={styles.playButton}>
              🎮 Start Playing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
