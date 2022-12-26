import {useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

export default function Login() {
    const [dstyle, setDstyle] = useState({
        userBorderWidth: 1,
        passBorderWidth: 1,
    });

    let [userVar, setUserVar] = useState('')
    let [passVar, setPassVar] = useState('');

    const login = () =>{
        console.log(userVar, passVar);
    }

    return (
        <View style={styles.view}>
            <TextInput
                placeholder="Username"
                style={[styles.input, { borderWidth: dstyle.userBorderWidth }]}
                placeholderTextColor="#fff"
                onFocus={() => setDstyle({ ...dstyle, userBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, userBorderWidth: 1 })}
                onChangeText={setUserVar}
            />
            <TextInput
                placeholder="Password"
                style={[styles.input, { borderWidth: dstyle.passBorderWidth }]}
                placeholderTextColor="#fff"
                onFocus={() => setDstyle({ ...dstyle, passBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, passBorderWidth: 1 })}
                onChangeText={setPassVar}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 200,
        color: "white",
        borderColor: "cyan",
        borderRadius: 8,
        margin: 10,
        padding: 7,
        fontSize: 20,
    },
    text: {
        fontSize: 17,
        fontWeight: "600",
    },
    button: {
        backgroundColor: "cyan",
        height: 40,
        width: 80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        alignItems: "center",
    },
});
