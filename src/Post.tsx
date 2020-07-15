import React from 'react'

type GreetingsProps = {
    title: string
    index: number
};

function Post({title , index}: GreetingsProps) {
    return (
      <div className="post__list">
        <div className="post__list__title">{index}. {title}</div>
      </div>
    );
}

export default Post;