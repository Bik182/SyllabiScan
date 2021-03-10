// Imports: Dependencies
import  {AsyncStorage}  from "AsyncStorage";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import initialState from "../reducers/index.js";
// Imports: Redux
import rootReducer from "../reducers/index.js";
// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: "root",
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ["calendarReducer"],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export { store, persistor };