import React from 'react';
import {Link} from 'react-router-dom'

function DetailPost({location}) {
    const info:Array<{title: string , mainText: string}> = location.state;
    return (
      <div className="detail__post">
          <Link to="/home"><button className="back__button">뒤로가기</button></Link>
          <div className="detail__title">
            제목 : {info[0].title}
          </div>
          <div className="detail__mainText">
            {info[0].mainText}
          </div>
      </div>
    );
}

export default DetailPost;