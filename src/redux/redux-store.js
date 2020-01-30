import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({//записиваем сюда все Reducer и комбинуем их методом combineReducers
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer, 
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware) );//applyMiddleware - придпринять промежуточние слои, стобы вклиниться в конвеер

window.store = store;


export default store;


