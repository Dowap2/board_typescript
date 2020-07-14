import React from 'react';
import Board from './Board'

function App() {
  const onClick = (name: string) => {console.log(`${name} says hello`);};
  return (
    <div className="App">
      <header className="App-header">
        <Board name="gyeongtae" onClick={onClick}/>
      </header>
    </div>
  );
}

export default App;
