import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
        <Route path="/signin" element={<h1>Sign In Page</h1>} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;