# How Recommendation Logic Works

The recommendation engine is powered by Google Gemini AI.

When the user selects:

   - State / Region
   - Soil Type
   - Rainfall
   - Main Purpose

the application sends these inputs to Gemini in a structured prompt.

---

# Tech Stack

   - React.js
   - Vite
   - CSS3
   - Google Gemini API
   - React Icons

---

# Example prompt:

   You are an agroforestry expert.

   Suggest top 3 agroforestry tree species for:

   State/Region: Rajasthan
   Soil Type: Sandy
   Rainfall: Less than 600mm
   Main Purpose: Timber

   Return recommendations in JSON format.

---

# Gemini analyzes:

   - climatic suitability
   - soil compatibility
   - rainfall adaptability
   - economic utility
   - agroforestry benefits

and returns:

   - tree species name
   - recommendation reason
   - match score
   - additional farming note

---

# Match Score Logic

Gemini generates a suitability score between 0 and 100.

The UI categorizes scores as:

Match Score Category
   - 75+ Excellent Match
   - 50–74 Good Match
   - Below 50 Fair Match

The score is visualized using a progress bar.

---

# Installation Guide

## 1. Clone the Repository
git clone <repository-url>

## 2. Install Dependencies: 
npm install

## 3. Run the project:
npm run dev

---

# Notes

This project currently uses Gemini API directly in the frontend for demonstration purposes.

In production:

   - Gemini API calls should be moved to a backend server
   - API keys should never be exposed publicly
