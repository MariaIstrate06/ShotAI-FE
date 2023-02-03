import React from "react";

const TeamCard = ({ playerName, image, playerRole }) => {
    return (
        <div className="team-card">
            <img src={image} alt={playerName} />
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
