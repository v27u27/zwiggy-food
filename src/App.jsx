import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { UserContext } from "./utils/UserContext.js";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState(null);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
