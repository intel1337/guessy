import bcrypt from 'bcrypt';

const password = 'password'; // The word to hash
const saltRounds = 10; // Standard salt rounds

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
