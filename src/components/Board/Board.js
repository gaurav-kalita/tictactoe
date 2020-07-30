import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Squares from './Squares/Squares'
import '../Board/Board.css'



const Board = ({board}) =>{

    return(
    <Fragment>
        <div className="row">
          { board.map((value, index)=> <Squares key={index} index={index} symbol={value}/> ) }
        </div>
    </Fragment>    
    )
}

const mapStateToProps = state =>{
    return {
        board: state.board,
    }
}


export default connect(mapStateToProps, ) (Board);