import {useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Firebase/app";
// import { store } from "../Reducers/Reduer";
import { useStore } from "react-redux";

// const auth = getAuth();

export default function Login() {
    const store = useStore()
    const [dstyle, setDstyle] = useState({
        userBorderWidth: 1,
        passBorderWidth: 1,
        confBorderWidth: 1,
        nameBorderWidth: 1
    });

    const [mode, setMOde] = useState(0) // 0 for login, 1 for signup

    const [userVar, setUserVar] = useState('')
    const [passVar, setPassVar] = useState('');

    const login = () =>{
        
    }

    const signup = () =>{
        createUserWithEmailAndPassword(auth, userVar+'@baka.aromatic', passVar).then((user)=>{
            store.dispatch({
                type : 'User/loadUser',
                payload : user.user.email
            })
            console.log(store.getState(), userVar)
        }).catch(err=>{console.log(err)})
    }

    return (
        <View style={styles.view}>
            <Text style={styles.head}> {mode ? 'Sign UP' : 'Login'} </Text>
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

            {
                mode? (
                    <TextInput
                        placeholder="Confirm password"
                        style={[styles.input, { borderWidth: dstyle.confBorderWidth }]}
                        placeholderTextColor="#fff"
                        onFocus={() => setDstyle({ ...dstyle, confBorderWidth: 2 })}
                        onBlur={() => setDstyle({ ...dstyle, confBorderWidth: 1 })}
                        onChangeText={setPassVar}
                        secureTextEntry
                    />
                ): null
            }{
                mode? (
                    <TextInput
                        placeholder="Name"
                        style={[styles.input, { borderWidth: dstyle.nameBorderWidth }]}
                        placeholderTextColor="#fff"
                        onFocus={() => setDstyle({ ...dstyle, nameBorderWidth: 2 })}
                        onBlur={() => setDstyle({ ...dstyle, nameBorderWidth: 1 })}
                        onChangeText={setPassVar}
                        secureTextEntry
                    />
                ): null
            }

            <TouchableOpacity style={styles.button} onPress={()=>{mode? signup() : login()}}>
                <Text style={styles.text}>{mode ? 'Sign UP' : 'Login'}</Text>
            </TouchableOpacity>

            <Text style={{color : 'beige', marginTop : 15}} onPress={()=>{setMOde(!mode)}}>{mode ? 'Already have account? Login' : 'Create Account? Sign up'}</Text>
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
    head:{
        color : 'aqua',
        fontSize : 35,
        fontWeight : "700"
    }
});
