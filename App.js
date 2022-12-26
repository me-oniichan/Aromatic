import { StyleSheet, View, StatusBar } from 'react-native';
import DayView from './Components/DayView';
import Login from './Components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
      <StatusBar backgroundColor="white"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223322',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: StatusBar.currentHeight
  },
  view : {
    backgroundColor : '#223322'
  }
});
