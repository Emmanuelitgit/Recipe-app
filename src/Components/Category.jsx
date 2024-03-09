import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { SIZES } from './Constants/Theme';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Card from './Card';
import { navBtns } from '../utils/Data';

const Category = () => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleButtonPress = (index) => {
        setSelectedButtonIndex(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.input}>
                    <Feather name={'search'}
                        size={20} color={'orange'}
                        style={styles.iconUser} />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Search..."
                    />
                </View>
            </View>
            <View style={styles.categoryHeader}>
                <Text style={styles.headerText}>Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.navBtns}>
                        {navBtns.map((item, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.button,
                                    selectedButtonIndex === index ? styles.selectedButton : null
                                ]}
                                onPress={() => handleButtonPress(index)}
                            >
                                <Text
                                  style={
                                      selectedButtonIndex === index ? styles.selectedButtonText : null
                                   } 
                                >
                                    {item.name}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <Card />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZES.height * 0.05
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputField: {
        width: SIZES.width * 0.64,
        padding: SIZES.height * 0.0007,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width * 0.8,
        padding: SIZES.height * 0.014,
        borderRadius: 10,
        margin: 7,
        backgroundColor: 'white',
        color: 'black',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    iconUser: {
        margin: 5
    },
    button: {
        width: SIZES.width * 0.32,
        height: SIZES.height * 0.08,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
    },
    selectedButton: {
        backgroundColor: "orange",
    },
    selectedButtonText: {
        textAlign: "center",
        color: "white",
    },
    categoryHeader: {
        display: 'flex',
        paddingLeft: SIZES.width * 0.09,
        paddingTop: SIZES.height * 0.03
    },
    navBtns: {
        display: "flex",
        flexDirection: "row",
        gap: SIZES.width * 0.04,
        height:SIZES.height*0.1,
    },
    headerText: {
        paddingBottom: SIZES.height * 0.02
    }
})

export default Category;
