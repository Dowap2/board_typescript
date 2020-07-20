import React, { useState } from 'react'
import axios from 'axios'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
};

function BoardModal({modalOpen , setModalOpen}: BoardModalProps) {
    const [title , setTitle] = useState<string>("");
    const [main , setMain] = useState<string>("");
    const post = (title , main) =>{
        axios({
            method: 'post',
            url: '/user/12345',
            data: {
              title: title,
              main: main
            }
        });
    }
    return (
      <div className={modalOpen}>
          <form action="/contacts" method="post">
            <div className="modal">
                <input type="text" className="input__title" name="title" placeholder="제목을 입력하시오." value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea className="input__text" name="main" placeholder="본문을 입력하시오" value={main} onChange={e => setMain(e.target.value)} />
                <div className="modal__button">
                    <button onClick={e => post(title , main)}>post</button>
                    <button type="reset"onClick={e => setModalOpen("modal__none")}>close</button>
                </div>
            </div>
          </form>
      </div>
    );
}

export default BoardModal;