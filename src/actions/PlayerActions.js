import {PLAYER_X, PLAYER_O, TURN} from './ActionTypes'

export function selectXPLayerAction(player){
    return{
        type: PLAYER_X,
        player
    }
}

export function selectOPLayerAction(player){
    return{
        type: PLAYER_O,
        player
    }
}

export function toogleTurnAction(){
    return {
        type: TURN
    }
}