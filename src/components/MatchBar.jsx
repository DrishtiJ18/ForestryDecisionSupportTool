import React from "react";

export default function MatchBar({
  score,
}) {
  return (
    <div className="match-section">
      <div className="match-row">
        <span>Match Score</span>

        <span>{score}%</span>
      </div>

      <div className="match-bar">
        <div
          className="match-fill"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  );
}