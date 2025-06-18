import { StyleSheet, Text, View } from "react-native";

export default function houses(){
    return(
        <>
            <View style={styles.container}>
                <Text>Liste des maisons</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5
    }
})