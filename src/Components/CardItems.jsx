import React from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native'
import { SIZES } from './Constants/Theme'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import Card from './Card';


const CardItems = ({name, navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.cardContainer}>
            <Pressable style={styles.card}
              onPress={() => navigation.navigate('SingleRecipe')}
             >
                <View style={styles.cardImageContainer}>
                <Image source={require('../../assets/images/welcome1.png')} style={styles.image} />
                </View>
                <View style={styles.cardInfo}
                  onPress={() => navigation.navigate('SingleRecipe')}
                >
                    <Text>{name}</Text>
                    <Text>40 mins</Text>
                    <View style={styles.icons}>
                    <FontAwesome style={styles.star} name="star" size={20} color="orange" />
                    <FontAwesome style={styles.star} name="star" size={20} color="orange" />
                    <FontAwesome style={styles.star} name="star" size={20} color="orange" />
                    </View>
                </View>
            </Pressable>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        flexDirection:"row",
        gap:SIZES.width*0.06,
        paddingTop:SIZES.height*0.05
    },
    card:{
    height: SIZES.height * 0.3,
    width:SIZES.width*0.4,  
    margin: SIZES.width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
  },  
    cardImageContainer: {
        alignItems: 'center',
      },
      image: {
        width: SIZES.width * 0.25,
        height: SIZES.height * 0.15,
      },
      ratingIcon:{
        color:"orange"
      },
      cardInfo:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:SIZES.height*0.009
      },
      icons:{
        flexDirection:"row"
      },
      star:{
        margin:SIZES.width*0.01
      }
})

export default CardItems