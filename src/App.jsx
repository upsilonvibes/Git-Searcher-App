import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import './App.css';

function App() {
  // 1. Setting up our "States" (Memory banks)
  const [username, setUsername] = useState('upsilonvibes'); // Defaults to your profile!
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. The core JavaScript function that talks to GitHub's API
  const fetchGitHubData = async (userToSearch) => { //Tells JavaScript:'Heads up, this function is going to perform asynchronous tasks.'
    setLoading(true);
    setError(null);
    
    try {
      // Fetch profile details
      //The await keyword pauses the code execution inside that specific function until the external server answers back.
      const profileResponse = await fetch(`https://api.github.com/users/${userToSearch}`);
      
      if (!profileResponse.ok) {
        throw new Error('User not found. Check the spelling and try again!');
      }
      
      const profileData = await profileResponse.json();
      setProfile(profileData);

      // Fetch user's repositories
      //fetch() is a native global JavaScript method used to make HTTP network requests.
      const reposResponse = await fetch(`https://api.github.com/users/${userToSearch}/repos?sort=updated&per_page=6`);
      //The initial response that comes back from fetch is a raw HTTP response stream. To read the actual payload data in a format JavaScript understands as objects and arrays, we have to run .json(), which is also an asynchronous action
      const reposData = await reposResponse.json();//
      setRepos(reposData);

    } catch (err) {
      setError(err.message);
      setProfile(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  // 3. Trigger an automatic fetch for 'upsilonvibes' when the page opens
  useEffect(() => {
    fetchGitHubData(username);
  }, []); // Empty brackets mean: "Run this exactly once when the app mounts"

  return (
    <div className="app-container">
      <header>
        <h1>Git Searcher</h1>
      </header>
      
      <main>
        {/* Pass our search function down to the SearchBar */}
        <SearchBar onSearch={fetchGitHubData} />

        {/* Conditional Rendering: Show loading state, errors, or data */}
        {loading && <p className="status-message">Cargando datos (Loading)...</p>}
        {error && <p className="error-message">{error}</p>}
        
        {!loading && !error && (
          <>
            <ProfileCard profile={profile} />
            <RepoList repos={repos} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;