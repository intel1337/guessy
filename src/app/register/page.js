'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import ParticlesBackground from '../components/particle';
import Link from "next/link";

function Message({ status }) {
  return (
    <div className={styles.message}>
      <p>{status}</p>
    </div>
  );
}

export default function Home() {
  const [username, setUsername] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isValid, setIsValid] = useState(true);


  const ifInvalid = (value) => {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed) || value.trim().length < 4) {
      setStatus("Invalid input: must be a valid number with at least 4 digits.");
      setIsValid(false);
    } else {
      setStatus("");
      setIsValid(true); 
    }
  };

  // Handle numero input change
  const handleNumeroChange = (e) => {
    const value = e.target.value;
    setNumero(value); // Update the numero state
    ifInvalid(value); // Validate the value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure password is valid
    const parsed = parseInt(password, 10);
    setIsValid(!isNaN(parsed) && password.trim().length >= 4 && String(parsed) === password.trim());

    if (!isValid) {
      setStatus("Password must be a valid integer with at least 4 digits.");
      return;
    }

    const formData = new FormData();
    formData.set('email', email);
    formData.set('password', password);
    formData.set('username', username);
    formData.set('numero', numero);

    try {
      const response = await fetch('https://guessy-rho.vercel.app/api/auth/register', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const result = await response.json();
      console.log(result);

      // Handle response status
      if (result.status === 'Successfully created user') {
        setStatus('User Registration successful');
      } else if (result.status === '429 - Too many requests') {
        setStatus('Too many attempts, try again later...');
      } else if (result.status === 'Failed to fetch users') {
        setStatus('Server is having a moment, Try Later! 😅');
      } else if (result.status === 'User already has this username') {
        setStatus('Username already in use, try changing username');
      } else if (result.status === 'User already has an account') {
        setStatus('Account already existing, Try Logging in');
      } else {
        setStatus(result.status || 'User Registration failed');
      }
    } catch (error) {
      setStatus('Error occurred while registering.');
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 3 }}>
      <ParticlesBackground />
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.herologo}
            src="/guessylogo.png"
            alt="Next.js logo"
            width={700}
            height={190}
            priority
          />
          <form onSubmit={handleSubmit}>
            <div className={styles.container}>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                  placeholder="Email.."
                />
              </div>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={styles.input}
                  placeholder="Username.."
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Pin Code.."
                  value={numero}
                  onChange={handleNumeroChange} // Corrected here
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.ctas}>
                <button className={styles.login} type="submit" disabled={!isValid}>
                  <span className={styles.primary}>
                    <Image
                      className={styles.logo}
                      src="./login-svgrepo-com.svg"
                      alt="Login icon"
                      width={20}
                      height={20}
                    />
                    Register
                  </span>
                </button>
                <Link href="/">
                  <span className={styles.secondary}>Login</span>
                </Link>
              </div>
            </div>

            <Message status={status} />
          </form>
        </main>
        <footer className={styles.footer}>
          <a href="/how-to-play" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://www.svgrepo.com/show/523492/lightbulb.svg"
              alt="Lightbulb icon"
              width={16}
              height={16}
            />
            How to Play
          </a>
          <a href="/share" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://www.svgrepo.com/show/521832/share-1.svg"
              alt="Share icon"
              width={16}
              height={16}
            />
            Share Your Score
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://www.svgrepo.com/show/533393/calendar-lines.svg"
              alt="Calendar icon"
              width={16}
              height={16}
            />
            Daily Puzzle
          </a>
        </footer>
      </div>
    </div>
  );
}
