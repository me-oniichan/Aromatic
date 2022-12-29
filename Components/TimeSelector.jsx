import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
export default function () {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.restime}>Mark your restricted time period</Text>
            <ScrollView style={styles.scview} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    new Array(24).fill(1).map((i, j) => (
                        <View key={j} style={styles.hourmap}>
                            <View style={styles.hourline} />
                            <TouchableHighlight style={styles.hourbubble}>
                                <Text style={styles.hourtext}>{j + 1}</Text>
                            </TouchableHighlight>
                            <View style={styles.hourline} />
                        </View>
                    ))
                }
            </ScrollView>
            <Text style={styles.donebt}>Done</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor : "#252525",
        borderWidth : 1,
        borderColor : 'purple',
        alignItems : 'center',
        paddingVertical : 10,
        paddingHorizontal : 30,
        borderRadius : 10,
    },
    restime : {
        color : 'white',
        fontSize : 20
    },  
    scview: {
        margin: 10,
        borderColor: 'purple',
        borderRadius: 10
    },
    hourwrap: {
        height: `${100 / 24}%`,
    },
    hourline: {
        backgroundColor: 'purple',
        width: 2,
        height: 7,
        alignSelf: 'center'
    },
    hourbubble: {
        backgroundColor: 'purple',
        width: 30,
        borderRadius: 15,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hourtext: {
        color: 'beige',
    },
    donebt:{
        color : 'white',
        backgroundColor : 'purple',
        padding : 7,
        borderRadius : 10,
        fontSize : 20
    }
})