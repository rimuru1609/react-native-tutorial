import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ScoreKeeper from './src/components/ScoreKeeper'

export default function App() {
  return (
    <ScrollView>
      <ScoreKeeper></ScoreKeeper>
    </ScrollView>
  )
}