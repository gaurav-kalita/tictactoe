import {combineReducers} from 'redux'
import {boardReducer} from './BoardReducers'

export default  combineReducers(
    {board: boardReducer
    })
