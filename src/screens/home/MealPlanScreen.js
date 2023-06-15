import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Bar } from 'react-native-progress';

const MealPlanScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <View style={{ padding: 25 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Ionicons name="ios-menu" size={30} color="black" />
              </View>
              <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'center', padding: 10 }}>
                <Text>April 15, 2023</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.roundedWhite}>
                  <AntDesign name="calendar" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ margin: 15 }}>
              <Text style={{ textAlign: 'center' }}>Friday</Text>
              <Text style={{ textAlign: 'center', color: 'green', fontSize: 30, fontWeight: 'bold' }}>1500</Text>
              <Text style={{ textAlign: 'center', color: 'green' }}>Calories</Text>
            </View>

            <Bar progress={0.3} width={null} height={10} color='green' unfilledColor='#bbb' borderWidth={0} />

            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={[{ textAlign: 'center' }, styles.boldText]}>taken</Text>
                <Text style={{ textAlign: 'center' }}>470 kcal</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[{ textAlign: 'center' }, styles.boldText]}>taken</Text>
                <Text style={{ textAlign: 'center' }}>1030 kcal</Text>
              </View>
            </View>

            <View style={[{ marginTop: 15, flexDirection: 'row' }, styles.roundedWhite, styles.shadow ]}>
              <View style={{ flex: 1 }}>
                <Text style={[{ textAlign: 'center' }, styles.boldText]}>245g</Text>
                <Text style={{ textAlign: 'center' }}>carbs</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[{ textAlign: 'center' }, styles.boldText]}>55g</Text>
                <Text style={{ textAlign: 'center' }}>protein</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[{ textAlign: 'center' }, styles.boldText]}>35g</Text>
                <Text style={{ textAlign: 'center' }}>fat</Text>
              </View>
            </View>
          </View>

          <View style={styles.mealPlanSection}>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Meal Plan</Text>

            <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
              <View style={{ flex: 5 }}>
                <Text style={[{}, styles.boldText]}>Breakfast</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>470</Text>
                <Text>calories</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#ccc' }]}>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
              <View style={{ flex: 5 }}>
                <Text style={[{}, styles.boldText]}>AM Snack</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>180</Text>
                <Text>calories</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#ccc' }]}>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
              <View style={{ flex: 5 }}>
                <Text style={[{}, styles.boldText]}>Lunch</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>410</Text>
                <Text>calories</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#ccc' }]}>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
              <View style={{ flex: 5 }}>
                <Text style={[{}, styles.boldText]}>PM Snack</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>140</Text>
                <Text>calories</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#ccc' }]}>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
              <View style={{ flex: 5 }}>
                <Text style={[{}, styles.boldText]}>Dinner</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>400</Text>
                <Text>calories</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#ccc' }]}>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#50269D'
  },
  roundedWhite: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  mealPlanSection: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
});

export default MealPlanScreen;
