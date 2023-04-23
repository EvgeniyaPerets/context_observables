import './App.css';
import { Outlet } from 'react-router-dom';
// import FirstPerson from './components/FirstPerson';
import Switcher from './components/Switcher';

function App() {
  return (
    <div className="App">
      {/* <FirstPerson /> */}
      <Switcher />
      <Outlet/>
    </div>
  );
}

export default App;
