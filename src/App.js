import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Write from "./pages/write";
import Router from "./shared/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
