import React, { useState } from 'react';
import Board from './Board'
import BoardModal from './BoardModal'

function Home() {
    const [modalOpen, setModalOpen] = useState<string>("modal__none");
    const [title, setTitle] = useState<string>("");
    const [mainText, setMainText] = useState<string>("");
    const [list , setList] = useState<Array<Object>>([]);
    const onClick = () => {setModalOpen("modal__block")};

    return (
      <div>
          <button className="post__button" onClick={onClick}>글쓰기</button>
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
          <Board list={list}/>
      </div>
    );
}

export default Home;