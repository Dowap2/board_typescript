import React , {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function DetailPost({location}) {
    const info:{title: string , main: string, _id:string , time:string, like:Number , bad:Number} = location.state;
    const [like, setLike] = useState<Number>(info.like)
    const [bad, setBad] = useState<Number>(info.bad)

    function likeFunc() {
      setLike(like+1);
      axiosFunc(like+1, bad)
    }
    function badFunc() {
      setBad(bad+1);
      axiosFunc(like, bad+1)
    }
    function axiosFunc(like, bad) {
      axios.put('http://localhost:8000/api/like',{params: {_id: info._id}, data:{like: like , bad: bad}})
    }
    return (
      <div className="detail__post">
          <Link to="/home"><button className="post__button">뒤로가기</button></Link>
          <div className="detail__title">
            <div className="detail__title__title">
              {info.title}
            </div>
            <div className="detail__title__time">
              {info.time}
            </div>
          </div>
          <div className="detail__mainText">
            {info.main}
          </div>
          <div className="detail__footer">
              <button onClick={e=> likeFunc()} className="detail__button__like">좋아요 {like}</button>
              <button onClick={e=> badFunc()} className="detail__button__bad">싫어요 {bad}</button>
            </div>
      </div>
    );
}

export default DetailPost;