import React, { useEffect, useState } from "react";
import "./Team.css"
import TeamCard from "../../components/PlayerCard"
import Modal from "../../components/Modal";
import playerPicture from "../../media/Goal.png"
import axios from 'axios';
import { ROOT } from "../../utility.js"

const requesterId = 1;
const Team = () => {

    // mock
    const mockPlayers = [
        { playerName: "John Doe1", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "John Doe1", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe2", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { playerName: "John Doe3", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe4", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { playerName: "John Doe5", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe6", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { playerName: "John Doe7", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe8", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { playerName: "John Doe9", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe10", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { playerName: "John Doe11", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { playerName: "Jane Doe12", playerPhotoUrl: "Goal", playerRole: "Attack" }
    ]
    const [players, setPlayers] = useState(mockPlayers);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    const handleAddPlayer = player => {
        setPlayers([...players, player]); // asta doar pe fe, creca trb scoasa dupa

        // aici facem request sa bagam playerul si-n bd
        axios.post(`${ROOT}/team/invite`, player)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });

    };
    const getTeam = async (requesterId) => {
        try {
            const response = await axios.get(`${ROOT}/team?id=${requesterId}`);
            setPlayers(response.data);
        } catch (error) {
            console.error(error);
            setPlayers(mockPlayers)
        }
    };

    useEffect(() => {
        getTeam(requesterId);
    }, []);

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
                            image={player.playerPhotoUrl}
                            playerRole={player.playerRole}
                        />
                    )
                ))}

            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} onAdd={handleAddPlayer} />
            )}
        </>
    )
};

export default Team;
