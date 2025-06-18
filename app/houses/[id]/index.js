import { router, useLocalSearchParams } from "expo-router";
import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import houseList from "../../../assets/datas/datas-appartements.json";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function Details(){
    const {id} = useLocalSearchParams();
    const house = houseList.find((houseItem) => houseItem.id === parseInt(id));

    if(!house){
        return;
    }

    const goBack = () => {
        if(router.canGoBack()){
            router.back();
        }
        else{
            router.replace('/accueil')
        }
    }
    return(
        <>
            <SafeAreaView style={styles.root}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={{
                        uri: house.cover_image_url
                    }} 
                    resizeMode= "cover"
                    style={styles.mainImage}
                    >
                        <TouchableOpacity style={{padding: 3, backgroundColor: 'purple', borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={goBack}>
                            <AntDesign name="arrowleft" size={28} color="white" />
                        </TouchableOpacity>
                    </ImageBackground>

                    <Text style={{paddingHorizontal: 12, fontSize: 22, lineHeight: 30, marginVertical: 20}}>{house.name}</Text>
                    <View style={{flexDirection: 'row', paddingHorizontal: 10, gap: 2}}>
                        <Feather name="map-pin" size={24} color="gray" />
                        <Text style={{color: 'gray', fontSize: 20}}>{house.location_city}</Text>
                    </View>

                    <View style={{paddingVertical: 22, flexDirection: 'row', alignItems: 'center', gap: 150}}>
                        <Text style={{color: 'gray', paddingHorizontal: 10, fontSize: 30}}>{house.month_price} $</Text>
                        <View style={{paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', gap: 5, paddingHorizontal: 10, borderRadius: 10}}>
                            <AntDesign name="star" size={28} color="orange" />
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>5.0</Text>
                        </View>
                    </View>

                    <FlatList 
                        data={house.commodities}
                        contentContainerStyle={{gap: 10, paddingHorizontal: 5}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=>
                        <View style={{marginTop: 10}}>
                            <Text style={{padding: 15, backgroundColor: 'purple', borderRadius: 12, fontSize: 22, color: 'white'}}>{item}</Text>
                        </View>
                        }
                    />
                    <Text style={{marginTop: 30, fontSize: 22, paddingHorizontal: 10}}>{house.longText}</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 5,
    },
    mainImage: {
        aspectRatio: 4/3,
        padding: 5
    }
})