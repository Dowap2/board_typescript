import React from 'react';

function DetailPost({location}) {
    const info:Array<{title: string , mainText: string}> = location.state;
    return (
      <div>
          <div>
            {info[0].title}
          </div>
          <div>
            {info[0].mainText}
          </div>
      </div>
    );
}

export default DetailPost;