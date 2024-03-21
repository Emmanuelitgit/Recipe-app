import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { SIZES } from '../utils/Data';
import { recipeList } from '../utils/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


const SingleRecipe = () => {

    const[recipes, setRecipes] = useState()

    const handleNavigate = (itemId) => {
        navigation.navigate('SingleOrg', { itemId });
      };

    useEffect(() => {
        const getRecipe = async () => {
          try {
            const accessToken = await AsyncStorage.getItem('token');
            if (accessToken) {
              const response = await axios.get(
                `http://localhost:5000/login/${itemId}`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`, 
                  },
                }
              );
              if(response.status === 200){
                setRecipes(response.data)
              }
              else{
                Alert.alert("Error⚠️", 'Something went wrong!')
              }
            }
          } catch (error) {
            console.error('Something went wrong!', error);
          }
        };
        getRecipe();
      }, []);

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"teal"}/>
        <View style={styles.itemsContainer}>
            <View style={styles.items}>
               <View style={styles.imageContainer}>
                  <Image source={require('../../assets/images/welcome1.png')} style={styles.image}/>
                  <Text style={styles.descTitle}>Tuna Tartey</Text>
                  <Text style={styles.descText}>
                  hello world this what Im doing!
                  hello world this what Im doing!
                  hello world this what Im doing!
                  </Text>
               </View>
               <View style={styles.timeRequirementsContainer}>
               <View style={styles.timeRequirements}>
                  <AntDesign name="clockcircle" size={24} color="black" />
                  <Text>40 mins</Text>
               </View>
               <View style={styles.timeRequirements}>
                  <AntDesign name="clockcircle" size={24} color="black" />
                  <Text>40 mins</Text>
               </View>
               <View style={styles.timeRequirements}>
                  <AntDesign name="clockcircle" size={24} color="black" />
                  <Text>40 mins</Text>
               </View>
               </View>
               
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"teal"
    },

    itemsContainer:{
        backgroundColor:"white",
        height:SIZES.height*1,
        width:SIZES.width*1,
        top:SIZES.height*0.3,
        borderRadius:80
    },

    items:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    },

    imageContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        top:-SIZES.height*0.2,
        flexDirection:"column"
    },

    image:{
        width:SIZES.width*0.7,
        height:SIZES.height*0.4
    },

    descTitle:{
        fontWeight:"bold",
        fontSize:SIZES.width*0.08,
        lineHeight:SIZES.height*0.05
    },

    descText:{
        width:SIZES.width*0.8,
        paddingTop:SIZES.height*0.015
    },

    timeRequirements:{
        height: SIZES.height * 0.2,
        width:SIZES.width*0.26,  
        margin: SIZES.width * 0.015,
        justifyContent: 'center',
        alignItems: 'center',
        gap:SIZES.height*0.01,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
    },

    timeRequirementsContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        top:-SIZES.height*0.15,
        gap:10
    }
    
})
export default SingleRecipe