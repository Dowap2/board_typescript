import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'
import axios from 'axios';

function Board() {
  
  const [boolean , setBoolean] = useState<boolean>(true);
  const [modalOpen , setModalOpen] = useState<string>("edit__modal__none");
  let [post , setPost] = useState<any[]>([]);
  const [id , setId] = useState<string>("");
  const [title , setTitle] = useState<string>("");
  const [main , setMain] = useState<string>("");
  let index:number = 1;

  function postFunc(list){
    list.forEach(function(list){
      setPost(post = post.concat(<div>
                                  <div className="post__list__small__box">
                                    <Link to={{pathname: '/post', state: list}}>
                                      <Post title={list.title} index={index} time={list.time} like={list.like} bad={list.bad}/>
                                    </Link>
                                    <button className="delete__button" onClick={e=> deleteFunc(list._id)}>delete</button>
                                    <button className="edit__button" onClick={e=> editModal(list._id)}>edit</button>
                                  </div>
                                </div>
                                )
      )
      index += 1;
    })
  }
  function editModal(id){
    setModalOpen("edit__modal__block");
    setId(id);
  }
  function editFunc(id , title , main){
    axios.put('http://localhost:8000/api',{params: {_id: id}, data:{title: title , main: main}})
    setModalOpen("modal__none");
  }
  function deleteFunc(id){
    axios.delete('http://localhost:8000/api', {data:{id:id}, headers:{Authorization: "token"}})
    window.location.reload()
  }

  if(boolean === true){
    axios({
      method: 'get',
      url: 'http://localhost:8000/api',
      responseType: 'text'
    })
      .then(response => {
        postFunc(response.data.contact)
        console.log(response)
      }).catch(err => {console.log(err)})
    setBoolean(false)
  }

    return (
      <div>
        <div className="post__list__box">
          <div className={modalOpen}>
            <form className="edit__modal">
              <input type="text" name="title" placeholder="수정할 제목을 입력해주세요" id="title" className="edit__modal__title" value={title} onChange={e=> setTitle(e.target.value)}/>
              <textarea name="main" id="main" value={main} placeholder="수정할 본문을 입력해주세요" className="edit__modal__main" onChange={e=> setMain(e.target.value)}></textarea>
              <button onClick={e=> editFunc(id , title , main)}>edit</button>
              <button onClick={e=> setModalOpen("edit__modal__none")}>close</button>
            </form>
          </div>
          <div className="post__box__title">글 리스트 {post.length} 개</div>
          {post}
        </div>
      </div>
    );
}

export default Board;