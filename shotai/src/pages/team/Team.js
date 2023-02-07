import React, { useEffect, useState } from "react";
import "./Team.css"
import TeamCard from "../../components/PlayerCard"
import Modal from "../../components/Modal";
import axios from 'axios';
import { ROOT } from "../../utility.js"


const requesterId = 1;
const Team = () => {

    // mock
    const mockPlayers = [
        { id: 1, playerName: "John Doe1", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 2, playerName: "John Doe1", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 3, playerName: "Jane Doe2", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { id: 4, playerName: "John Doe3", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 5, playerName: "Jane Doe4", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { id: 6, playerName: "John Doe5", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 7, playerName: "Jane Doe6", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { id: 8, playerName: "John Doe7", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 9, playerName: "Jane Doe8", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { id: 10, playerName: "John Doe9", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 11, playerName: "Jane Doe10", playerPhotoUrl: "Goal", playerRole: "Attack" },
        { id: 12, playerName: "John Doe11", playerPhotoUrl: "Goal", playerRole: "Goalkeeper" },
        { id: 13, playerName: "Jane Doe12", playerPhotoUrl: "Goal", playerRole: "Attack" }

    ]
    const [players, setPlayers] = useState(mockPlayers);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    // ADD PLAYER: POST: api/team/invite
    const handleAddPlayer = player => {
        setPlayers([...players, player]); // asta doar pe fe, delete this line after api works

        // aici facem request sa bagam playerul si-n bd
        axios.post(`${ROOT}/team/invite`, player)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });

    };

    // GET TEAM: GET: api/team
    const getTeam = async (requesterId) => {
        try {
            const response = await axios.get(`${ROOT}/team?id=${requesterId}`);
            setPlayers(response.data);
        } catch (error) {
            console.error(error);
            setPlayers(mockPlayers) // COMMENT THIS LINE WHEN API WORKS
        }
    };

    useEffect(() => {
        getTeam(requesterId);
    },);

    // DELETE PLAYER: DELETE: api/team/playerId
    const deletePlayer = (id) => {
        //doar pt front teoretic - delete this line when api works
        setPlayers(players.filter((player) => player.id !== id));
        //pt back: 
        axios.delete(`api/team/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
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
                            id={player.id}
                            playerName={player.playerName}
                            image={player.playerPhotoUrl}
                            playerRole={player.playerRole}
                            onDelete={deletePlayer}
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
