import React, { useState } from "react";

const Modal = ({ onClose, onAdd }) => {
    const [playerName, setPlayerName] = useState("");
    const [image, setImage] = useState("");
    const [playerRole, setPlayerRole] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        onAdd({ playerName, image, playerRole });
        onClose();
    };

    return (
        <div className="modal-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Player name"
                    value={playerName}
                    onChange={event => setPlayerName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={event => setImage(event.target.value)}
                />
                <select
                    value={playerRole}
                    onChange={event => setPlayerRole(event.target.value)}
                >
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Attack">Attack</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Modal;
