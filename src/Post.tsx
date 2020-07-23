import React from 'react'

type GreetingsProps = {
    title: string
    index: number
    time: string
    like: Number
    bad: Number
};

function Post({title , index , time, like ,bad}: GreetingsProps) {
    return (
      <div className="post__list">
        <div className="post__list__index">{index}</div>
        <div className="post__list__title">{title}</div>
        <div className="post__list__time">{time}</div>
        <div className="post__like__bad">좋아요:{like} 싫어요:{bad}</div>
      </div>
    );
}

export default Post;