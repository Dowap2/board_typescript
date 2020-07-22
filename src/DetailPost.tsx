import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function DetailPost({location}) {
    const info:{title: string , main: string, _id:string , time:string, like:Number , bad:Number} = location.state;

    function likeFunc(like ,bad){
      axios.put('http://localhost:8000/api/like',{params: {_id: info._id}, data:{like: like+1 , bad: bad}})
    }
    function badFunc(like ,bad){
      axios.put('http://localhost:8000/api/like',{params: {_id: info._id}, data:{like: like , bad: bad+1}})
    }
    return (
      <div className="detail__post">
          <Link to="/home"><button className="post__button">뒤로가기</button></Link>
          <div className="detail__title">
            제목 : {info.title}
          </div>
          <div className="detail__mainText">
            {info.main}
            {info.time}
            <button onClick={e=> likeFunc(info.like , info.bad)}>좋아요:{info.like}</button>
            <button onClick={e=> badFunc(info.like , info.bad)}>싫어요:{info.like}</button>
          </div>
      </div>
    );
}

export default DetailPost;