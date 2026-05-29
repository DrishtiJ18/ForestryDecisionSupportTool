import React from "react";

import MatchBar from "./MatchBar";

export default function RecommendationCard({
    recommendation,
    index,
}) {
    return (
        <div className="card">
            <div className="card-top">

                <div className="card-left">

                    <img
                        src={recommendation.image}
                        alt={recommendation.species}
                        className="tree-image"
                    />

                    <div className="title-wrapper">
                        <h2 className="tree-name">
                            {recommendation.species}
                        </h2>
                    </div>

                </div>

                <div className="match-badge">
                    {recommendation.matchScore >= 75
                        ? "Excellent Match"
                        : recommendation.matchScore >= 50
                            ? "Good Match"
                            : "Fair Match"}
                </div>

            </div>
            <p className="reason">
                {recommendation.reason}
            </p>


            <MatchBar
                score={recommendation.matchScore}
            />

            <div className="stats-grid">
                <StatBox
                    title="State"
                    score={recommendation.stateScore}
                />

                <StatBox
                    title="Soil"
                    score={recommendation.soilScore}
                />

                <StatBox
                    title="Rainfall"
                    score={recommendation.rainfallScore}
                />

                <StatBox
                    title="Purpose"
                    score={recommendation.purposeScore}
                />
            </div>

            <div className="note-box">
                🌱 {recommendation.note}
            </div>
        </div>
    );
}

function StatBox({
    title,
    score,
}) {
    return (
        <div className="stat-box">
            <div className="stat-title">
                {title}
            </div>

            <div className="stat-score">
                {score}/25
            </div>
        </div>
    );
}