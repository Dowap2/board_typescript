import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import Post from './Post'

function Board() {
  
  const [boolean, setBoolean] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<string>("edit__modal__none");
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [main, setMain] = useState<string>("");
  let [post, setPost] = useState<any[]>([]);
  let index:number = 1;

  function postFunc(list) {
    list.forEach(function(list){
      setPost(post = post.concat
        (<div>
          <div className="post__list__small__box">
            <Link to={{pathname: '/post', state: list}}>
              <Post title={list.title} index={index} time={list.time} like={list.like} bad={list.bad}/>
            </Link>
            <button className="delete__button" onClick={e=> deleteFunc(list._id)}>delete</button>
            <button className="edit__button" onClick={e=> editModalOpen(list._id)}>edit</button>
          </div>
        </div>)                 
      )

      index += 1;
    })
  };

  function editModalOpen(id) {
    setModalOpen("edit__modal__block");
    setId(id);
  };

  function editFunc(id, title, main) {
    axios.put(
      'http://localhost:8000/api',
      {params: {_id: id}, data: {title: title , main: main}}
    )
    setModalOpen("modal__none");
  };

  function deleteFunc(id) {
    axios.delete(
      'http://localhost:8000/api',
      {data: {id:id}, headers: {Authorization: "token"}}
    )
    window.location.reload()
  };

  if(boolean === true) {
    axios({
      method: 'get',
      url: 'http://localhost:8000/api',
      responseType: 'text'
    })
    .then(response => {postFunc(response.data.contact)})
    .catch(err => {console.log(err)})
    //
    setBoolean(false)
  };

    return (
      <div>
        <div className="post__list__box">
          <div className={modalOpen}>
            <form className="modal">
              <div className="modal__title">글 수정하기</div>
              <input type="text" name="title" placeholder="수정할 제목을 입력해주세요" id="title" className="input__title" value={title} onChange={e=> setTitle(e.target.value)}/>
              <textarea name="main" id="main" value={main} placeholder="수정할 본문을 입력해주세요" className="input__text" onChange={e=> setMain(e.target.value)}></textarea>
              <div className="modal__button">
                <button onClick={e=> setModalOpen("edit__modal__none")} className="modal__close__button">cancle</button>
                <button onClick={e=> editFunc(id , title , main)} className="modal__post__button">edit</button>
              </div>
            </form>
          </div>
          <div className="post__box__title">글 리스트 {post.length} 개</div>
          {post}
        </div>
      </div>
    );
}

export default Board;