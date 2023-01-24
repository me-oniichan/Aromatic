import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/app";
import { useDispatch } from "react-redux";
import { ref, set} from "firebase/database";

function verify(user){
    let res = user.match("^[a-zA-Z0-9_]*$");
    return res !== null;
}

export default function Login() {
    const dispatch = useDispatch();

    const [dstyle, setDstyle] = useState({
        userBorderWidth: 1,
        passBorderWidth: 1,
        confBorderWidth: 1,
        nameBorderWidth: 1,
    });

    const [mode, setMOde] = useState(0); // 0 for login, 1 for signup

    const [userVar, setUserVar] = useState("");
    const [passVar, setPassVar] = useState("");
    const [confpassVar, setConfpassVar] = useState("");
    const [nameVar, setNameVar] = useState("");

    const [userauth, setUserauth] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, userVar + "@baka.aromatic", passVar)
            .then((user) => {
                dispatch({
                    type: "User/loadUser",
                    payload: userVar,
                });
                console.log(user.user.email, "Dispatch from login");
            })
            .catch((err) => {
                if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") setUserauth("Username or password is wrong");
            });
    };

    const signup = () => {
        //create user
        if (!verify(userVar)){
            setUserauth("Username can contain only alphabets, numbers and underscore");
            return;
        }
        else if(nameVar === "") {
            setUserauth("Name cannot be empty");
            return;
        }
        if (passVar === confpassVar) {
            createUserWithEmailAndPassword(auth, userVar + "@baka.aromatic", passVar)
                .then((user) => {
                    set(ref(db, `${userVar}`), {
                        name: nameVar,
                        data: {
                            activities: null,
                            restricted: null,
                            table: null,
                        },
                    }).then(() => {
                        dispatch({
                            type: "User/loadUser",
                            payload: userVar,
                        });
                        console.log(user.user.email, "New user dipacthed");
                    });
                })
                .catch((err) => {
                    console.log(err.code);
                });
        } else {
            setUserauth("Password and Confirm Password mismatch");
        }
    };

    return (
        <View style={styles.view}>
            <Text style={styles.head}> {mode ? "Sign UP" : "Login"} </Text>
            <TextInput
                placeholder="Username"
                style={[styles.input, { borderWidth: dstyle.userBorderWidth }]}
                placeholderTextColor="#ccc"
                onFocus={() => setDstyle({ ...dstyle, userBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, userBorderWidth: 1 })}
                onChangeText={setUserVar}
            />
            <TextInput
                placeholder="Password"
                style={[styles.input, { borderWidth: dstyle.passBorderWidth }]}
                placeholderTextColor="#ccc"
                onFocus={() => setDstyle({ ...dstyle, passBorderWidth: 2 })}
                onBlur={() => setDstyle({ ...dstyle, passBorderWidth: 1 })}
                onChangeText={setPassVar}
                secureTextEntry
            />

            {mode ? (
                <TextInput
                    placeholder="Confirm password"
                    style={[styles.input, { borderWidth: dstyle.confBorderWidth }]}
                    placeholderTextColor="#ccc"
                    onFocus={() => setDstyle({ ...dstyle, confBorderWidth: 2 })}
                    onBlur={() => setDstyle({ ...dstyle, confBorderWidth: 1 })}
                    onChangeText={setConfpassVar}
                    secureTextEntry
                />
            ) : null}
            {mode ? (
                <TextInput
                    placeholder="Name"
                    style={[styles.input, { borderWidth: dstyle.nameBorderWidth }]}
                    placeholderTextColor="#ccc"
                    onFocus={() => setDstyle({ ...dstyle, nameBorderWidth: 2 })}
                    onBlur={() => setDstyle({ ...dstyle, nameBorderWidth: 1 })}
                    onChangeText={setNameVar}
                    secureTextEntry
                />
            ) : null}
            {userauth? <Text style={{color:'red', marginBottom : 5}}>{userauth}</Text>:""}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    mode ? signup() : login();
                }}
            >
                <Text style={styles.text}>{mode ? "Sign UP" : "Login"}</Text>
            </TouchableOpacity>

            <Text
                style={{ color: "beige", marginTop: 15 }}
                onPress={() => {
                    setMOde(!mode);
                }}
            >
                {mode ? "Already have account? Login" : "Create Account? Sign up"}
            </Text>
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
    head: {
        color: "aqua",
        fontSize: 35,
        fontWeight: "700",
    },
});
