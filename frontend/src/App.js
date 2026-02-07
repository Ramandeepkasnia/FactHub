import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API URL from environment variable or use default localhost
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  useEffect(() => {
    // Fetch facts from backend API
    fetch(`${API_URL}/api/facts`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch facts');
        }
        return response.json();
      })
      .then(data => {
        setFacts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 FactHub</h1>
        <p className="subtitle">Your source for interesting facts</p>
      </header>

      <main className="App-main">
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading facts...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <h2>❌ Error</h2>
            <p>{error}</p>
            <p className="error-hint">Make sure the backend server is running at {API_URL}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="facts-container">
            <h2>Amazing Facts</h2>
            <ul className="facts-list">
              {facts.map(fact => (
                <li key={fact.id} className="fact-item">
                  <span className="fact-id">#{fact.id}</span>
                  <span className="fact-text">{fact.fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Powered by FastAPI + React</p>
      </footer>
    </div>
  );
}

export default App;
