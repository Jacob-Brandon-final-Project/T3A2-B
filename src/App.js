import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <main className='pt-16'>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
          <Outlet/>
        </main>
      </div>
    </Router>
    
    
  
  );
}

export default App;
