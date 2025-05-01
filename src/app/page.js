'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import ParticlesBackground from './components/particle';
import Link from "next/link"


function Message(param){  //replace with a component on pro d
  return(
    <div className={styles.message}>
      <p>{param}</p>
    </div>
  )

}

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('https://guessy-rho.vercel.app/api/auth/login', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const result = await response.json();
      console.log(result)
      if (result.status === 'Valid') {
        setStatus('Login successful');
        localStorage.setItem('token', result.token)
        console.log(result.token)


      } 
      else if(result.status === '429 - Too many requests'){
        setStatus('Too many attemps, try again later...')
      }
      else if(result.status === 'Failed to fetch users'){
        setStatus('Server’s having a moment, Try Later! 😅')
      }
      else if(result.status === '401 - user not found'){
        setStatus('Account not found, Try creating one !')
      }
      else {
        setStatus('Wrong Password or Email, Try again');
      }
    } catch (error) {
      setStatus('Error occurred while logging in');


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
            alt="Guessy Logo.js logo"
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
                  type="password"
                  placeholder="Password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.ctas}>
                <button className={styles.login} type="submit">
                  <span className={styles.primary}>
                    <Image
                      className={styles.logo}
                      src="./login-svgrepo-com.svg"
                      alt="Login icon"
                      width={20}
                      height={20}
                    />
                    Login
                  </span>
                </button> 
                <Link
                href="/register"
                ><span className={styles.secondary}>Register</span>
                </Link> 
              </div>
            
            </div>
              {Message(status)}
            

          </form>



        </main>
        <footer className={styles.footer}>
          <a
            href="/how-to-play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://www.svgrepo.com/show/523492/lightbulb.svg"
              alt="Lightbulb icon"
              width={16}
              height={16}
            />
            How to Play
          </a>
          <a
            href="/share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://www.svgrepo.com/show/521832/share-1.svg"
              alt="Share icon"
              width={16}
              height={16}
            />
            Share Your Score
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
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
