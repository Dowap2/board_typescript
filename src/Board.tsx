import React from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'

type BoardProps = {
  list: Array<any>;
};

let postList:Array<any> = [];
let index:number = 0;

function Board({list}: BoardProps) {
  for(let i:number=index; i<list.length; i++){
    const postItem:any = [(<Link to={{pathname: '/post', state: list}}><Post title={list[i].title} index={index}/></Link>)]
    index += 1;
    postList = postList.concat(postItem)
  }
    return (
      <div>
        {postList}
      </div>
    );
}

export default Board;