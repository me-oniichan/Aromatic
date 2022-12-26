import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Login() {
    const [dstyle, setDstyle] = useState({
        userBorderWidth: 1,
        passBorderWidth: 1,
    });
    return (
        <View>
            <TextInput
                placeholder="Username"
                style={[styles.input, { borderWidth: dstyle.userBorderWidth }]}
                placeholderTextColor="#fff"
                onFocus={() => setDstyle({ ...dstyle, userBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, userBorderWidth: 1 })}
            />
            <TextInput
                placeholder="Password"
                style={[styles.input, { borderWidth: dstyle.passBorderWidth }]}
                placeholderTextColor="#fff"
                onFocus={() => setDstyle({ ...dstyle, passBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, passBorderWidth: 1 })}
                secureTextEntry
            />
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
    view: {
        backgroundColor: "#223322",
    },
});
