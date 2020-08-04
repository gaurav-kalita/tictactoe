import React from 'react';
import {connect,} from 'react-redux';
import './Squares.css';

import { drawXAction, drawOAction, } from '../../../actions/BoardActions';
import { toogleTurnAction,} from '../../../actions/PlayerActions'
import {checkResult} from '../../../actions/ResultsAction'
import Cross from '../Cross/Cross';
import Zeroes from '../Zeroes/Zeroes';

const Squares = ({symbol, index, draw, players, board}) =>{

    const disabled = symbol ? 'disabled' : '';

    return(

        <div id="squares" className="col-md-4" onClick={() => draw(players,index, board)}>
            <div className={"" +disabled}>
            {symbol ? (symbol === 'X' ? <Cross/> : <Zeroes/>) : ''}
            </div>
        </div>
    
    )
}

const mapDispatchToProps = dispatch =>({
    draw: (players, cellIndex, board)=>{
        if (!board[cellIndex]) {
            if (players[players.turn] === 'X'){
                dispatch(drawXAction(cellIndex))
                
            }else{
                dispatch(drawOAction(cellIndex))
            }  
        }  dispatch(toogleTurnAction()) 
           dispatch(checkResult(board))
    },    
})

const mapStateToProps = state =>{
    return{
        players: state.players,
        board: state.board
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Squares);