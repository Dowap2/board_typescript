import React from 'react'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
    title: string;
    setTitle: any;
    mainText: string;
    setMainText: any;
    list: Array<Obj>;
    setList: any;
};

type Obj = {
	title: string;
	mainText: string;
}

function BoardModal({modalOpen , setModalOpen , title , setTitle , mainText , setMainText ,list , setList}: BoardModalProps) {
    const post = () =>{
        const postItem:Obj = {
            title: title,
            mainText: mainText
        }
        let listItem: Array<Obj> = [];
        listItem = list.concat(postItem);
        setModalOpen("modal__none");
        setList(listItem);
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