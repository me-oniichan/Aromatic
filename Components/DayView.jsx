import { signOut } from "firebase/auth";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { auth } from "../Firebase/app";
import { useDispatch, useSelector } from "react-redux";

export function Card({ hour, text }) {
    return (
        <View style={styles.cardview}>
            <View style={styles.cardline} />
            <View style={{ flexDirection: "row", height: "100%", width: "100%", paddingHorizontal: 15 }}>
                <Text style={styles.cardhour}>{hour}</Text>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.cardcircle} />
                    <View style={styles.cardverticalline} />
                </View>
                {text ? <Text style={styles.cardText}>{text}</Text> : ""}
            </View>
        </View>
    );
}

export default function DayView() {
    const { user, data } = useSelector((state) => ({ user: state.user, data: state.data }));
    const dispatch = useDispatch();
    const day = new Date().getDay();

    let first = data.restricted.length;

    for (let i = 0; i < data.restricted.length; i++) {
        if (i !== data.restricted[i]) {
            first = i;
            break;
        }
    }

    return (
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <View style={{ width: "90%", flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: "500", color: "white" }}>{new Date().toDateString() + " "}</Text>
                <Text
                    style={{ fontSize: 22, fontWeight: "700", color: "red", marginStart: "auto" }}
                    onPress={() =>
                        signOut(auth).then(() => {
                            dispatch({
                                type: "User/logout",
                                payload: null,
                            });
                        })
                    }
                >
                    Logout
                </Text>
            </View>
            {day === 0 || day === 6 ? (
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>Nothing To Do on Weekends</Text>
                </View>
            ) : (
                <ScrollView style={styles.scview} contentOffset={{ y: 60 * first }}>
                    {new Array(24).fill(0).map((i, j) => (
                        <Card key={j} text={data.table[day-1].hasOwnProperty(j) ? data.activities[data.table[day-1][j]] : ""} hour={j} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
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
