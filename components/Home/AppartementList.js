import { StyleSheet, FlatList } from "react-native";
import houseList from "../../assets/datas/datas-appartements.json";
import AppartementItem from "./AppartementItem";

export default function AppartementList(){
    return(
            <>
                <FlatList 
                    data={houseList}
                    contentContainerStyle={{ gap: 5 }} 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=> <AppartementItem item={item}/>} 
                />
            </>
    )
}

