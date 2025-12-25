import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
        <Footer/>
    </div>
  );
};

export default App;
