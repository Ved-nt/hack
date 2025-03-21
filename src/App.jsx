import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove `Link` from imports
import './index.css';
import Card from './components/Card';
import HackathonRegistration from './components/HackathonRegistration';

function App() {
  // List of problem statements for live hackathons with unique links
  const problemStatements = [
    {
      problemStatement: "Build a decentralized voting system using blockchain.",
      link: "/hackathon1",
    },
    {
      problemStatement: "Develop an AI-powered mental health chatbot.",
      link: "/hackathon2",
    },
    {
      problemStatement: "Create a sustainable energy monitoring app.",
      link: "/hackathon3",
    },
    {
      problemStatement: "AI-Based Team Matchmaker",
      link: "/hackathon4",
    },
    {
      problemStatement: "Code Review Assistant",
      link: "/hackathon5",
    },
    {
      problemStatement: "Zero Code AI Game Designer",
      link: "/hackathon6",
    },
    {
      problemStatement: "Design a solution for reducing food waste.",
      link: "/hackathon7",
    },
    {
      problemStatement: "Build a platform for remote team collaboration.",
      link: "/hackathon8",
    },
    {
      problemStatement: "Develop a tool for detecting fake news using AI.",
      link: "/hackathon9",
    },
    {
      problemStatement: "Reverse Hackathon",
      link: "/hackathon10",
    },
    {
      problemStatement: "Dream-to-Prototype AI",
      link: "/hackathon11",
    },
    {
      problemStatement: "Pitch Deck Generator",
      link: "/hackathon12",
    },
    {
      problemStatement: "AI Startup Idea Validator",
      link: "/hackathon13",
    },
  ];

  // State to hold the cards
  const [cards, setCards] = useState(problemStatements.slice(0, 3)); // Initially show 3 cards

  // Function to load more cards
  const loadMoreCards = () => {
    const currentCount = cards.length;
    const nextCards = problemStatements.slice(currentCount, currentCount + 3); // Load 3 more cards
    setCards((prevCards) => [...prevCards, ...nextCards]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hackathon</h1>
        </header>

        {/* Card Container */}
        <div className="card-container">
          {cards.map((hackathon, index) => (
            <Card
              key={index}
              problemStatement={hackathon.problemStatement}
              link={hackathon.link} // Pass the unique link to each card
            />
          ))}
        </div>

        {/* Load More Button */}
        {cards.length < problemStatements.length && (
          <button className="load-more-button" onClick={loadMoreCards}>
            Load More Hackathons
          </button>
        )}

        {/* Routes for Hackathon Registration Pages */}
        <Routes>
          {problemStatements.map((hackathon, index) => (
            <Route
              key={index}
              path={hackathon.link}
              element={<HackathonRegistration hackathonName={hackathon.problemStatement} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;