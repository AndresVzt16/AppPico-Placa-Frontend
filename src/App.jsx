import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndLayout from "./layout/IndLayout";
import Inicio from "./views/Inicio";
import Consultas from './views/Consultas'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndLayout />}>
          <Route index element={<Inicio />} />
          <Route path="consultas" element={<Consultas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
