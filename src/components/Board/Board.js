import React from 'react';
import Squares from './Squares/Squares'

const board = [1,2,3,4,5,6,7,8,9]


const key=()=>{
    for (let index = 0; index < 10; index++) {
        i;
}
}


const Board = ({}) =>{
    return(
        <div className="row">
          { board.map(()=> <Square key={key}/> ) }
        </div>
     
    )
}

export default Board;