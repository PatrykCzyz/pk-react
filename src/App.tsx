import React, { Suspense } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';

const Reports = React.lazy(() => import('./pages/Reports/Reports'));

function App() {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div>
        <SideBar />
      </div>
      <div className='flex-grow'>
        <Suspense fallback={<span>Loading...</span>}>
          <Reports />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
