# FactHub 🌟

A simple full-stack web application that displays interesting facts. Built with FastAPI (backend) and React (frontend) for learning purposes.

## 📋 Project Overview

FactHub is a beginner-friendly full-stack application that demonstrates:
- RESTful API development with FastAPI
- Frontend-backend integration
- React component development with hooks
- CORS configuration
- Environment variable management
- Modern UI design with glassmorphism

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI
- **Server**: Uvicorn (ASGI server)
- **Language**: Python 3.9+
- **API Documentation**: Auto-generated Swagger UI

### Frontend
- **Framework**: React 18
- **Styling**: Vanilla CSS
- **HTTP Client**: Fetch API
- **Build Tool**: Create React App

## 📁 Folder Structure

```
FactHub/
├── backend/
│   ├── venv/                 # Python virtual environment
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── README.md            # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styling
│   │   └── index.js        # React entry point
│   ├── public/             # Static files
│   ├── .env                # Environment variables
│   ├── package.json        # Node dependencies
│   └── README.md           # Frontend documentation
└── README.md               # This file
```

## 🚀 How to Run Locally

### Prerequisites
- Python 3.9+ installed
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Backend Setup

1. **Navigate to backend folder**:
   ```bash
   cd backend
   ```

2. **Activate virtual environment**:
   ```bash
   # Windows
   venv\Scripts\activate

   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

5. **Test the API**:
   - Open browser: http://localhost:8000/docs
   - Test endpoint: http://localhost:8000/api/facts

### Frontend Setup

1. **Open a NEW terminal** (keep backend running)

2. **Navigate to frontend folder**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm start
   ```

5. **View the app**:
   - Automatically opens at: http://localhost:3000
   - You should see facts fetched from the backend

## 🌐 API Endpoints

### GET `/`
Returns API status.

**Response**:
```json
{
  "message": "Welcome to FactHub API",
  "status": "running"
}
```

### GET `/api/facts`
Returns a list of facts.

**Response**:
```json
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]
```

## 🔧 Configuration

### Changing Backend URL (Frontend)

Edit `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:8000
```

After deployment, update with your production URL:
```env
REACT_APP_API_URL=https://your-api-domain.com
```

## 🚨 Common Issues & Fixes

### Issue 1: Import Error in Backend
**Error**: `ModuleNotFoundError: No module named 'fastapi'`

**Fix**:
- Make sure virtual environment is activated
- Run: `pip install -r requirements.txt`

### Issue 2: Frontend Can't Fetch Data
**Error**: "Failed to fetch facts"

**Fix**:
- Ensure backend is running on port 8000
- Check CORS is enabled in `backend/main.py`
- Verify `.env` has correct backend URL

### Issue 3: Port Already in Use
**Error**: `Address already in use`

**Fix**:
- Backend: Use different port: `uvicorn main:app --reload --port 8001`
- Frontend: Choose different port when prompted

### Issue 4: Virtual Environment Not Activating
**Fix**:
- Windows: `venv\Scripts\activate.bat`
- PowerShell: `venv\Scripts\Activate.ps1`
- If restricted, run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

## 📦 Deployment Overview (AWS)

### Backend Deployment Options
1. **AWS EC2**: Deploy on virtual server (Recommended - covered in deployment guide)
2. **AWS Lambda + API Gateway**: Serverless deployment
3. **AWS Elastic Beanstalk**: Managed platform

### Frontend Deployment Options
1. **AWS S3 + Static Hosting**: Simple and cost-effective (Recommended - covered in deployment guide)
2. **AWS Amplify**: Full-stack hosting
3. **Vercel/Netlify**: Third-party options

### Quick Deployment Steps

**See [aws_deployment_guide.md](./aws_deployment_guide.md) for complete step-by-step instructions.**

**Summary:**
1. Deploy backend to AWS EC2 (t2.micro free tier)
2. Build frontend: `npm run build`
3. Update frontend `.env` with deployed backend URL
4. Upload build folder to AWS S3
5. Enable static website hosting on S3
6. Access via public URLs

### Production URLs

Once deployed, your application will be accessible at:

**Backend API:**
```
http://YOUR-EC2-PUBLIC-IP:8000
```

**Frontend Website:**
```
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com
```

**Example:**
- Backend: `http://54.123.45.67:8000/api/facts`
- Frontend: `http://facthub-frontend.s3-website-us-east-1.amazonaws.com`

## 📚 What I Learned

### Backend Development
- Creating REST APIs with FastAPI
- Configuring CORS for cross-origin requests
- Using Python virtual environments
- Running ASGI servers with Uvicorn
- Auto-generating API documentation

### Frontend Development
- Building React apps with functional components
- Using React hooks (`useState`, `useEffect`)
- Fetching data from REST APIs
- Handling loading and error states
- Environment variable configuration in React
- Creating responsive, modern UI designs

### Full-Stack Integration
- Connecting frontend to backend APIs
- Managing environment-specific configurations
- Debugging cross-origin issues
- Project structure and organization

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own learning!

## 📝 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for learning full-stack development**
