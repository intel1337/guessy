# Guessy?
Wordle Like Game coded with NextJS 

<img width="1466" alt="image" src="https://github.com/user-attachments/assets/18c19577-8451-45db-a9e7-c645b037c634" />
<a href="https://guessy-rho.vercel.app">Preview<a/>


# ATTENTION !
This project is for french users, i use english for moslty everything but all the comments will be in english / french
and the game itself and the words are also french 

This is a test to apply for a school, but if you can speak french then play the game !
avilable at : 


guessy-rho.vercel.app

# Description
- Wordle Like game
- Coded with NextJS
- Auth Coded by Hand
# Sources / Thanks To:
```
@EnPro // Full stack NextDev 
@Niko // Angular and Co Student
@gob // Asp.net Dev
@JE // Fullstack Next Dev (huge experience huge shoutout)
@Chaouchi // Insane Teacher and Human Stack Overflow

https://readme.so/editor
https://stackoverflow.com/questions
https://github.com/
https://vercel.com/intel1337x
https://nextjs.org ❤️
https://www.prisma.io
https://www.cursor.com // No AI generated code, Only Formatting, ReadME and Text + Features Ideas
https://eslint.org
https://readme.so/editor
https://laplateforme.io/ // Project for this school to candidate to a master IT




# Features

## 🎮 Game Mechanics
- **Multiple Difficulty Levels**: Easy, Medium, Hard, and Extreme modes
- **Dynamic Word Length**: Support for words ranging from 4 to 12+ letters
- **Color-Coded Feedback**: 
  - 🟩 Green: Correct letter in correct position
  - 🟨 Yellow: Correct letter in wrong position  
  - ⬜ Gray: Letter not in the word
- **Real-time Input Validation**: Instant feedback on word submissions
- **Game Statistics**: Track wins, attempts, and performance

## 🔐 Authentication & User Management
- **Custom Authentication System**: Hand-coded secure login/register
- **JWT Token Management**: Secure session handling
- **Password Hashing**: bcrypt encryption for user security
- **Rate Limiting**: Protection against spam and abuse
- **User Profiles**: Personalized gaming experience

## 🎨 User Interface & Experience
- **Modern Dark Theme**: Sleek, eye-friendly design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Animated Interactions**: Smooth hover effects and transitions
- **Particle Background**: Dynamic visual effects with ParticleJS
- **Glassmorphism Design**: Modern UI with backdrop blur effects
- **Accessible Navigation**: Intuitive user interface

## 🛠️ Technical Features
- **Next.js 15 App Router**: Latest React framework with TurboPack
- **TypeScript Support**: Type-safe development
- **PostgreSQL Database**: Robust data storage with Prisma ORM
- **API Rate Limiting**: Vercel KV and Upstash integration
- **Server-Side Rendering**: Optimized performance
- **RESTful API**: Clean backend architecture

## 📱 Game Features
- **How to Play Guide**: Comprehensive tutorial and rules
- **Multiple Game Modes**: Various difficulty settings
- **Word Database**: Extensive vocabulary with random word generation
- **Error Handling**: User-friendly error messages
- **Game State Management**: Resume games and track progress
- **Responsive Letter Grid**: Adaptive layout for different word lengths

## 🚀 Performance & Security
- **Vercel Deployment**: Fast, global CDN delivery
- **Environment Configuration**: Secure API key management
- **Database Optimization**: Efficient queries with Prisma
- **Security Headers**: Protected against common vulnerabilities
- **ESLint Integration**: Code quality and consistency

# Quickstart

## Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager
- PostgreSQL database
- Vercel account (for production deployment)

## Environment Setup

1. **Copy the environment template:**
```bash
cp env.exemple .env
```

2. **Fill in your environment variables:**

### Required Variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `AUTH_SECRET`: Random Secure string
- `SECRET_TOKEN_KEY`: Random string for JWT tokens (generate with `openssl rand -base64 32`)
- `SERVER_KEY`: Random string for API security (generate with `openssl rand -base64 32`)

### For Rate Limiting (Production):
- `KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`: Vercel KV/Upstash Redis credentials

### Dev Version

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Setup database (first time only)
npx prisma db push

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Version (Vercel)

1. **Vercel Project Setup:**
   - Set Node.js version to 20.x+
   - Add Vercel KV database to your project
   - Configure environment variables in Vercel dashboard

2. **Environment Variables Required:**
   ```
   DATABASE_URL=your_postgresql_url
   AUTH_SECRET=your_auth_secret
   SECRET_TOKEN_KEY=your_jwt_secret
   SERVER_KEY=your_server_key
   KV_URL=your_kv_url
   KV_REST_API_URL=your_kv_api_url
   KV_REST_API_TOKEN=your_kv_token
   KV_REST_API_READ_ONLY_TOKEN=your_kv_readonly_token
   ```

3. **Deploy:**
   ```bash
   # Build and deploy
   npm install
   npx prisma generate
   npm run build
   vercel --prod
   ```

## Database Setup

1. **Create your Prisma Postgres database**
2. **Update your DATABASE_URL in .env**
3. **Run Prisma migrations:**
   ```bash
   npx prisma db push
   npx prisma studio  # Optional: Open database admin panel
   ```

# Dependecies
```
Framework : Next.js v15.3.1
Using App Router and TurboPack for dev
Tailwindless
Full JS
ESlint Enabled
---
Direct Dependecies :

NodeJS v20.xx
(
npm
npx
nvm
)

TSC - Typescript Compiler
CLI :
Vercel CLI
Next CLI
Prisma CLI

---
Frontend Dependecies : 

Fafont
ParticleJS
---
Auth / Backend Services :

Security : 
jsonwebtoken // For JWT tokens and local Session
bcrypt // for Secure data Hashing and comparaison
Vercel // for production and statistics
Vercel KV and Upstash // for rate limit

Data and Storage :

Database : PostgreSQL
ORM : Prisma
Database Panel : Prisma Studio
