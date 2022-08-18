import{ useState }   from "react";
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from "react-native";

export default function App() {
  const [lienTextSaisie, setLientexteSaisie] = useState('');
  const [listeliens,setListeLiens]=useState(['www.nora.com']);

  function ajoutLienHandler() {
   // console.log(lienTextSaisie);
   setListeLiens([...listeliens,lienTextSaisie]);
   setLientexteSaisie('');

  }

  function lienInputHandler(textSaisie) {
    console.log(textSaisie)
    setLientexteSaisie(textSaisie);
  }

  return (
   
    <View style={styles.container}>
       <Image source={require('./assets/icon.png')} style={styles.icon} />
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
        <ScrollView>
          {listeliens.map((lien)=><Text key={lien}>{lien}</Text>)}
        </ScrollView>
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
  icon:{
    height:20,
    width:20,
  }
});
