import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle }])
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        addGoal={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => ( <GoalItem title={itemData.item.value}/> )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})