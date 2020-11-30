import React from 'react';
import './App.scss';
import Calendar from "./components";
import Store from "./cammon/store/Store";

function App() {
  return(
      <Store>
          <Calendar />
      </Store>
  )
}

export default App;
