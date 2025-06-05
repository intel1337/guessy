'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import ParticlesBackground from './components/particle';
import Link from "next/link"
import { useRouter } from 'next/navigation';

function Message(param){  //replace with a component on pro d
  return(
    <div className={styles.message}>
      <p>{param}</p>
    </div>
  )
}

export default function Home() {
  // Hooks et états du jeu
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  // Check Le jwt dans le local storage
  useEffect(() => {
    checkExistingAuth();
  }, []);

  const checkExistingAuth = async () => {
    try {
      // get Token
      const token = localStorage.getItem('token') 
      
      if (!token) {
        setIsCheckingAuth(false);
        return;
      }

      // Verify the token 
      const formData = new FormData();
      formData.append('jwt', token);

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.status === 'jwt valid') {
        // Token is valid redirect to game
        router.push('/game');
      } else {
        // token is invalid
        localStorage.removeItem('token');

        setIsCheckingAuth(false);
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      // remove token
      localStorage.removeItem('token');

      setIsCheckingAuth(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: formData,
      });

      // Check Réponse
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const result = await response.json();
      console.log(result)
      if (result.status === 'Valid') {
        setStatus('Login successful');
        // Stocker le token dans le local storage
        localStorage.setItem('token', result.token);
        console.log(result.token);
        
        // Rediriger vers le jeu après une connexion réussi
        setTimeout(() => {
          router.push('/game');
        }, 1000); // délai 1 seconde pour afficher le message de succes
      } 
      else if(result.status === '429 - Too many requests'){
        setStatus('Trop de tentatives, réessayer plus tard...')
      }
      else if(result.status === 'Failed to fetch users'){
        setStatus("Le serveur est en train de se connecter, réessayer plus tard! 😅")
      }
      else if(result.status === '401 - user not found'){
        setStatus('Compte non trouvé, créer un compte !')
      }
      else {
        setStatus('Mot de passe ou email incorrect, réessayer');
      }
    } catch (error) { // Erreur
      setStatus('Une erreur est survenue lors de la connexion');
    }
  };

  // Afficher le message de chargement pendant la vérification de l'authentification
  if (isCheckingAuth) {
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
            <div className={styles.container}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>Vérification Utilisateur...</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

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
           {/* Utiliser Next Link */}
          <a
            href="/how-to-play"
            target=""
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


        </footer>

      </div>
    </div>

  );
}
