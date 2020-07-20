import React, { useState } from 'react'
import axios from 'axios'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
};

function BoardModal({modalOpen , setModalOpen}: BoardModalProps) {
    const [title , setTitle] = useState<string>("");
    const [main , setMain] = useState<string>("");

    function post(title , main){
        axios({
            method:'post',
            url: 'http://localhost:8000/api',
            data:{
                title: title,
                main: main
            }
        }).then(response => {
            console.log(response)
        }).catch(err => {console.log(err)})
    }

    return (
      <div className={modalOpen}>
          <form>
            <div className="modal">
                <input type="text" className="input__title" name="title" placeholder="제목을 입력하시오." value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea className="input__text" name="main" placeholder="본문을 입력하시오" value={main} onChange={e => setMain(e.target.value)} />
                <div className="modal__button">
                    <button onClick={e => post(title , main)}>post</button>
                    <button onClick={e => setModalOpen("modal__none")}>close</button>
                </div>
            </div>
          </form>
      </div>
    );
}

export default BoardModal;