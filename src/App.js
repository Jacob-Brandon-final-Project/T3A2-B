import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (

    <div>
        <Header />
        <main className='pt-16'>
          <Outlet/>
        </main>
    </div>

  


  );
}

export default App; 
