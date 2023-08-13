import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import { MatchProps, TeamProps } from './ScoreKeeper';

type DisplayProps = {
    matchCurrent: MatchProps;
    teams: TeamProps[];
}

const Item = ({ name, avatar, scoreCurrent, id }: TeamProps) => {
    return (
        <View key={id} style={styles.box}>
            <View style={[styles.box, styles.boxName]}>
                <Text style={{ color: '#000', fontSize: 18 }}>{name}</Text>
            </View>
            <Image source={{ uri: avatar }} style={{ width: 50, height: 50 }}></Image>
            <View style={[styles.box, styles.boxScore]}>
                <Text style={{ color: '#000', fontSize: 32 }}>{scoreCurrent}</Text>
            </View>
        </View>
    );
}

export default function Display({ matchCurrent, teams }: DisplayProps) {
    return (
        <View style={{ backgroundColor: '#8062D6', borderRadius: 16, padding: 16, marginTop: 80, marginBottom: 40 }}>
            <Text style={[styles.title, styles.textColor]}>Match current: {matchCurrent?.name}</Text>
            <View style={styles.boxTeams}>
                {teams.map((item, key) => <Item {...item} key={key}></Item>)}
            </View>
        </View>
    )
}