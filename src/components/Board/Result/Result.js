import React  from 'react';
import { connect } from 'react-redux';
import { getFormValues,  } from 'redux-form'



const Result = ({ result, formValue}) =>{

    var player1 = "";
    var player2 = "";

    if (formValue !== undefined) {
    player1 = formValue.player1
    player2 = formValue.player2
    }


    if(result.win === 'X'){
        return (<div className="alert alert-success mt-2">{player1} Wins</div>)
    }else if(result.win === 'O'){
        return (<div className="alert alert-success mt-2">{player2} Wins</div>)
    }else if(result.tie === true && result.win === null) {
        return  <div className="alert alert-info mt-2">Its a DRAW</div> 
    }else return (<div className="alert alert-info mt-2">Enjoy Playing</div> )

    // return(
    //     <div>
            
            
    //     </div>
    // )
}

const mapStateToProps = state =>{
    return {
        players: state.players,
        result : state.result,
        formValue: getFormValues('InputForm')(state),
    }
}


export default connect(mapStateToProps, ) (Result);