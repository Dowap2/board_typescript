import React from 'react'

type GreetingsProps = {
    name: string;
    mark?: string;
};

function Board({ name, mark}: GreetingsProps) {
    return (
      <div>
        {name} {mark}
      </div>
    );
}

export default Board;