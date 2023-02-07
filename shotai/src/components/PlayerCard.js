import React from "react";
import image from "../media/Vector.png"

const TeamCard = ({ playerName, image, playerRole }) => {
    return (
        <div className="team-card">
            <img key={playerName} src={require(`../media/${image}.png`)} alt={playerName} />
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
