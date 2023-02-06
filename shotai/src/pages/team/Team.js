import React, { useEffect, useState } from "react";
import "./Team.css"
import TeamCard from "../../components/PlayerCard"
import Modal from "../../components/Modal";
import playerPicture from "../../media/Goal.png"
import axios from 'axios';

const requesterId = 1;

const TeamTable = ({ teamData }) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Players</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{teamData.id}</td>
                <td>{teamData.name}</td>
                <td>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Jersey Number</th>
                                <th>Position</th>
                                <th>Picture</th>
                                <th>Team ID</th>
                                <th>Team Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamData.players.map(player => (
                                <tr key={player.id}>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                    <td>{player.jerseyNumber}</td>
                                    <td>{player.position}</td>
                                    <td>{player.picture}</td>
                                    <td>{player.teamId}</td>
                                    <td>{player.teamName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
);

const getTeam = async (requesterId) => {
    try {
        const response = await axios.get(`localhost:8080/api/team?id=${requesterId}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const Team = () => {




    // const [players, setPlayers] = useState([
    //     { playerName: "John Doe1", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "John Doe1", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe2", image: playerPicture, playerRole: "Attack" },
    //     { playerName: "John Doe3", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe4", image: playerPicture, playerRole: "Attack" },
    //     { playerName: "John Doe5", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe6", image: playerPicture, playerRole: "Attack" },
    //     { playerName: "John Doe7", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe8", image: playerPicture, playerRole: "Attack" },
    //     { playerName: "John Doe9", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe10", image: playerPicture, playerRole: "Attack" },
    //     { playerName: "John Doe11", image: playerPicture, playerRole: "Goalkeeper" },
    //     { playerName: "Jane Doe12", image: playerPicture, playerRole: "Attack" }
    // ]);
    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //     setShowModal(true);
    // };


    // const handleAddPlayer = player => {
    //     setPlayers([...players, player]);
    // };

    // return (
    //     <>
    //         <div className="team-container">
    //             {players.map((player, index) => (
    //                 index === 0 ? (
    //                     <button className="add-player-button" onClick={openModal}>
    //                         Add Player
    //                     </button>
    //                 ) : (
    //                     <TeamCard
    //                         key={index}
    //                         playerName={player.playerName}
    //                         image={player.image}
    //                         playerRole={player.playerRole}
    //                     />
    //                 )
    //             ))}

    //         </div>
    //         <button className="add-player-button" onClick={() => setShowModal(true)}>
    //             Add Player
    //         </button>
    //         {showModal && (
    //             <Modal onClose={() => setShowModal(false)} onAdd={handleAddPlayer} />
    //         )}
    //     </>
    const [teamData, setTeamData] = useState({});

    const getTeam = async (requesterId) => {
        try {
            const response = await axios.get(`localhost:8080/api/team?id=${requesterId}`);
            setTeamData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTeam(requesterId);
    }, []);

    return (
        <div>
            <TeamTable teamData={teamData} />
        </div>
    );
};

export default Team;
