# FactHub Frontend

## Overview
This is the React frontend for FactHub. It fetches and displays facts from the FastAPI backend in a beautiful, modern interface.

## Tech Stack
- **Framework**: React 18
- **Styling**: Vanilla CSS (with glassmorphism design)
- **HTTP Client**: Fetch API
- **Node.js Version**: 18+

## Setup Instructions

### 1. Install Dependencies
From the `frontend` folder:
```bash
npm install
```

### 2. Configure Backend URL
Create or edit the `.env` file in the frontend root:
```env
REACT_APP_API_URL=http://localhost:8000
```

**Important**: After deploying the backend to AWS, update this URL to point to your deployed API.

### 3. Run Development Server
```bash
npm start
```

The app will open automatically in your browser at: `http://localhost:3000`

## Features

### 1. Facts Display
- Fetches facts from backend `/api/facts` endpoint
- Displays facts in a clean, card-based layout
- Modern glassmorphism UI design

### 2. Loading State
- Shows animated spinner while fetching data
- User-friendly loading message

### 3. Error Handling
- Catches and displays API errors
- Shows helpful error messages
- Provides debugging hints (e.g., backend URL)

### 4. Responsive Design
- Mobile-friendly layout
- Adapts to different screen sizes
- Touch-friendly interactions

## API Integration

### Environment Variables
The frontend uses environment variables to configure the backend URL:
- **Variable**: `REACT_APP_API_URL`
- **Default**: `http://localhost:8000`
- **File**: `.env`

### Fetching Data
The app uses the Fetch API to request data:
```javascript
fetch(`${API_URL}/api/facts`)
  .then(response => response.json())
  .then(data => setFacts(data))
```

### After Deployment
When you deploy the backend to AWS:
1. Get the public API URL from AWS (e.g., `https://api.example.com`)
2. Update `.env`:
   ```env
   REACT_APP_API_URL=https://api.example.com
   ```
3. Rebuild the app: `npm run build`
4. Deploy the `build` folder to your hosting service

## Available Scripts

### `npm start`
Runs the app in development mode.
- Auto-reloads on code changes
- Opens browser automatically

### `npm run build`
Builds the app for production.
- Optimizes and minifies code
- Creates `build` folder ready for deployment

### `npm test`
Launches the test runner.

## Project Structure
```
frontend/
├── public/          # Static files
├── src/
│   ├── App.js      # Main component with API logic
│   ├── App.css     # Styling
│   └── index.js    # React entry point
├── .env            # Environment variables
└── package.json    # Dependencies
```

## Common Issues & Fixes

### Issue 1: "Failed to fetch facts"
**Cause**: Backend is not running or CORS is not configured.

**Fix**:
1. Make sure backend is running: `uvicorn main:app --reload`
2. Check backend URL in `.env` matches your backend server
3. Verify CORS is enabled in `backend/main.py`

### Issue 2: Blank page after deployment
**Cause**: Environment variable not set in production.

**Fix**:
1. Ensure `.env` has correct production API URL
2. Rebuild the app: `npm run build`
3. Clear browser cache

### Issue 3: npm vulnerabilities warning
**Note**: The warnings are from create-react-app dependencies. They don't affect this simple app's functionality.

**Optional Fix**:
```bash
npm audit fix
```

## What I Learned
- How to create a React app with functional components and hooks
- How to fetch data from a REST API using Fetch API
- How to handle loading and error states in React
- How to use environment variables in React (`REACT_APP_` prefix)
- How to create responsive, modern UI with CSS glassmorphism
- How to configure frontend-backend communication
- How React's `useEffect` hook works for side effects
- How to manage component state with `useState`
