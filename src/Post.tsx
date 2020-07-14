import React from 'react'

type GreetingsProps = {
    title: string
};

function Post({title}: GreetingsProps) {
    return (
      <div className="post__list">
        {title}
      </div>
    );
}

export default Post;