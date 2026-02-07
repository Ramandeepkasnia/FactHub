# FactHub Backend

## Overview
This is the FastAPI backend for FactHub. It provides a simple REST API that serves hardcoded facts to the frontend.

## Tech Stack
- **Framework**: FastAPI (modern, fast Python web framework)
- **Server**: Uvicorn (ASGI server)
- **Python Version**: 3.9+

## Setup Instructions

### 1. Activate Virtual Environment
```bash
# Windows
venv\Scripts\activate

# You should see (venv) in your terminal prompt
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Server
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at: `http://localhost:8000`

### 4. Test the API
Open your browser and visit:
- **API Docs (Swagger UI)**: http://localhost:8000/docs
- **Root Endpoint**: http://localhost:8000/
- **Facts Endpoint**: http://localhost:8000/api/facts

## API Endpoints

### GET `/`
Returns API status and welcome message.

**Response:**
```json
{
  "message": "Welcome to FactHub API",
  "status": "running"
}
```

### GET `/api/facts`
Returns a list of hardcoded facts.

**Response:**
```json
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]
```

## Dependencies Explanation

### fastapi
- Modern Python web framework for building APIs
- Automatic API documentation (Swagger UI)
- Fast performance with async support
- Type checking with Python type hints

### uvicorn
- Lightning-fast ASGI server
- Runs the FastAPI application
- `[standard]` includes WebSockets and other features
- `--reload` flag enables auto-restart on code changes

## CORS Configuration
CORS (Cross-Origin Resource Sharing) is enabled to allow the React frontend to make requests to this API. In production, you should restrict `allow_origins` to your specific frontend domain instead of `"*"`.

## What I Learned
- How to create a REST API with FastAPI
- How to configure CORS for frontend-backend communication
- How to structure a Python backend project
- How to use virtual environments for dependency isolation
- How Uvicorn serves ASGI applications
