import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css'
import axios from 'axios';
import { ROOT } from "../../utility.js"


export default function Player() {
    let playerId = useParams();
    const playerMock = {
        name: "Leo Ronaldo",
        position: "CM",
        picture: "Goal",
        stats: {
            id: 0,
            totalMinutes: 0,
            totalGames: 0,
            totalGoals: 0,
            totalAssists: 0,
            totalYellowCards: 0,
            totalRedCards: 0,
            minutesData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            },
            gamesData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            },
            goalsData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            },
            assistsData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            },
            yellowCardsData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            },
            redCardsData: {
                additionalProp1: 0,
                additionalProp2: 0,
                additionalProp3: 0
            }
        }
    }

    console.log(playerId)
    console.log(playerMock.picture)
    const [player, setPlayer] = useState(playerMock);

    const getPlayer = async (playerId) => {
        try {
            const response = await axios.get(`${ROOT}/team/${playerId}}`);
            setPlayer(response.data);
        } catch (error) {
            console.error(error);
            setPlayer(playerMock) // COMMENT THIS LINE WHEN API WORKS
        }
    };

    useEffect(() => {
        getPlayer(playerId);
    },);

    return (
        <>
            <div className="img-player">
                <img src={require(`../../media/${player.picture}.png`)} alt={player.name} />
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