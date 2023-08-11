import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import styles from '../assets/styles';
import { MatchProps, TeamProps } from './ScoreKeeper';

type RegistrationFormProps = {
    order: number;
    matchCurrent: MatchProps;
    teams: TeamProps[];
    setTeams: (newTeams: TeamProps[]) => void;
}

const RegistrationForm = ({ order, matchCurrent, teams, setTeams }: RegistrationFormProps,) => {
    const [name, setName] = useState<string>();
    const [avatar, setAvatar] = useState<string>();
    const [countTeam, setCountTeam] = useState(0);

    const createTeam = async () => {
        return fetch("https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/teams", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                avatar: avatar,
                matchCurrent: matchCurrent,
                scoreCurrent: 0,
                numberOfWins: 0,
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                setTeams([...teams, responseData]);
            })
    }

    return (
        <View style={{ borderWidth: 1, margin: 16, padding: 8, borderRadius: 8 }}>
            <Text style={{ textAlign: 'center' }}>Information of team {order + 1}</Text>
            <TextInput placeholder='Name of the team' onChangeText={(val) => setName(val)}></TextInput>
            <TextInput placeholder='Url avatar of the team' onChangeText={(val) => setAvatar(val)}></TextInput>
            <TouchableHighlight onPress={() => {
                if (countTeam + 1 == matchCurrent?.numberOfTeams) return console.log('Full!');
                createTeam();
                setCountTeam((prevState) => prevState + 1);
            }}>
                <View style={styles.button}>
                    <Text>Add Team {order + 1}</Text>
                </View>
            </TouchableHighlight>
        </View >
    );
}

export default function TeamRegistration({ matchCurrent, teams, setTeams }: any) {

    const items = [];
    for (let i = 0; i < matchCurrent?.numberOfTeams; i++) {
        items.push(<RegistrationForm order={i} matchCurrent={matchCurrent} teams={teams} setTeams={setTeams}></RegistrationForm>);
    }

    return (
        <View style={[styles.form, { marginTop: 120, marginBottom: 300 }]}>
            <Text style={styles.title}>Register participating teams!</Text>
            {items.map((item) => item)}
        </View>
    )
}