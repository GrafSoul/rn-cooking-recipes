import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoryMealsScreen from './CategoryMealsScreen';

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button
                title="Go to Meals!"
                onPress={() => {
                    navigation.navigate('CategoryMeals');
                }}
            />

            {/* <Button
                title="Go to Meals! (Replace)"
                onPress={() => {
                    navigation.replace('CategoryMeals');
                }}
            /> */}
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

export default CategoriesScreen;
