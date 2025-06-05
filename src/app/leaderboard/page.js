'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./leaderboard.module.css";
import ParticlesBackground from '../components/particle';
import Leaderboard from '../components/Leaderboard';
import { requireAuth, removeAuthToken } from "../utils/auth";

export default function LeaderboardPage() {
  useEffect(() => {
    requireAuth('/leaderboard');
  }, []);

  function handleLogout() {
    removeAuthToken();
    window.location.href = '/';
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
          <Link className={`${styles.navLink} ${styles.navLinkActive}`} href="/leaderboard">Leaderboard</Link>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>🏆 Leaderboard</h1>
          <p className={styles.subtitle}>Top players and their highest scores</p>
          
          <Leaderboard />
          
          <div className={styles.actions}>
            <Link href="/game" className={styles.playButton}>
              🎮 Play Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 