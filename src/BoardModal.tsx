import React from 'react'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
    title: string;
    setTitle: any;
    mainText: string;
    setMainText: any;
    list: string[][];
    setList: any;
};
function BoardModal({modalOpen , setModalOpen , title , setTitle , mainText , setMainText ,list , setList}: BoardModalProps) {
    const post = () =>{
        const postItem: string[][] = [[title,mainText]]
        setModalOpen("modal__none");
        setList(list.concat(postItem));
    }
    return (
      <div className={modalOpen}>
          <div className="modal">
            <input type="text" className="input__title" placeholder="제목을 입력하시오." value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea className="input__text" placeholder="본문을 입력하시오" value={mainText} onChange={e=> setMainText(e.target.value)}/>
            <div className="modal__button">
                <button onClick={e => post()}>post</button>
                <button onClick={e => setModalOpen("modal__none")}>close</button>
            </div>
          </div>
      </div>
    );
}

export default BoardModal;