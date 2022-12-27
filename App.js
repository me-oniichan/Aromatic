import Main from "./Main";
import { store } from "./Reducers/Reduer.jsx";
import { Provider } from "react-redux";
export default function App() {
  
  return (
    <Provider store={store}>
      <Main/> 
    </Provider>
  );
}

