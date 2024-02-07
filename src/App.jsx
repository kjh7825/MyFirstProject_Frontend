import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "../src/pages/Main/MainPage";

function App() {
    return (
        <Routes className="App">
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}

export default App;
