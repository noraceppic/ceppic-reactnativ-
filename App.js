import{ useState }   from "react";
import { StyleSheet, Text, View, TextInput, Button ,Image,FlatList} from "react-native";


export default function App() {
  const [lienTextSaisie, setLientexteSaisie] = useState('');
  const [listeliens,setListeLiens]=useState(['www.nora.com']);

  function ajoutLienHandler() {
   // console.log(lienTextSaisie);
  /*  setListeLiens([...listeliens,lienTextSaisie]);
   setLientexteSaisie(''); */
   setListeLiens((currentListeLiens)=>[
    ...listeliens,
    {text:lienTextSaisie,id:Math.random().toString()},
   ])

  }

  function lienInputHandler(textSaisie) {
    console.log(textSaisie)
    setLientexteSaisie(textSaisie);
  }

  return (
   
    <View style={styles.container}>

       <Image source={require('./assets/img.jpg')} style={styles.img} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="nouveau lien.."
          style={styles.inputLien}
          onChangeText={lienInputHandler}
          value = {lienTextSaisie}
        />
        <Button title="Ajouter un lien " onPress={ajoutLienHandler} />
      </View>
      <View style={styles.LienContainer}>
        <Text> Liste des Liens ...</Text>
        {/* <ScrollView>
          {listeliens.map((lien)=><Text key={lien}>{lien}</Text>)}
        </ScrollView> */}
{/* 
        <FlatList 
        data={listeliens}
        renderItem
        ={({item})=>(<Text>{item}</Text>)} /> */}
        <FlatList
          data={listeliens}
          renderItem={(itemData)=>{
            return(
              
              <View style={styles.lienItem} >
                <Text> {itemData.item.text}</Text>

              </View>
                
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
  inputLien: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  LienContainer: {
  
    height:80,
    borderColor:'green',
    borderWidth :2,
  },
 img: {
    height:200,
    width:200,
  },
  lienItem:{
 backgroundColor:'#edcedc',
 marginTop:20,
 padding:8,
 color:'#ggg'

  }
});
