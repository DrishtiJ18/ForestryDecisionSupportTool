import React, { useState } from "react";

import FarmerForm from "../components/FarmerForm";
import RecommendationCard from "../components/RecommendationCard";
import Loader from "../components/Loader";
import { getTreeRecommendations } from "../api/geminiApi";

export default function Home() {
    const [form, setForm] = useState({
        state: "",
        soil: "",
        rainfall: "",
        purpose: "",
    });
    const [loading, setLoading] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        setRecommendations([]);
        setError("")
    };

    const handleSubmit = async () => {
        if (
            !form.state ||
            !form.soil ||
            !form.rainfall ||
            !form.purpose
        ) {
            setError(
                "Please select all fields before generating recommendations."
            );
            return;
        }

        setError("");
        setLoading(true);

        try {
            const response =
                await getTreeRecommendations(form);

            const formattedData = response.map(
                (item, index) => ({
                    ...item,

                    image:
                        index === 0
                            ? "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
                            : index === 1
                                ? "https://images.unsplash.com/photo-1605027990121-cbae9e0642df"
                                : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",

                    stateScore: 25,
                    soilScore: 25,
                    rainfallScore: 25,
                    purposeScore: 25,
                })
            );

            setRecommendations(formattedData);
        } catch (error) {
            console.log(error);
            setError(
                "Failed to fetch recommendations"
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="container">
            <h1 className="page-title">
                Agroforestry Recommendation Tool
            </h1>

            <p className="subtitle">
                Find the best tree species for your
                land based on your conditions and
                goals
            </p>

            <FarmerForm
                form={form}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {
                loading && <Loader />
            }
            {
                error && (
                    <div className="error-box">
                        {error}
                    </div>
                )
            }
            {recommendations.length > 0 && (
                <div className="results-section">
                    <h2 className="results-title">
                        🌳 Top Recommended Tree Species
                    </h2>

                    <p className="results-subtitle">
                        Based on your inputs, here are
                        the best tree species for your
                        farm.
                    </p>

                    <div className="card-grid">
                        {recommendations.map(
                            (recommendation, index) => (
                                <RecommendationCard
                                    key={
                                        recommendation.species
                                    }
                                    recommendation={
                                        recommendation
                                    }
                                    index={index}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}