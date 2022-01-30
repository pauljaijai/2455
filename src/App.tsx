import NavBar from "./components/Navigator/NavBar";

import { useMemo, useState } from "react";
import GlobalContext from "./context";
import { initialState } from "./initialState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import CategoryPage from "./pages/category";
import CreatePage from "./pages/Create";

const App = () => {
  const [state, setState] = useState(initialState);
  const providerValue: any = useMemo(
    () => ({ state, setState }),
    [state, setState]
  );

  return (
    <GlobalContext.Provider value={providerValue}>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:title" element={<CategoryPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
