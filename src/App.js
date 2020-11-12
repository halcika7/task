import { useState } from 'react';
import './App.css';
import Tabs from './components/tabs';
import ArrayTask from './containers/ArrayTask';
import UiElement from './containers/UiElement';

function App() {
  const [active, setActive] = useState(true);
  return (
    <main>
      <Tabs active={active} setActive={setActive} />
      {active ? <ArrayTask /> : <UiElement />}
    </main>
  );
}

export default App;
