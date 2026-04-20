import Header from "./Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "./Footer.jsx";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext.jsx";

import api from "../utils/api.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const currentUser = await api.getUserInfo();
      setCurrentUser(currentUser);
    }
    fetchData();
  }, []);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header />
          <Main />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
