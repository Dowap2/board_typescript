import React, { useState } from 'react';
import Board from './Board'
import BoardModal from './BoardModal'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState<string>("modal__none");
  const [title, setTitle] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
  const [list , setList] = useState<string[][]>([]);
  const onClick = () => {setModalOpen("modal__block")};

  return (
    <div className="App">
        <button onClick={onClick}>modal</button>
        <BoardModal 
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          title={title}
          setTitle={setTitle}
          mainText={mainText}
          setMainText={setMainText}
          list={list}
          setList={setList}
        />
        <Board list={list} setList={setList}/>
    </div>
  );
}

export default App;
