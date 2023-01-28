import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../Firebase/app";
import { ref, set } from "firebase/database";
import { useStore } from "react-redux";

const Card = ({ text, callback }) => {
    return (
        <View style={styles.cardview}>
            <Text style={styles.cardtext}>{text}</Text>
            <Text style={{ color: "#999999", fontSize: 20 }} onPress={callback}>
                X
            </Text>
        </View>
    );
};

export default function ActivitySelector() {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);

    const store = useStore();

    function Senddata() {
        set(ref(db, `${store.getState().user}/data/activities`), items).then(() => {
            store.dispatch({
                type: 'data/dataUpdate',
                prop: 'activities',
                payload: items
            })
        }).catch(err => {
            console.log("*" * 20, "\n", err.code);
            throw err;
        })
    }


    return (
        <View backgroundColor={"#2a2a2a"} style={styles.view}>
            <Text style={styles.head}>Add activities you want to schedule</Text>
            <View style={{
                flexDirection: "row",
                backgroundColor: "#222222",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#b75eff"
            }}>
                <TextInput style={styles.input} onChangeText={setItem} value={item} />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#b75eff",
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 8
                    }}
                    onPress={() => {
                        setItems([...items, item]);
                        setItem("");
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scview}>
                {items.map((i, j) => (
                    <Card
                        key={j}
                        text={i}
                        callback={() => {
                            setItems(items.filter((elem, index) => index != j));
                        }}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity style={{
                backgroundColor: "#b75eff",
                height: 40,
                width: '90%',
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
            }} onPress={Senddata}>
                <Text style={{ color: "white", fontSize: 20 }}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: "white",
        fontSize: 20,
        marginBottom: 15,
    },
    view: {
        borderRadius: 15,
        padding: 15,
        width: 380,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#555555",
        borderWidth: 1,
    },
    input: {
        height: 60,
        width: 250,
        color: "white",
        fontSize: 20,
        padding: 10,
    },
    scview: {
        marginVertical: 15,
    },
    cardview: {
        flexDirection: "row",
        backgroundColor: "#454545",
        margin: 3,
        borderRadius: 8,
        paddingHorizontal: 15,
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardtext: {
        color: "white",
        fontSize: 20,
    },
});