from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app instance
app = FastAPI(title="FactHub API", version="1.0.0")

# Configure CORS to allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Hardcoded facts data
facts_data = [
    {"id": 1, "fact": "The sun is a star."},
    {"id": 2, "fact": "Water boils at 100°C."},
    {"id": 3, "fact": "Earth has one moon."}
]


@app.get("/")
def read_root():
    """Root endpoint - API status check"""
    return {"message": "Welcome to FactHub API", "status": "running"}


@app.get("/api/facts")
def get_facts():
    """Get all facts - returns hardcoded list of facts"""
    return facts_data
