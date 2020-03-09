import React from 'react';
import RefameInicio from  './elements/RefameInicio';
import RefameProducts from './elements/RefameProducts';
import RefameNosotros from './elements/RefameNosotros'
import RefameContacto from "./elements/RefameContacto";

function App() {
  return (
    <div className="App">
        <RefameInicio/>
        <RefameProducts/>
        <RefameNosotros/>
        <RefameContacto/>
    </div>
  );
}

export default App;
