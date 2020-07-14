import React from 'react'

type GreetingsProps = {
    name: string;
    mark?: string;
    onClick: (name: string) => void;
};

function Board({ name, mark, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name); 
    return (
      <div>
        {name} {mark}
        <button onClick={handleClick}></button>
      </div>
    );
}

export default Board;