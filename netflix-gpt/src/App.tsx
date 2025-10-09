import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import AppRoutes from "./components/AppRoutes";

const App = () => {

  return (
      <Provider store={ store }>
        <AppRoutes />
      </Provider>
  )
}

export default App;