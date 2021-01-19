import React from 'react';
import { Greeting } from './components/greetings/Greeting';
import { Routes } from './routes/Routes'
import {Desktopnavigation} from './components/navigation/desktopnavigation/Desktopnavigation';

function App() {
  return (
    <Routes>
      <Desktopnavigation />
      <Greeting name="Bubba" />
    </Routes>
  );
}

export default App;
