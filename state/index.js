import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// Middleware
import thunk from "redux-thunk";

// Stores
import account, { accountActions } from "./account";

const reducer = combineReducers({
  account,
});

let composeEnhancers = compose;

if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export { accountActions };

export default store;
