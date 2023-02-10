import React, { useState } from "react";
import { PLAYER_POSITIONS } from "utility";

const Modal = ({ onClose, onAdd }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jerseyNumber, setJerseyNumber] = useState("");
    const [position, setPosition] = useState("");
    const [playerPicture, setPlayerPicture] = useState("");
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const handleSubmit = event => {
        event.preventDefault();
        onAdd({ name, email, jerseyNumber, position, playerPicture, userId });
        onClose();
    };

    return (
        <div className="modal-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Player's name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Number"
                    value={jerseyNumber}
                    onChange={event => setJerseyNumber(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player's Photo Url"
                    value={playerPicture}
                    onChange={event => setPlayerPicture(event.target.value)}
                />
                <select
                    value={position}
                    onChange={event => setPosition(event.target.value)}
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
