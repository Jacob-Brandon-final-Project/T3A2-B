import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {
  return (
    
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
    
    
    
  
  );
}

export default App;
