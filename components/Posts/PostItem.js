import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PostItem({postData}){
    const auClick = () =>{
        console.log(postData);
    }
    return(
        <>
            <Pressable onPress={auClick}>
                <View style={styles.root}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10, padding: 5}}>
                        <Image
                            source={{
                                uri: "https://th.bing.com/th/id/R.f60b7a91585568b9394a82015fc55076?rik=hxByM7Pu%2fCTZlQ&riu=http%3a%2f%2fimagesolutions.ca%2fwp-content%2fuploads%2f2016%2f01%2fDSC02785.jpg&ehk=uzIWSErDAJjexNc0iVyYjm9AG25iRaenHq2DhU%2bYYzM%3d&risl=&pid=ImgRaw&r=0"
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{postData.userName}</Text>
                            <Text>Il y a 15 min</Text>
                        </View>
                    </View>
                    <View>
                        {postData.postPicture ? <Image
                            source={{
                                uri: postData.postPicture
                            }}
                            style={{height: 400, marginTop: 30 }}
                        /> : ''}

                        <Text style={{paddingHorizontal: 20, marginVertical: 30, fontSize: 15}}>{postData.post}</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 60, justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 16, borderTopColor: 'black', borderTopWidth: 1}}>
                        <View style={{flexDirection: 'row', gap: 5}}>
                            <AntDesign name="heart" size={24} color="#ff9f92" />
                            <Text>{postData.totalLike} réactions</Text>
                        </View>
                        <View style={{flexDirection: 'row', gap: 5}}>
                            <FontAwesome name="comments" size={24} color="#bbbb" />
                            <Text>{postData.totalComment} comments</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    root : {
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 12,
        marginBottom: 20
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
})