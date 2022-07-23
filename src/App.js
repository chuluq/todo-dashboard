import { BrowserRouter, Routes, Route } from "react-router-dom";
import { links } from "constants/links";

// components
import Sidebar from "components/Sidebar";
import Header from "components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <div className="pages">
          <Header />
          <Routes>
            {links.map((link) => {
              return (
                <Route key={link.id} path={link.url} element={link.element} />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
