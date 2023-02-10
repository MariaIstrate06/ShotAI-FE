import React, { useEffect, useState } from "react";
import "./Team.css";
import TeamCard from "../../components/PlayerCard";
import Modal from "../../components/Modal";
import axios from "axios";
import { ROOT, mockPlayer, mockPlayers } from "../../utility.js";



const Team = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const requesterId = user.id;
  let userRole = 1;
  const [players, setPlayers] = useState(mockPlayers.players);
  const [showModal, setShowModal] = useState(false);
  if (user.roles.includes("ROLE_COACH")) {
    userRole = 1 // 1 DACA E COACH 2 DACA E PLAYER
  }
  else {
    userRole = 2;
  }
  const openModal = () => {
    setShowModal(true);
  };


  // ADD PLAYER: POST: api/team/invite
  const handleAddPlayer = (player) => {
    axios
      .post(`${ROOT}/team/invite`, player, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("player: ", player)
        console.error(error);
      });
  };

  // GET TEAM: GET: api/team
  const getTeam = async (requesterId) => {
    try {
      const response = await axios.get(`${ROOT}/team?id=${requesterId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log("rasp: ", response.data.players)
      setPlayers(response.data.players);
      if (userRole === 1) {
        setPlayers([mockPlayer, ...response.data.players]);
      }
    } catch (error) {
      console.error(error);
      setPlayers([mockPlayer, ...players]); // AICI BAGA UN IF DACA E COACH, DACA NU LASA ASA
    }
  };

  useEffect(() => {
    getTeam(requesterId);
  }, []);

  // DELETE PLAYER: DELETE: api/team/playerId
  const deletePlayer = (id) => {
    axios
      .delete(`${ROOT}/team/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <div className="team-container">
        {players.map((player, index) =>
          index === 0 && userRole === 1 ? ( // de adaugat: index === 0 && user.role === "COACH"
            <div className="card-container">
              <button className="add-player-plus" onClick={openModal}>
                <div className="plus"> + </div>
              </button>
              <div className="add-player-button" onClick={openModal}>
                Add Player
              </div>
            </div>
          ) : (
            <div className="card-container">
              <TeamCard
                key={index}
                id={player.id}
                playerName={player.name}
                playerNumber={player.jerseyNumber}
                image={"Goal"}
                playerRole={player.position}
                onDelete={deletePlayer}
              />
            </div>
          )
        )}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} onAdd={handleAddPlayer} />
      )}
    </>
  );
};

export default Team;
