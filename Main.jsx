import { StatusBar, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import DayView from "./Components/DayView";
import TimeSelector from "./Components/TimeSelector";
import Login from "./Components/Login";
import { useSelector, useStore } from "react-redux";
import { auth } from "./Firebase/app";
import ActivitySelector from "./Components/ActivitySelector";

export default function Main() {
    const store = useStore();
    const { data } = store.getState();
    const user = useSelector((state) => state, user);
    useEffect(() => {
        store.dispatch({
            type: "User/loadUser",
            payload: auth.currentUser == null ? null : auth.currentUser.email.slice(0, -14),
        });
    }, [user]);

    return (
        <View style={styles.container}>
            {store.getState().user === null ? <Login /> : data.activities === null ? <ActivitySelector /> : data.restricted == null ? <TimeSelector /> : <DayView />}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#223322",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: StatusBar.currentHeight
    },
    view: {
        backgroundColor: "#223322",
    },
});
