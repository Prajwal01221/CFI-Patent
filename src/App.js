import './App.css';
//import Timeline from './Allcomponents/Timeline';
import Input from './Allcomponents/Input';
import Cost from './Allcomponents/Cost';
import { useState } from 'react';

function App() {
  const [entity , setEntity] = useState();
  return (
    <div className="App">
      {/* <Timeline/> */}
    {/*<Input setentity={setEntity}/>*/}
      <Cost entity={entity}/>
    </div>
  );
}

export default App;
