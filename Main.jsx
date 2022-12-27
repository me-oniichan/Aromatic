import { StyleSheet, View, StatusBar } from 'react-native';
import { useEffect } from 'react';
import DayView from './Components/DayView';
import Login from './Components/Login';
import { useSelector, useStore } from 'react-redux';
import { auth } from './Firebase/app';
 
export default function Main() {
    const store = useStore()
    const user = useSelector(state=>state,user)
    useEffect(() => { 
        store.dispatch({
            type : 'User/loadUser',
            payload : auth.currentUser==null? null:auth.currentUser.email
        });
        console.log('user', auth.currentUser?.email)
    }, [user])
    
    return (
        <View style={styles.container}>
            {
                store.getState().user === null? <Login/> : <DayView/>
            }
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
