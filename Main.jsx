import { StatusBar, StyleSheet, View } from "react-native";
import DayView from "./Components/DayView";
import TimeSelector from "./Components/TimeSelector";
import Login from "./Components/Login";
import { useDispatch, useSelector } from "react-redux";
import ActivitySelector from "./Components/ActivitySelector";
import { child, get, ref } from "firebase/database";
import { db } from "./Firebase/app";
import { useEffect } from "react";

export default function Main() {
    const { user, data } = useSelector((state) => ({ user: state.user, data: state.data }));
    const dispatch = useDispatch();

    useEffect(() => {
        if (user === null && data.activities !== null) {
            dispatch({
                type: "data/dataLoad",
                payload: {
                    activities: null,
                    restricted: null,
                    table: null,
                },
            });
        } else if (user !== null && data.activities === null) {
            get(child(ref(db), `${user}/data`)).then((snapshot) => {
                if (snapshot.exists())
                    dispatch({
                        type: "data/dataLoad",
                        payload: snapshot.val(),
                    });
            }).catch(err=>console.log(err.code));
        }
    });

    return (
        <View style={styles.container}>
            {user === null ? <Login /> : data.activities === null ? <ActivitySelector /> : data.restricted == null ? <TimeSelector /> : <DayView />}
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
