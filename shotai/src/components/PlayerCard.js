import React from "react";
import { Link } from "react-router-dom";
import "./PlayerCard.css"
const TeamCard = ({ id, playerName, playerNumber, image, playerRole, onDelete }) => {
    const userRole = JSON.parse(localStorage.getItem("user")).roles.includes("ROLE_COACH") ? 1 : 2
    return (
        <div className="team-card">
            <Link to={`/player/${id}`}>
                <div className="img-cont" style={{ borderRadius: "10em" }} >
                    <img key={playerName} src={require(`../media/${image}.jpg`)} alt={playerName} />
                </div>

            </Link>
            <div className="jersey-number">
                {playerNumber}
            </div>
            {/* <div className="delete" style={{ display: userRole === 1 ? "block" : "none", cursor: "pointer" }}> */}
            <button className="delete-player" onClick={() => onDelete(id)}>
                <div className="minus"></div>
            </button>
            {/* </div> */}

            <div className="text-fields">
                <div className="player-name">
                    {playerName}
                </div>
                <div className="player-role">
                    {playerRole}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
