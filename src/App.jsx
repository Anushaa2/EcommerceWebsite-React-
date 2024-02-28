
import './App.css';
import MyRoute from './MyRoute';
//     FunctionName     Filename
// import { legacy_createStore } from 'redux';
import {Provider} from 'react-redux';
import store from './redux/store';
// import cartReducer from './redux/reducer/cartReducer';


function App() {
  // const store1=legacy_createStore(cartReducer)
  return (
    <>
      <Provider store={store}>
      <MyRoute/>
      </Provider>
      

    </>
  );
  
}

export default App;
