import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('MealDetail');
                }}
            />

            <Button
                title="Go Back"
                onPress={() => {
                    navigation.pop();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealsScreen;
