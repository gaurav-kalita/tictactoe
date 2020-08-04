import React, { Fragment, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFormValues,  } from 'redux-form'
import { Link } from 'react-router-dom';

import './Players.css'

const Players = ({ players, formValue}) =>{
    
    const ref = useRef();
    const ref2 = useRef();
    var player1 = "";
    var player2 = "";
   
    if (formValue !== undefined) {
     player1 = formValue.player1
     player2 = formValue.player2
    }
    
    //to select the active player
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
            <h4 ref={ref} className="Player1 active" >{player1} </h4>
            </div>
            <div className="col-md-4 text-center">
            <h4 className="start "> <Link to="./">  RESTART  </Link> </h4>
            </div>
            <div className="col-md-4 text-center">
            <h4 ref={ref2} className="Player2">{player2} </h4>
            </div>
        </div>
    </Fragment>    
    )
}

const mapStateToProps = state =>{
    return {
        players: state.players,
        formValue: getFormValues('InputForm')(state),
    }
}


export default connect(mapStateToProps,) (Players);
