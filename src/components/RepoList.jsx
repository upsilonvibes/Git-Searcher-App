import React from 'react';
import { Star, GitFork, BookOpen } from 'lucide-react';

// 1. We pass 'repos' into the component as a "Prop"
function RepoList({ repos }) {
  
  // 2. Defensive Check: If data hasn't loaded yet, show a fallback message
  if (!repos || repos.length === 0) {
    return <p className="no-repos">No repositories found or loading...</p>;
  }

  return (
    <div className="repo-list-container">
      <h3><BookOpen size={20} /> Popular Repositories</h3>
      
      <div className="repo-grid">
        {/* 3. The .map() loop starts here */}
        {repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description || "No description provided."}</p>
            
            <div className="repo-stats">
              <span><Star size={14} /> {repo.stargazers_count}</span>
              <span><GitFork size={14} /> {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RepoList;