import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CardItems from './CardItems';
import { recipeList } from '../utils/Data';
import { SIZES } from './Constants/Theme';
import axios from 'axios';

const Card = ({nav}) => {

  const [data, setData] = useState()

  useEffect(()=>{
    const getData = async()=>{
      try {
        const accessToken = await AsyncStorage.getItem('token');
        if(accessToken){
          const response = await axios.get("http://localhost:5000/recipe-list",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          } 
          );
        if(response.status === 200){
          setData(response.data)
        }
  
        if(response.status === 404){
          console.log("data not found")
        }
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.cardTitle}>Recipes</Text>
        <FlatList
        data={recipeList}
        renderItem={({item}) => <CardItems name={item.name} nav={nav(item.id)} />} 
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    contentContainer:{
       display:"flex",
       flexDirection:"row",
       flexWrap:"wrap",
       gap:SIZES.width*0.05,
       justifyContent:"center"
    },
    cardTitle:{
        paddingTop:SIZES.height*0.05,
        paddingBottom:SIZES.height*0.02,
        paddingLeft:SIZES.width*0.09,
        fontSize:SIZES.width*0.06,
        fontWeight:"bold"
    },
})
export default Card