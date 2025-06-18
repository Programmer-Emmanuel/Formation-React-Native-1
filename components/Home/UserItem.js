import { StyleSheet, Image, TouchableOpacity, View, TouchableNativeFeedbackBase } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from "react-native";
export default function UserItem({user}){
    return(
        <>
            <TouchableOpacity style={styles.root}>
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: "https://th.bing.com/th/id/R.f60b7a91585568b9394a82015fc55076?rik=hxByM7Pu%2fCTZlQ&riu=http%3a%2f%2fimagesolutions.ca%2fwp-content%2fuploads%2f2016%2f01%2fDSC02785.jpg&ehk=uzIWSErDAJjexNc0iVyYjm9AG25iRaenHq2DhU%2bYYzM%3d&risl=&pid=ImgRaw&r=0"
                        }}
                        style={styles.userImage}
                    />
                    <View style={styles.starContainer}>
                        <AntDesign name="star" size={20} color="orange" />
                        <AntDesign name="star" size={20} color="orange" />
                        <AntDesign name="star" size={20} color="orange" />
                        <AntDesign name="star" size={20} color="white" />
                        <AntDesign name="star" size={20} color="white" />
                    </View>

                    <View>
                        <Text style={styles.userName}>{user.lastname} {user.firstname}</Text>
                    </View>

                    <View style={styles.last}>
                        <Text style={styles.total}>+40</Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>

                </View>
            </TouchableOpacity>
            
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#4e5ac8',
        width: 170,
        padding: 10,
        borderRadius: 10
    },
    userImage: {
        width: 70,
        height: 70,
        objectFit: "cover",
        borderRadius: 10
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2, 
        marginVertical: 10,
    },
    userName: {
        color: "white",
        fonttSize: 20
    },
    last: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    total: {
        color: "white"
    }
})