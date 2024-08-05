import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./component/Dashboard";
import appStore from "./utils/appStore";
import "antd/dist/reset.css";

function App() {
  return (
    <Provider store={appStore}>
      <Dashboard />
    </Provider>
  );
}

export default App;
