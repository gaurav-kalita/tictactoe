import React, { Fragment, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './Players.css'

const Players = ({board, players}) =>{
    
    const ref = useRef();
    const ref2 = useRef();
   
    useEffect(()=>{
        if (players.turn === 'p1') {
             ref.current.classList = "Player1 active";
             ref2.current.classList="Player2";
             
        } else if(players.turn === 'p2') {
            ref2.current.classList = "Player2 active";
            ref.current.classList="Player1";
        }else{
            
        }
    },[players.turn])


    return(
    <Fragment>
        <div className="row mt-3">
            <div className="col-md-4 text-center">
            <h4 ref={ref} className="Player1 active" >Player1 </h4>
            </div>
            <div className="col-md-4 text-center">
            <h4 className="start "> START </h4>
            </div>
            <div className="col-md-4 text-center">
            <h4 ref={ref2} className="Player2">Player1 </h4>
            </div>
        </div>
    </Fragment>    
    )
}

const mapStateToProps = state =>{
    return {
        players: state.players
    }
}


export default connect(mapStateToProps, ) (Players);