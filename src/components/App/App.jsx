import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../redux/reducers/rootReducer";
import AuthContainer from "../AuthContainer";
import { RegistrationContainer } from "../RegistrationContainer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <AuthContainer />
       <RegistrationContainer />
    </Provider>
  );
}

export default App;
