import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView } from "react-native";
import AppartementList from "../../components/Home/AppartementList"
import GreetingUser from "../../components/Home/GreetingUser";
import Users from './../../components/Home/Users';
import PostList from "../../components/Posts/PostList";

export default function Page(){
    return(
        <>
            <ScrollView style={ styles.appContainer} showsVerticalScrollIndicator={false}>
                <GreetingUser/>
            <ScrollView>
                <AppartementList/>
                <Users/>
                <PostList/>
            </ScrollView>
            </ScrollView>    
        </>
    )
}

const styles = StyleSheet.create({
    appContainer : {
        flex: 1,
    },
})