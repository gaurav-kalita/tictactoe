import {combineReducers} from 'redux'
import { reducer as form  } from 'redux-form';

import {boardReducer} from './BoardReducers'
import {playerReducer} from './PlayerReducers'
import { resultReducer } from './ResultReducer';


export default  combineReducers({
    board: boardReducer,
    players: playerReducer,
    result: resultReducer,
    form: form
    })
