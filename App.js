import { StyleSheet, View, StatusBar } from 'react-native';
import DayView from './Components/DayView';

export default function App() {
  return (
    <View style={styles.container}>
      <DayView></DayView>
      <StatusBar backgroundColor="white"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: StatusBar.currentHeight
  },
});
