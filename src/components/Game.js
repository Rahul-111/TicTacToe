import React,{useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../Helpers';

const styles={
  width:'200px',
  margin:'20px auto'
}

const Game=()=>{
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xIsNext,setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick=(i)=>{
    const boardCopy = [...board];
    //if user click an occupied square or if game is won,return
    if(winner || boardCopy[i]) return ;
    //Put an X or an ) in the clicked square
    boardCopy[i] = xIsNext?'X':'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  const renderMoves=()=>{
    return <button onClick={()=> setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  }

  return(
    <>
      <Board squares={board} onClick ={handleClick}/>
      <div style={styles}>
        <p>{winner? 'Winner: '+ winner: 'Next Player: '+(xIsNext ?'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  )
}

export default Game;