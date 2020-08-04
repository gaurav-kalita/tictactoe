import {X_WINS, O_WINS, TIE, KEEP_PLAYING} from '../actions/ActionTypes'


const initialState = {
    result: null,
    tie: false
}

export function resultReducer(state=initialState, action){

switch(action.type){
    case X_WINS:
        return{
            win:'X',
            tie:false
        }
    case O_WINS:
        return{
            win:'O',
            tie:false
        }
    case TIE:
        return{
            win:null,
            tie: true
        }
    case KEEP_PLAYING:
            return{
                win:null,
                tie: false
            }
    default:
        return state
}
}

