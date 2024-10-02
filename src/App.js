import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./api/axiosDefaults";
import NavBar from './components/NavBar';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from './pages/auth/SignInForm';
import styles from './App.module.css';
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.error('Error fetching user:', err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="*" element={<p>Page not found!</p>} />
          </Routes>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;