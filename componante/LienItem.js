export default function LienItem(props) {
    return(
        <View style={styles.lienItem} >
                <Text> {itemData.item.text}</Text>

              </View>
    )
};
const styles = StyleSheet.create({
lienItem:{
    backgroundColor:'#edcedc',
    marginTop:20,
    padding:8,
    color:'#ggg'
   
     }
    })