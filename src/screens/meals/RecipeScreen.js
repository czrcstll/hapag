import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const RecipeScreen = () => {

  const navigation = useNavigation();

  const onPressDone = () => {
    // navigation.goBack();
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }}>

        <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 16/9, width: '100%' }}/>

        <View style={{ padding: 25 }}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 2, fontSize: 24, fontWeight: 'bold', color: '#32324D' }}>Hearty Dumpling</Text>
            <Text style={{ flex: 1, fontSize: 24, fontWeight: 'bold', textAlign: 'right', color: '#44AF69' }}>502 kcal</Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ color: '#8E8EA9' }}>Savory dish made with a tender and chewy dumpling wrapper, filled with a flavorful mixture of banana blossoms, vegetables, and herbs. The filling is usually rich and hearty, with a blend of umami flavors that make it incredibly satisfying to eat.</Text>
          </View>

          <View style={[{ marginTop: 15, flexDirection: 'row' }, styles.roundedWhite, styles.shadow]}>
            <View style={{ flex: 1 }}>
              <Text style={[{ textAlign: 'center' }, styles.boldText]}>502g</Text>
              <Text style={{ textAlign: 'center', color: '#8E8EA9' }}>calories</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[{ textAlign: 'center' }, styles.boldText]}>6.6g</Text>
              <Text style={{ textAlign: 'center', color: '#8E8EA9' }}>carbs</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[{ textAlign: 'center' }, styles.boldText]}>24.8g</Text>
              <Text style={{ textAlign: 'center', color: '#8E8EA9' }}>protein</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[{ textAlign: 'center' }, styles.boldText]}>41.7g</Text>
              <Text style={{ textAlign: 'center', color: '#8E8EA9' }}>fat</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#F6A43E', fontWeight: 'bold' }}>Yield: </Text>
              <Text style={{ color: '#F6A43E', marginEnd: 15 }}>20 servings</Text>
              <Text style={{ color: '#F6A43E', fontWeight: 'bold' }}>Serving Size: </Text>
              <Text style={{ color: '#F6A43E' }}>4 pcs/serving</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, backgroundColor: 'white', borderRadius: 15 }}>
            <View style={{ padding: 18, backgroundColor: '#F6A43E', borderRadius: 15 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Ingredients</Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
              <Text style={{ color: '#666687', fontWeight: 'bold' }}>Dumplings</Text>
              <Text style={{ color: '#666687', marginTop: 10 }}>
                ¼ cup - Cooking oil, for sauteeing{'\n'}
                ¼ cup - Garlic, bulb, chopped{'\n'}
                ¼ cup - Onion, Bombay, chopped{'\n'}
                1 ¼ cups - Pork, kasim, ground{'\n'}
                1 tsp - Iodized salt{'\n'}
                ½ tsp - Black pepper, ground{'\n'}
                10 cups - Puso ng saging, sliced thinly{'\n'}
                1 ¼ cups - Carrot, chopped{'\n'}
                1 ¼ cups - Singkamas, chopped{'\n'}
                ½ cup - Green onion, sliced thinly{'\n'}
                ½ cup - All-Purpose Flour, sifted{'\n'}
                3 pieces - Chicken egg, beaten{'\n'}
                1 ¼ cups - Breadcrumbs{'\n'}
                83 pieces - Molo wrapper, round, big{'\n'}
                4 cups - Cooking oil, for frying
              </Text>
              <Text style={{ color: '#666687', fontWeight: 'bold', marginVertical: 10 }}>Vinegar Dip</Text>
              <Text style={{ color: '#666687' }}>
                1 ¼ cups - Vinegar, white{'\n'}
                1 tbsp - Garlic, bulb, crushed{'\n'}
                ½ tsp - Black pepper, ground{'\n'}
                2 ½ tsps - Iodized Salt
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 15, backgroundColor: 'white', borderRadius: 15 }}>
            <View style={{ padding: 18, backgroundColor: '#F6A43E', borderRadius: 15 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Recipe</Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
              <Text style={{ color: '#666687', marginVertical: 10 }}>
              1. In a pan, heat oil. Saute garlic, onion, and pork.{'\n'}
              2. Season with salt and pepper.{'\n'}
              3. Add puso ng saging. Cover and cook for 15 to 20 minutes.{'\n'}
              4. Add carrot, singkamas, and onion. Blend well. Cook for 10 minutes.{'\n'}
              5. Remove from heat and allow to cool.{'\n'}
              6. Add flour, egg, and breadcrumbs into the mixture. Mix well.{'\n'}
              7. Place 1 tablespoon of the mixture on the wrapper. For the wrapper into a star. Do the same with the rest of the mixture.{'\n'}
              8. Deep fry in hot oil until golden brown.
              </Text>
            </View>
          </View>

          <Text style={{ textAlign: 'center', color: '#8E8EA9', fontWeight: 'bold', fontSize: 20, margin: 15 }} onPress={goBack}>Back</Text>
          <View style={{ alignItems: 'center' }}>
            <CustomButton text="Done Eating" onPress={onPressDone} />
          </View>

          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
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
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footer: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    borderRadius: 30,
    backgroundColor: 'white'
  }
});

export default RecipeScreen;
