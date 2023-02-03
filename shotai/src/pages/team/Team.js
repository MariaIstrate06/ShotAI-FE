import React, { useState } from "react";
import "./Team.css"
import TeamCard from "../../components/PlayerCard"
import Modal from "../../components/Modal";
import playerPicture from "../../media/Goal.png"

const Team = () => {
    const [players, setPlayers] = useState([
        { playerName: "John Doe1", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "John Doe1", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe2", image: playerPicture, playerRole: "Attack" },
        { playerName: "John Doe3", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe4", image: playerPicture, playerRole: "Attack" },
        { playerName: "John Doe5", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe6", image: playerPicture, playerRole: "Attack" },
        { playerName: "John Doe7", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe8", image: playerPicture, playerRole: "Attack" },
        { playerName: "John Doe9", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe10", image: playerPicture, playerRole: "Attack" },
        { playerName: "John Doe11", image: playerPicture, playerRole: "Goalkeeper" },
        { playerName: "Jane Doe12", image: playerPicture, playerRole: "Attack" }
    ]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };


    const handleAddPlayer = player => {
        setPlayers([...players, player]);
    };

    return (
        <>
            <div className="team-container">
                {players.map((player, index) => (
                    index === 0 ? (
                        <button className="add-player-button" onClick={openModal}>
                            Add Player
                        </button>
                    ) : (
                        <TeamCard
                            key={index}
                            playerName={player.playerName}
                            image={player.image}
                            playerRole={player.playerRole}
                        />
                    )
                ))}

            </div>
            <button className="add-player-button" onClick={() => setShowModal(true)}>
                Add Player
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} onAdd={handleAddPlayer} />
            )}
        </>
    );
};

export default Team;
