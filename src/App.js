import './App.css';
import DeviceList from './UI/DeviceList';
import DeviceViewer from './UI/DeviceViewer';
import { useState } from 'react';

function App() {

  const [activeId, setActiveId] = useState(2);

  return (
    <div data-testid={"app"} className="App">
      <DeviceList setActiveId={setActiveId}/>
      <DeviceViewer id={activeId}/>
    </div>
  );
}

export default App;
