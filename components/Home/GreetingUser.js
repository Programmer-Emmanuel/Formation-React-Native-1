import { StyleSheet, Text, View, FlatList, ImageBackground } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function GreetingUser(){
    return(
        <View style={ styles.greetingContainer }>
            <Text style={ styles.greetingText}>Decouvrir</Text>
            <AntDesign name="search1" size={28} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer : {
        flex: 1
    },
    greetingContainer: { 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginTop: 15
    },
    greetingText: {  
        fontSize: 20,
        fontWeight: "semibold"
    }
})