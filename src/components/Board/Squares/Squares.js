import React from 'react';
import {connect} from 'react-redux';
import './Squares.css';

import { drawXAction, drawOAction } from '../../../actions/BoardActions';
import Cross from '../Cross/Cross';
import Zeroes from '../Zeroes/Zeroes';

const Squares = ({symbol, index, draw}) =>{
    return(

        <div id="squares" className="col-md-4" onClick={() => draw(index)}>
            {symbol ? (symbol === 'X' ? <Cross/> : <Zeroes/>) : ''}
        </div>
    
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        draw: (cellIndex) => dispatch(drawOAction(cellIndex)) 
    }
}

export default connect(null, mapDispatchToProps) (Squares);