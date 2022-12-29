import { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
export default function () {
    const [selectedHours, setSelectedHours] = useState(new Array(24).fill(0).map((i, j) => [j + 1, 0]));
    return (
        <View style={styles.wrapper}>
            <Text style={styles.restime}>Mark your restricted time period</Text>
            <ScrollView style={styles.scview} contentContainerStyle={{ alignItems: "center" }}>
                {selectedHours.map(([i, j]) => (
                    <View key={i} style={styles.hourmap}>
                        <View style={[styles.hourline, j ? styles.selected : styles.unselected]} />
                        <TouchableHighlight
                            underlayColor={"red"}
                            style={[styles.hourbubble, j ? styles.selected : styles.unselected]}
                            onPress={() => {
                                setSelectedHours(
                                    selectedHours.map(([hour, state]) => {
                                        if (hour == i) return [hour, !state];
                                        return [hour, state];
                                    })
                                );
                            }}
                        >
                            <Text style={styles.hourtext}>{i}</Text>
                        </TouchableHighlight>
                        <View style={[styles.hourline, j ? styles.selected : styles.unselected]} />
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.donebt}>Done</Text>
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
