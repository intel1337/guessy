export function getAuthToken() {
  // Check si le token est dans le local storage
  if (typeof window === 'undefined') return null;

  return localStorage.getItem('jwt') || localStorage.getItem('token');
}

export function saveAuthToken(token) {
  if (typeof window === 'undefined') return; // Server-side check
  // Stocker le token dans le local storage
  localStorage.setItem('token', token);
}

/**
 Enleve le jwt pour log out 
 */
export function removeAuthToken() {
  if (typeof window === 'undefined') return; // Server-side check
  localStorage.removeItem('token');
}


export function isAuthenticated() {
  const token = getAuthToken();
  return token !== null && token !== '';
}



export function requireAuth(redirectPath = '/') {
  if (!isAuthenticated()) {
    const loginUrl = redirectPath !== '/' 
      ? `/?redirect=${encodeURIComponent(redirectPath)}`
      : '/';
    window.location.href = loginUrl;
    return false;
  }
  return true;
} 