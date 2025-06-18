import { StyleSheet, Text, View } from "react-native";
import PostListDatas from '../../assets/datas/datas-post.json';
import PostItem from "./PostItem";
export default function PostList(){
    return(
        <>
            <View style={styles.root}>
                <Text style={styles.titre}>Dernières publications</Text>
                <View style={{marginTop: 30}}>
                    {PostListDatas.map((post)=>(
                        <PostItem postData={post} key={post.id}/>
                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginHorizontal: 5
    },
    titre: {
        fontSize: 20
    }
});
