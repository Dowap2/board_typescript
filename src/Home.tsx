import React, { useState } from 'react';
import Board from './Board'
import BoardModal from './BoardModal'

function Home() {
    const [modalOpen, setModalOpen] = useState<string>("modal__none");
    const onClick = () => {setModalOpen("modal__block")};

    return (
      <div>
          <button className="post__button" onClick={onClick}>글쓰기</button>
          <BoardModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          <Board />
      </div>
    );
}

export default Home;