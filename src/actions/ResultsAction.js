import {X_WINS, O_WINS, TIE, KEEP_PLAYING} from './ActionTypes'
import {ResultChecker} from './ResultChecker'

export function checkResult(board){
    if(ResultChecker(board, 'X')){
        return{
           type: X_WINS 
        }
    } else if(ResultChecker(board, 'O')){
        return{
           type: O_WINS 
        }
    } else if(ResultChecker(board) === false){
        return{
            type: TIE
        }
    }else return{
        type: KEEP_PLAYING
    }
}