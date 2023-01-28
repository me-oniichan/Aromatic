import { ref, set } from "firebase/database";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector} from "react-redux";
import { db } from "../Firebase/app";
import Generator from "../utils/Generator";

export default function () {
    const activities = useSelector((state) => state.data.activities);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [selectedHours, setSelectedHours] = useState(new Array(24).fill(0).map(() => 0));

    const sendHours = () => {
        const restricted = [];
        selectedHours.forEach((i, j) => {
            if (i) restricted.push(j);
        });
        const table = Generator(restricted, activities);

        set(ref(db, `${user}/data/restricted`), restricted).catch(err=>console.log(err.code));
        set(ref(db, `${user}/data/table`), table)
            .then(() => {
                dispatch({
                    type: "data/setTable",
                    payload: { table, restricted },
                });
            })
            .catch((err) => console.log(err.code));
    };
    return (
        <View style={styles.wrapper}>
            <Text style={styles.restime}>Mark your restricted time period</Text>
            <ScrollView style={styles.scview} contentContainerStyle={{ alignItems: "center" }}>
                {selectedHours.map((state, i) => (
                    <View key={i} style={styles.hourmap}>
                        <View style={[styles.hourline, state ? styles.selected : styles.unselected]} />
                        <TouchableHighlight
                            underlayColor={"red"}
                            style={[styles.hourbubble, state ? styles.selected : styles.unselected]}
                            onPress={() => {
                                setSelectedHours(
                                    selectedHours.map((state, hour) => {
                                        if (hour === i) return !state;
                                        return state;
                                    })
                                );
                            }}
                        >
                            <Text style={styles.hourtext}>{i}</Text>
                        </TouchableHighlight>
                        <View style={[styles.hourline, state ? styles.selected : styles.unselected]} />
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.donebt} onPress={sendHours}>
                Done
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#252525",
        borderWidth: 1,
        borderColor: "purple",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    restime: {
        color: "white",
        fontSize: 20,
    },
    scview: {
        margin: 10,
        borderColor: "purple",
        borderRadius: 10,
    },
    hourwrap: {
        height: `${100 / 24}%`,
    },
    hourline: {
        backgroundColor: "purple",
        width: 2,
        height: 7,
        alignSelf: "center",
    },
    hourbubble: {
        width: 30,
        borderRadius: 15,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    selected: {
        backgroundColor: "red",
    },
    unselected: {
        backgroundColor: "purple",
    },
    hourtext: {
        color: "beige",
    },
    donebt: {
        color: "white",
        backgroundColor: "purple",
        padding: 7,
        borderRadius: 10,
        fontSize: 20,
    },
});
