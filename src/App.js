import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    
      <div>
        <Header/>
        <main className='pt-16'>
          <Outlet/>
        </main>
      </div>
    
    
    
  
  );
}

export default App;
