import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import "./Assests/style.css";
import STORE, { PERSISTOR } from "./Redux/Store";
import Routes from "./Routes/Routes";
function App() {
  return (
    <PersistGate persistor={PERSISTOR}>
      <Provider store={STORE}>
        <Routes />
      </Provider>
    </PersistGate>
  );
}

export default App;
