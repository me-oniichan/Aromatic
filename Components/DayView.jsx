import { signOut } from "firebase/auth";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { auth } from "../Firebase/app";
import { useStore } from "react-redux";

export default function DayView() {
    const store = useStore();
    return (
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <View style={{ width: "90%", flexDirection: "row" }}>
                <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>{new Date().toDateString()}</Text>
                <Text
                    style={{ fontSize: 28, fontWeight: "700", color: "red", marginStart: "auto" }}
                    onPress={() =>
                        signOut(auth).then(() => {
                            store.dispatch({
                                type: "User/logout",
                                payload: null,
                            });
                            console.log("logged out", store.getState());
                        })
                    }
                >
                    Logout
                </Text>
            </View>
            <ScrollView style={styles.scview}>
                {new Array(24).fill().map((i, j) => (
                    <Text key={j} style={styles.text}>
                        {j} Hello
                    </Text>
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
});
