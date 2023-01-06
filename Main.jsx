import { StatusBar, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import DayView from "./Components/DayView";
import TimeSelector from "./Components/TimeSelector";
import Login from "./Components/Login";
import { useSelector, useStore } from "react-redux";
import { db } from "./Firebase/app";
import ActivitySelector from "./Components/ActivitySelector";
import { child, get, ref } from "firebase/database";

export default function Main() {
    const store = useStore();
    const { data } = store.getState();
    const user = useSelector(state=>state.user);

    // useEffect(() => {
    //     if (store.getState().user !==null)
    //         get(child(ref(db), `${store.getState().user}/data`)).then((snapshot) => {
    //             store.dispatch({
    //                 type: "data/dataLoad",
    //                 payload: snapshot.val(),
    //             });
    //             console.log("Useffect loaded", snapshot.val());
    //         }).catch((err)=>console.log('\n\n',err));
    // }, [user]);

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
        backgroundColor: "#222222",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: StatusBar.currentHeight
    },
});
