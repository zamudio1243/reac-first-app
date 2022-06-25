import React from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Pokemones from "./components/Pokemones";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <Pokemones />
      </div>
    </Provider>
  );
}

export default App;
