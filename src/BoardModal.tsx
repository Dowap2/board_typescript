import React, { useState } from 'react'
import axios from 'axios'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
};

function BoardModal({modalOpen , setModalOpen}: BoardModalProps) {
    const [title , setTitle] = useState<string>("");
    const [main , setMain] = useState<string>("");
    const like:Number = 0;
    const bad:Number = 0;

    function post(title , main){
        let time:string = setTime();
        axios({
            method:'post',
            url: 'http://localhost:8000/api',
            data:{
                title: title,
                main: main,
                time: time,
                like: like,
                bad: bad,
            }
        }).then(response => {
            console.log(response)
            console.log(time)
        }).catch(err => {console.log(err)})
    }
    function setTime(){
        let today = new Date();   
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        
        return (year+'-'+month+'-'+date+'-'+hours+':'+minutes);
    }

    return (
      <div className={modalOpen}>
          <form>
            <div className="modal">
                <div className="modal__title">글쓰기</div>
                <input type="text" className="input__title" name="title" placeholder="제목을 입력하시오." value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea className="input__text" name="main" placeholder="본문을 입력하시오" value={main} onChange={e => setMain(e.target.value)} />
                <div className="modal__button">
                    <button onClick={e => setModalOpen("modal__none")} className="modal__close__button">cancle</button>
                    <button onClick={e => post(title , main)} className="modal__post__button">post</button>    
                </div>
            </div>
          </form>
      </div>
    );
}

export default BoardModal;