import {combineReducers} from 'redux'

import {boardReducer} from './BoardReducers'
import {playerReducer} from './PlayerReducers'

export default  combineReducers({
    board: boardReducer,
    players: playerReducer
    })
