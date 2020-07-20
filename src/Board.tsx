import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'
import axios from 'axios';

let index:number = 0;
let post:any[] = [];
let i:boolean = true

function Board() {

  const [list , setList] = useState<any>([]);
  if(i === true){
    (function(){
      axios({
        method: 'get',
        url: 'http://localhost:8000/contacts',
          responseType: 'text'
        })
        .then(response => {
          console.log(response.data.contact)
          setList(response.data.contact)
        }).catch(err => {console.log(err)})
    
      list.forEach(function(list){
        post = post.concat(<Link to={{pathname: '/post', state: list}}>
                            <Post title={list.title} index={index}/>
                          </Link>)
        index += 1;
      })
      i = false;
    })()
  }
    return (
      <div>
        <div className="post__list__box">
          <div className="post__list__title">글 리스트 {index} 개</div>
          {post}
        </div>
      </div>
    );
}

export default Board;