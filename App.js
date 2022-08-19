import{ useState }   from "react";
import { StyleSheet, Text, View ,Image,FlatList} from "react-native";
import LienItem from "./componante/LienItem";
import LienInput from "./componante/LienInput";



export default function App() {
  
  const [listeliens,setListeLiens]=useState([]);

  function ajoutLienHandler(lienTextSaisie) {
   setListeLiens((currentListeLiens)=>[
    ...currentListeLiens,
    {text:lienTextSaisie,id:Math.random().toString()},
   ])

  }



  return (
   
    <View style={styles.container}>

       <Image source={require('./assets/img.jpg')} style={styles.img} />
       <LienInput ajoutLien={ajoutLienHandler}/>

      <View style={styles.LienContainer}>

        <Text> Liste des Liens ...</Text>
      
        <FlatList
          data={listeliens}
          renderItem={(itemData)=>{
            return(
              
              <LienItem text={itemData.item.text}/>
                
            )
          }}
          
          />

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:100,
  },
  
  
  LienContainer: {
  
    height:200,
    width:200,
    borderColor:'green',
    borderWidth :2,
  },
 img: {
    height:200,
    width:200,
  },
 
});
