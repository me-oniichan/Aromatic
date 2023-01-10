import {signOut} from "firebase/auth";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {auth} from "../Firebase/app";
import {useStore} from "react-redux";

export function Card({hour, text}) {
    return (
        <View style={styles.cardview}>
            <View style={styles.cardline}/>
            <View style={{flexDirection: "row", height: "100%", width: "100%", paddingHorizontal: 15}}>
                <Text style={styles.cardhour}>{hour}</Text>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <View style={styles.cardcircle}/>
                    <View style={styles.cardverticalline}/>
                </View>
                {text ? <Text style={styles.cardText}>{text}</Text> : ""}
            </View>
        </View>
    );
}

export default function DayView() {
    const store = useStore();
    const dummyarray = [1, 5, 3, 8, 6, 15, 16];
    return (
        <View style={{flex: 1, width: "100%", alignItems: "center"}}>
            <View style={{width: "90%", flexDirection: "row", marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "500", color: "white"}}>{new Date().toDateString()}</Text>
                <Text
                    style={{fontSize: 28, fontWeight: "700", color: "red", marginStart: "auto"}}
                    onPress={() =>
                        signOut(auth).then(() => {
                            store.dispatch({
                                type: "User/logout",
                                payload: null,
                            });
                        })
                    }
                >
                    Logout
                </Text>
            </View>
            <ScrollView style={styles.scview}>
                {new Array(24).fill().map((i, j) => (
                    <Card key={j} text={dummyarray.includes(j) ? "Text" : ""} hour={j}/>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        backgroundColor: "cyan",
        borderRadius: 5,
        color: "black",
        padding: 8,
        margin: 2,
    },

    scview: {
        width: "90%",
    },
    cardview: {
        height: 60,
        width: "100%",
        backgroundColor: "#212121",
    },
    cardcircle: {
        width: 6,
        aspectRatio: 1,
        borderRadius: 4,
        backgroundColor: "white",
    },
    cardline: {
        backgroundColor: "#cccccc",
        width: "100%",
        height: 1,
        alignSelf: "center",
    },
    cardhour: {
        color: "white",
        alignSelf: "center",
        width: 30,
    },
    cardverticalline: {
        backgroundColor: "#aaaaaa",
        height: "88%",
        width: 1,
    },
    cardText: {
        color: "white",
        backgroundColor: "#bf2828",
        padding: 10,
        margin: 5,
        height: "85%",
        width: "91%",
        borderRadius: 10,
        textAlignVertical: "center",
        fontSize: 20,
    },
});
