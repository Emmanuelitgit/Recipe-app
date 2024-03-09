import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native'
import { SIZES } from '../Components/Constants/Theme'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.itemsContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/welcome1.png')} style={styles.image} />
                <Text style={styles.imageItemText}>10k+ Premium Recipes</Text>
            </View>
            <View style={styles.bodyTetxContainer}>
            <Text style={styles.bodyText}>10k+ Premium Recipes</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}
                 onPress={() => navigation.navigate('RecipeList')}
                >
                    <Text style={styles.buttonText}>Lets Go</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    itemsContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    imageContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:SIZES.height*0.05
    },
    image:{
        width:SIZES.width*0.5,
        height:SIZES.height*0.3
    },
    imageItemText:{
        color:"orange",
        fontSize:20,
        fontWeight:"bold"
    },
    bodyTetxContainer:{
        paddingTop:SIZES.height*0.1
    },
    bodyText:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: SIZES.width*0.1,
    },
    buttonContainer:{
        paddingTop:SIZES.height*0.08
    },
    button:{
        backgroundColor:"orange",
        width:SIZES.width*0.5,
        height:SIZES.height*0.1,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
    },
    buttonText:{
        textAlign:"center",
        color:"white",
        fontSize:SIZES.height*0.035
    }
})

export default Welcome