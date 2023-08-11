import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import { TeamProps } from './ScoreKeeper';

type DashboardProps = {
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

type ItemProps = {
    item: TeamProps;
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

const Item = ({ item, teams, setTeams }: ItemProps) => {
    const handleChangeSubScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = teams.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent - 1 } : team
        );
        setTeams(updatedTeams);
    }

    const handleChangeAddScore = (name: string, scoreCurrent: number) => {
        const updatedTeams = teams.map((team) =>
            team.name === name ? { ...team, scoreCurrent: scoreCurrent + 1 } : team
        );
        setTeams(updatedTeams);
    }

    return (
        <View key={item.id} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 16
        }}>
            <Text>{item.name}</Text>
            <TouchableHighlight onPress={() => {
                handleChangeSubScore(item.name, item.scoreCurrent);
            }}>
                <View style={[styles.button, { width: 50, height: 50 }]}>
                    <Text>-</Text>
                </View>
            </TouchableHighlight>
            <Text>{item.scoreCurrent}</Text>
            <TouchableHighlight onPress={() => {
                handleChangeAddScore(item.name, item.scoreCurrent);
            }}>
                <View style={[styles.button, { width: 50, height: 50 }]}>
                    <Text>+</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default function Dashboard({ teams, setTeams }: DashboardProps) {
    const findTheWinners = () => {
        let Winners = teams[0];
        for (let index = 1; index < teams.length; index++) {
            if (teams[index].scoreCurrent > Winners.scoreCurrent) {
                Winners = teams[index];
            }
        }
        return Winners;
    }

    const handleFinishMatch = async () => {
        const Winners = findTheWinners();
        const url = "https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/teams/" + Winners.id;
        const updateWinners = { ...Winners, numberOfWins: Winners.numberOfWins + 1 };

        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateWinners),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <View style={{ backgroundColor: '#8062D6', borderRadius: 16, padding: 16, marginBottom: 50 }}>
            <Text style={[styles.title, styles.textColor]}>Dashboard</Text>
            <View>
                {teams.map((item, key) => <Item key={key} item={item} teams={teams} setTeams={setTeams}></Item>)}
            </View>
            <TouchableHighlight style={[styles.button, { margin: 8, width: 100 }]} onPress={() => handleFinishMatch()}>
                <View>
                    <Text>Finish</Text>
                </View>
            </TouchableHighlight>
        </View >
    )
}