import { PLAYER_X, PLAYER_O, TURN} from '../actions/ActionTypes'

const initialState = {
    p1: 'X',
    p2: 'Y',
    turn: 'p1'
}

export function playerReducer(state=initialState, action){
    switch(action.type){
       
        case PLAYER_X:
            const newXState = { ...state }
            if(action.player === 'p1'){
                newXState.p1 = 'X'
                newXState.p2 = 'O'
            } else{
                newXState.p1 = 'X'
                newXState.p2 = 'O'
            }
            return newXState
        
        case PLAYER_O:
            const newOState = { ...state }
            if(action.player === 'p1'){
                newOState.p1 = 'O'
                newOState.p2 = 'X'
            } else{
                newOState.p1 = 'O'
                newOState.p2 = 'X'
            }
            return newOState    
    
        case TURN:
            const newState = {...state}

            if(newState.turn === 'p1'){
                newState.turn = 'p2'
            }else{
                newState.turn = 'p1'
            }
            return newState
        default:
            return state
        }
}