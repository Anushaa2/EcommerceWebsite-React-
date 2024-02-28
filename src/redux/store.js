import { legacy_createStore,combineReducers,applyMiddleware} from "redux";
import studentReducer from "./reducer/studentReducer";
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReducer";
import { thunk } from "redux-thunk";

const reducer=combineReducers({
    cart:cartReducer,
    student:studentReducer,
    productsData:productReducer
})

const store=legacy_createStore(reducer,applyMiddleware(thunk))

export default store