import React from 'react';
import {Link} from 'react-router-dom'

function DetailPost({location}) {
    const info:{title: string , main: string} = location.state;
    return (
      <div className="detail__post">
          <Link to="/home"><button className="post__button">뒤로가기</button></Link>
          <div className="detail__title">
            제목 : {info.title || null}
          </div>
          <div className="detail__mainText">
            {info.main || null}
          </div>
      </div>
    );
}

export default DetailPost;