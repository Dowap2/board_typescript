import React, { useState } from 'react';
import Board from './Board'
import BoardModal from './BoardModal'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState<string>("modal__none");
  const onClick = () => {setModalOpen("modal__block")};

  return (
    <div className="App">
        <button onClick={onClick}>modal</button>
        <BoardModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <Board name="gyeongtae" />
    </div>
  );
}

export default App;
