import { StyleSheet, Text, View } from 'react-native'
import usersList from '../../assets/datas/datas-user.json'
import { FlatList } from 'react-native';
import UserItem from './UserItem';
export default function Users(){
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Nos meilleurs propriétaires</Text>
                <FlatList
                    data={usersList} 
                    contentContainerStyle={styles.root}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=><UserItem user={item}/>}
                />
            </View>
        </>
    );
    
}

const styles = StyleSheet.create({
    root: {
        gap: 5,
        paddingVertical: 20 
    },
    container : {
        padding: 5,
        marginTop: 20
    },
    title: {
        fontSize: 20
    }
});