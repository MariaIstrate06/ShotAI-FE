import React, { useState } from "react";
import { PLAYER_POSITIONS } from "utility";

const Modal = ({ onClose, onAdd }) => {
    const [playerName, setPlayerName] = useState("");
    const [playerEmail, setPlayerEmail] = useState("");
    const [playerNumber, setPlayerNumber] = useState("");
    const [playerPhotoUrl, setPlayerPhotoUrl] = useState("");
    const [playerRole, setPlayerRole] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        onAdd({ playerName, playerEmail, playerNumber, playerPhotoUrl, playerRole });
        onClose();
    };

    return (
        <div className="modal-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Player's name"
                    value={playerName}
                    onChange={event => setPlayerName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Number"
                    value={playerNumber}
                    onChange={event => setPlayerNumber(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Email"
                    value={playerEmail}
                    onChange={event => setPlayerEmail(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Photo Url"
                    value={playerPhotoUrl}
                    onChange={event => setPlayerPhotoUrl(event.target.value)}
                />
                <select
                    value={playerRole}
                    onChange={event => setPlayerRole(event.target.value)}
                >
                    {PLAYER_POSITIONS.map(role => (
                        <option key={role.value} value={role.value}>
                            {role.label}
                        </option>
                    ))}
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Modal;
