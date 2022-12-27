import { StyleSheet, View, StatusBar } from 'react-native';
import DayView from './Components/DayView';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import {store} from './Reducers/Reduer.jsx'
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Login></Login>
        <StatusBar backgroundColor="white"/>
      </View>
    </Provider>
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
