import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./modules/chats";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ chats: chatReducer });
const store = createStore(rootReducer, enhancer);

export default store;
