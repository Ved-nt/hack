import React from 'react';
import { Link } from 'react-router-dom';

function Card({ problemStatement, link }) {
    const handleArrowClick = () => {
    // Scroll to the form when the arrow is clicked
        const formElement = document.getElementById('registration-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        return (
            <div className="card">
                <div className="live">LIVE</div>
                <div className="card-content">
                    <h3>{problemStatement}</h3>
                    <p>Join this hackathon to solve real-world problems and win exciting prizes!</p>
                </div>
                <Link to={link} className="arrow" onClick={handleArrowClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    );
}

export default Card;