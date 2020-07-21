import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'
import axios from 'axios';

function Board() {
  
  const [boolean , setBoolean] = useState<boolean>(true);
  let [post , setPost] = useState<any[]>([])
  let index:number = 1;

  function postFunc(list){
    list.forEach(function(list){
      setPost(post = post.concat(<div>
                                  <Link to={{pathname: '/post', state: list}}>
                                    <Post title={list.title} index={index}/>
                                  </Link>
                                  <button className="delete__button" onClick={e=> deleteFunc(list.title)}>delete</button>
                                  
                                </div>
                                  )
      )
      index += 1;
    })
  }
  function deleteFunc(title){
    axios.delete('http://localhost:8000/api', {data:{title:title}, headers:{Authorization: "token"}})
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
          <div className="post__list__title">글 리스트 {post.length} 개</div>
          {post}
        </div>
      </div>
    );
}

export default Board;