import { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, View } from "react-native";
import { useStore } from "react-redux";
import { db } from "../Firebase/app";

export default function HeadStart() {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    return (
        <View backgroundColor={"#2a2a2a"} style={styles.view}>
            <View style={{ flexDirection: "row", backgroundColor: "#222222", borderRadius: 10 }}>
                <TextInput style={styles.input} onChangeText={setItem} value={item}/>
                <TouchableOpacity style={{ backgroundColor: "cyan", width: 80, alignItems: "center", justifyContent: "center" }} onPress={()=>{
                    setItems([...items, item])
                    setItem('')
                }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
            {
                items.map((i,j)=>(
                    <Text key={j} style={[styles.input, {backgroundColor : 'purple', width: 350, margin : 5}]}>{i}</Text>
                ))
            }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        borderRadius: 15,
        padding: 30,
        width: 380,
        justifyContent: "center",
        alignItems : 'center'
    },
    input: {
        height: 60,
        width: 250,
        color: "white",
        fontSize: 20,
        padding: 10,
    },
});
