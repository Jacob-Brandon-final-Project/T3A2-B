import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';

import FooterComponent from './component/Footer'

function App() {
  return (

    <div>
        <Header />
        <main className='pt-16'>
          <Outlet/>
        </main>
        <FooterComponent />
    </div>

    


  );
};

export default App; 
