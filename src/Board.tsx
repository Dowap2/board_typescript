import React from 'react'
import Post from './Post'

type GreetingsProps = {
  list: string[][];
  setList: any;
};

let postList:any = [];

function Board({list ,setList}: GreetingsProps) {
  for(let i:number=0; i<list.length; i++){
    const postItem:any = (<Post title={list[i][0]}/>)
    postList = postList.concat(postItem)
    setList(list[i][0] == null)
  }
    return (
      <div>
        {postList}
      </div>
    );
}

export default Board;