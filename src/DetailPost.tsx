import React , {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function DetailPost({location}) {
    const info:{title: string , main: string, _id:string , time:string, like:Number , bad:Number} = location.state;
    const [like , setLike] = useState<Number>(info.like)
    const [bad , setBad] = useState<Number>(info.bad)

    function likeFunc(){
      setLike(like+1);
      axios.put('http://localhost:8000/api/like',{params: {_id: info._id}, data:{like: like , bad: bad}})
    }
    function badFunc(){
      setBad(bad+1);
      axios.put('http://localhost:8000/api/like',{params: {_id: info._id}, data:{like: like , bad: bad}})
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
            <button onClick={e=> likeFunc()}>좋아요:{like}</button>
            <button onClick={e=> badFunc()}>싫어요:{bad}</button>
            <button onClick={e=> console.log(like , bad)}></button>
          </div>
      </div>
    );
}

export default DetailPost;