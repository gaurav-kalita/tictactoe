import {DRAW_X, DRAW_O} from './ActionTypes'


export const drawXAction = (cellIndex) =>{
    return{
        type: DRAW_X,
        cellIndex
    }
}

export const drawOAction = (cellIndex)=>{
    return{
        type: DRAW_O,
        cellIndex
    }
}