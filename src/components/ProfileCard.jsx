import React from 'react';
import { Users, MapPin, Link as LinkIcon, GitBranch, Calendar } from 'lucide-react';

function ProfileCard({ profile }) {
  // If profile is null (hasn't loaded yet), don't render anything
  if (!profile) return null;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profile.avatar_url} alt={profile.name} className="avatar" />
        <div className="profile-names">
          <h2>{profile.name || profile.login}</h2>
          <a href={profile.html_url} target="_blank" rel="noreferrer">@{profile.login}</a>
        </div>
      </div>

      <p className="bio">{profile.bio || "This user hasn't written a bio yet."}</p>

      <div className="profile-stats">
        <div><Users size={18} /> <span>{profile.followers} Followers</span></div>
        <div><GitBranch size={18} /> <span>{profile.public_repos} Repos</span></div>
      </div>

      <div className="profile-info">
        {profile.location && <p><MapPin size={16} /> {profile.location}</p>}
        {profile.blog && (
          <p>
            <LinkIcon size={16} /> 
            <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noreferrer">
              {profile.blog}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;