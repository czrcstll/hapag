import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const FoodCategoryCarousel = () => {
  const categories = [
    { id: '1', title: 'All Dishes' },
    { id: '2', title: 'Most Popular' },
    { id: '3', title: 'Salad' },
    { id: '4', title: 'Pasta' },
    { id: '5', title: 'Meal' },
  ];

  const recipesByCategory = {
    Pizza: [
      { id: '1', title: 'Margherita Pizza' },
      { id: '2', title: 'Pepperoni Pizza' },
      { id: '3', title: 'Vegetarian Pizza' },
    ],
    Burger: [
      { id: '4', title: 'Cheeseburger' },
      { id: '5', title: 'Veggie Burger' },
      { id: '6', title: 'Chicken Burger' },
    ],
    Sushi: [
      { id: '7', title: 'California Roll' },
      { id: '8', title: 'Spicy Tuna Roll' },
      { id: '9', title: 'Salmon Nigiri' },
    ],
    Pasta: [
      { id: '10', title: 'Spaghetti Bolognese' },
      { id: '11', title: 'Penne Alfredo' },
      { id: '12', title: 'Lasagna' },
    ],
    Salad: [
      { id: '13', title: 'Caesar Salad' },
      { id: '14', title: 'Greek Salad' },
      { id: '15', title: 'Caprese Salad' },
    ],
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Carousel
          data={recipesByCategory[item.title]}
          renderItem={renderRecipeItem}
          sliderWidth={300}
          itemWidth={200}
        />
      </View>
    );
  };

  const renderRecipeItem = ({ item }) => {
    return (
      <View style={styles.recipeItem}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={categories}
        renderItem={renderCategoryItem}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeItem: {
    width: 200,
    height: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FoodCategoryCarousel;
