import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
