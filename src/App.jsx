import "./App.css";
import InboxScreen from "./components/InboxScreen";
import store from "./lib/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
        <InboxScreen />
    </Provider>
  );
}

export default App;
