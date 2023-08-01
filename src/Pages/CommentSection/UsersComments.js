import React from 'react'
import { Colors } from "../../utilities/constants";

const UsersComments = ({ data, index }) => {
  const topLevelComment = data.snippet?.topLevelComment?.snippet;
  const authorDisplayName =
        topLevelComment?.authorDisplayName ?? data.snippet?.authorDisplayName;
  const textDisplay =
         topLevelComment?.textDisplay ?? data.snippet?.textDisplay;
  const userName = (authorDisplayName?.charAt(0) ?? "").toUpperCase();
  const urlRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/i;
  const match = textDisplay.match(urlRegex);
  const url = match ? match[2] : "";

  return (
    <div>
      <div className="comments">
        <p>
          <button
            className="firstName"
            style={{ backgroundColor: Colors[index % Colors.length] }}
          >
            {userName}
          </button>
          {authorDisplayName}
        </p>
        {url ? (
          <p className="text-message">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        ) : (
          <p className="text-message">{textDisplay}</p>
        )}
      </div>
    </div>
  );
};

export default UsersComments