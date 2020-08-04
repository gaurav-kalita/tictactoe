import {PLAYER_X, PLAYER_O} from '../actions/ActionTypes';

export const playerNameX = () =>{
    return{
        type: PLAYER_X
    }
}


export const playerNameO = () =>{
    return{
        type: PLAYER_O
    }
}