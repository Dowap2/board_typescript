import React from 'react'

type BoardModalProps = {
    modalOpen: string;
    setModalOpen: any;
};

function BoardModal({modalOpen , setModalOpen}: BoardModalProps) {
    return (
      <div className={modalOpen}>
          <div className="modal">
            <p>지금 보시는 텍스트는 모달 텍스트입니다.</p>
            <button onClick={e => setModalOpen("modal__none")}>close</button>
          </div>
      </div>
    );
}

export default BoardModal;