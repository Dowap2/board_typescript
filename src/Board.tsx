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
      setPost(post = post.concat(<Link to={{pathname: '/post', state: list}}>
                                    <Post title={list.title} index={index}/>
                                  </Link>))
      index += 1;
    })
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