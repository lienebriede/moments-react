import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
        <Route path="/signin" element={<h1>Sign In Page</h1>} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;