import{ useState }   from "react";
import { StyleSheet, View,  TextInput,Button } from "react-native";

export default function LienInput(props) {
     const [lienTextSaisie, setLientexteSaisie] = useState('');

    function lienInputHandler(textSaisie) {
        setLientexteSaisie(textSaisie);
      }

      function ajoutLienHandler(){
        props.ajoutLien(lienTextSaisie);
        
        setLientexteSaisie('');
      }
    

    return(
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="nouveau lien.."
          style={styles.inputLien}
          onChangeText={lienInputHandler}
          value = {lienTextSaisie}
        />
        <Button title="Ajouter un lien " onPress={ajoutLienHandler} />
      </View>
    ) 
    
};
const styles=StyleSheet.create(
    {
        inputContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
          inputLien: {
            flex: 1,
            borderColor: "gray",
            borderWidth: 1,
            padding: 8,
          },
    }
)