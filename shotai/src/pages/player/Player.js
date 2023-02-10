import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css'
import axios from 'axios';
import { ROOT, playerMock } from "../../utility.js"


export default function Player() {
    let playerId = useParams().playerId;
    const token = JSON.parse(localStorage.getItem("user")).token

    const [player, setPlayer] = useState(playerMock);

    const getPlayer = async (playerId, token) => {
        try {
            const response = await axios.get(`${ROOT}/team/${playerId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setPlayer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPlayer(playerId, token);
    }, [playerId, token]);

    return (
        <>
            <div className="img-player">
                <img src={require(`../../media/${player.picture}.jpg`)} alt={player.name} />
            </div>
            <h2>{player.name}</h2>
            <div className="minutes">Minutes played this season: {player.stats.totalMinutes}</div>
            <div className="games">Games played: {player.stats.totalGames}</div>
            <div className="assists">Assists: {player.stats.totalAssists}</div>
            <div className="goals">Goals: {player.stats.totalGoals}</div>
            <div className="ycard">Yellow Cards: {player.stats.totalYellowCards}</div>
            <div className="rcard">Red Cards: {player.stats.totalRedCards}</div>
        </>
    )
}