<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
=======
function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </>
>>>>>>> bed8288 (Initial commit)
  );
}

export default App;
