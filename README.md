# InterviewIQ

InterviewIQ is an AI-powered mock interview platform that helps candidates practice interviews for HR and technical roles. Users can sign in, choose an interview mode, upload a resume, receive AI-generated questions, answer them in real time, and get a detailed evaluation report with scoring and feedback.

## Features

- AI-driven mock interviews for HR and technical roles
- Resume-based interview personalization
- Smart question generation with adaptive difficulty
- Real-time answer evaluation with confidence, communication, and correctness scoring
- Interview history and report viewing
- PDF-style report generation experience
- Credit-based interview usage
- Razorpay-powered purchase flow for extra credits
- Google authentication with JWT-based session handling

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion / Motion
- Redux Toolkit
- Firebase Authentication
- Recharts
- jsPDF

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Cookie-based authentication
- Multer for file uploads
- OpenRouter AI API
- Razorpay SDK

## Project Structure

```text
client/               # React frontend
  src/
    components/       # Reusable UI components
    pages/            # Page-level screens
    context/          # Global context providers
    utils/            # Firebase helpers and utilities

server/               # Express backend
  controllers/        # Route handlers and business logic
  models/             # MongoDB schemas
  routes/             # API endpoints
  services/           # External integrations (AI, payments)
  middlewares/        # Auth and upload middleware
  config/             # DB and token configuration
```

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18+ installed
- npm or yarn
- A MongoDB Atlas database
- An OpenRouter API key
- Razorpay API credentials
- Firebase project credentials for Google authentication

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd interviewIQ
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the server folder with the following variables:

```env
PORT=8000
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=http://localhost:5173
```

Create a `.env` file inside the client folder if needed for Firebase:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

## Running Locally

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

### Start the backend

```bash
cd server
npm run dev
```

The backend will run at:

```text
http://localhost:8000
```

## API Overview

### Authentication
- POST `/api/auth/google`
- GET `/api/auth/logout`

### User
- GET `/api/user/current-user`

### Interview
- POST `/api/interview/resume`
- POST `/api/interview/generate-questions`
- POST `/api/interview/submit-answer`
- POST `/api/interview/finish`
- GET `/api/interview/get-interview`
- GET `/api/interview/report/:id`

### Payments
- POST `/api/payment/create-order`
- POST `/api/payment/verify-payment`

