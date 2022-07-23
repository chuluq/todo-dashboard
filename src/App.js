import { BrowserRouter, Routes, Route } from "react-router-dom";
import { links } from "constants/links";

// components
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <div className="pages">
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
