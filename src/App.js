import "./styles.css";
import Button from "./components/Button";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button />
      </div>
    </Provider>
  );
}
