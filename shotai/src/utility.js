export const ROOT = "http://localhost:8080/api"

export const PLAYER_POSITIONS = [
    { value: 'GK', label: 'Goalkeeper' },
    { value: 'CB', label: 'Center Back' },
    { value: 'RB', label: 'Right Back' },
    { value: 'LB', label: 'Left Back' },
    { value: 'RWB', label: 'Right Wing Back' },
    { value: 'LWB', label: 'Left Wing Back' },
    { value: 'CDM', label: 'Center Defensive Midfielder' },
    { value: 'CM', label: 'Center Midfielder' },
    { value: 'CAM', label: 'Center Attacking Midfielder' },
    { value: 'RW', label: 'Right Wing' },
    { value: 'LW', label: 'Left Wing' },
    { value: 'CF', label: 'Center Forward' },
    { value: 'S', label: 'Striker' },
]

export const mockPlayers = {
    id: 1,
    name: "F.C. Test",
    players: [
        {
            id: 1,
            name: "Alfa",
            jerseyNumber: 7,
            position: "RW",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 2,
            name: "Bravo",
            jerseyNumber: 8,
            position: "CDM",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 3,
            name: "Charlie",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 4,
            name: "Delta",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 5,
            name: "Elephant",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 6,
            name: "Fanta",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 7,
            name: "Gica",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
        {
            id: 8,
            name: "Hagi",
            jerseyNumber: 1,
            position: "GK",
            picture: "Goal",
            teamId: 1,
            teamName: "F.C. Test",
        },
    ],
};
export const mockPlayer = {
    id: 0,
    name: "",
    jerseyNumber: 0,
    position: "",
    picture: "Goal",
    teamId: 0,
    teamName: "",
};

export const playerMock = {
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
        minutesData: [],
        gamesData: [],
        goalsData: {
            "2023-02-04T16:44:21.505627Z": 20,
            "2023-02-04T16:48:48.895709Z": 20,
            "2023-02-04T16:50:21.013693Z": 20
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