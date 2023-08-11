import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

import styles from '../assets/styles'

export default function Match({ setMatchCurrent }: any) {
    const [name, setName] = useState<string>();
    const [numberOfTeams, setNumberOfTeams] = useState<number>();

    const createMatch = async () => {
        return fetch("https://64d389ff67b2662bf3dc63e4.mockapi.io/keeper/matchs", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                numberOfTeams: numberOfTeams
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                setMatchCurrent(responseData);
            })
    }

    return (
        <View style={[styles.form, { marginTop: 240, marginBottom: 300 }]}>
            <Text style={[styles.title, styles.textColor]}>Start a new match!</Text>
            <TextInput style={[styles.input, styles.textColor]} placeholder='Match name' onChangeText={(val) => setName(val)} />
            <TextInput style={[styles.input, styles.textColor]} placeholder='Number of participating teams' keyboardType='numeric' onChangeText={(val) => setNumberOfTeams(parseInt(val))} />
            <TouchableHighlight onPress={() => {
                createMatch();
            }}>
                <View style={styles.button}>
                    <Text style={[styles.textColor]}>Start</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}