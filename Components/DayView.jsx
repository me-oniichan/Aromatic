import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function DayView(){
    return(
        <View>
            <Text>Week</Text>
            <ScrollView>
                {new Array(24).fill().map((i)=>(
                    <Text key={i} style={styles.text}>Hello</Text>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize : 35
    },
})