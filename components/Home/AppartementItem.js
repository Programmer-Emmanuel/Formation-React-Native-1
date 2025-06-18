import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
export default function AppartementItem({item}){
    const handleTouchImage = () => {
        // Alert.alert(item.id.toString());
        router.replace({
            pathname: '/houses/[id]',
            params: {id:item.id}
        });
    }
    return(
        <TouchableOpacity onPress={handleTouchImage}>
            <View style={styles.imageBlock}>
                <ImageBackground 
                    source={{
                        uri: item.cover_image_url,
                    }}
                    resizeMode="cover"
                    style = {styles.imageBackground}
                >
                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
                        <View style={styles.tag}>
                            <Text style={{ color: "white" }}>Enregistrer nouvellement</Text>
                        </View>
                    </View>

                </ImageBackground>
                
                <View style={styles.rowBetween}>
                    <Text style={{fontSize: 15}}>{item.location_city}</Text>
                    <View style={ styles.tagContainer } >
                        <AntDesign name="star" size={20} color="orange" />
                        <Text style={styles.tagNoteText}>5.0</Text>
                    </View>
                </View>
                <View style={styles.rowBetween}>
                    <Text style={{fontSize: 15, color: "#6b7280"}}>${item.month_price} / mois</Text>
                    <View style={ styles.tagContainer } >
                        <AntDesign name="user" size={20} color="orange" />
                        <Text style={styles.tagNoteText}>3 visiteurs</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageBlock: {
        width: 320,
        marginHorizontal: 5,
        marginTop: 20
    },
    imageBackground: {
        height: 200,
        borderRadius: 25,
        overflow: "hidden"
    },
    tag: { 
        backgroundColor: "#4e5ac8", 
        opacity: 0.9,
        padding: 10, 
        borderRadius: 20 
    },
    rowBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    tagContainer: {
        backgroundColor: "#f0f0f0",
        flexDirection: "row",
        alignItems: "center",
        gap: "5",
        borderRadius: 5,
        padding: 5
    },
    tagNoteText: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold"
    }
})