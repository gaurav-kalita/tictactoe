import React from 'react';
import "./App.css";

import Board from './components/Board/Board';
import Players from './components/Board/Players';


function App() {
    return(
        <div className="container">
            <Players/>
            <div id="board" className="row">
                <div className="col-md-4 col-lg-4 offset-md-4 offset-lg-4 ">
                <Board />
                </div>
            </div>    
        </div>
    );
}

export default App;