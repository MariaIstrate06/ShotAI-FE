import React from "react";
import { Link } from "react-router-dom";
import "./PlayerCard.css"
const TeamCard = ({ id, playerName, image, playerRole, onDelete }) => {
    return (
        <div className="team-card">
            <Link to="/player/1">
                <img key={playerName} src={require(`../media/${image}.png`)} alt={playerName} />
            </Link>
            <div className="text-fields">
                <div className="player-name">
                    {playerName}
                </div>
                <div className="player-role">
                    {playerRole}
                </div>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default TeamCard;
