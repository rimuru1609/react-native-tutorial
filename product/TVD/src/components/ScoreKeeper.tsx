import { View } from 'react-native'
import React, { useState } from 'react'
import Match from './Match'
import TeamRegistration from './TeamRegistration'
import Display from './Display'
import Dashboard from './Dashboard'
import SearchTeam from './SearchTeam'
import styles from '../assets/styles'
import Header from './Header'

export type MatchProps = {
    name: string;
    numberOfTeams: number;
}

export type TeamProps = {
    id: number;
    name: string;
    avatar: string;
    matchCurrent: MatchProps;
    scoreCurrent: number;
    numberOfWins: number;
}

export default function ScoreKeeper() {
    const [matchCurrent, setMatchCurrent] = useState<MatchProps>({ name: "", numberOfTeams: 0 });
    const [teams, setTeams] = useState<TeamProps[]>([]);

    return (
        <View style={styles.container}>
            <Header></Header>
            <Match setMatchCurrent={setMatchCurrent} />
            <TeamRegistration setTeams={setTeams} teams={teams} matchCurrent={matchCurrent} />
            <View>
                <Display teams={teams} matchCurrent={matchCurrent} />
                <Dashboard teams={teams} setTeams={setTeams} />
            </View>
            <SearchTeam></SearchTeam>
        </View>
    )
}