import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/EmployeeDataContext";
import Home from "./pages/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
