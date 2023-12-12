import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { UserContext } from "./utils/UserContext.js";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";

const App = () => {
  const [userName, setUserName] = useState(null);
  return (
    <div className="flex min-h-screen flex-col">
      <Provider store={store}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
